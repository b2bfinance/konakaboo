#!/usr/bin/env node
/**
 * Products Embed Google Cloud Storage deployment script.
 *
 * USAGE:
 * ======
 *
 * $ export GCLOUD_STORAGE_KEY_FILE=/path/to/cert.json
 * $ push
 *
 * DEPENDENCIES:
 * =============
 *
 * Requires `node` to be available in your environment, and
 * that you've installed the dependencies via `npm i`.
 *
 * WARNINGS:
 * =========
 * - This script will not work unless the CWD is this ./scripts
 *   directory.
 * - This is not safe if only partially executed it will mean
 *   the file didn't make it to GCS or the permissions and/or
 *   metadata wasn't set which will cause access issues.
 */

const fs = require('fs');
const path = require('path');
const gcStorage = require('@google-cloud/storage');
const pkg = require('../package.json');

const bucketName = 'b2bfinanceassets';

const storageOptions = {
  projectId: 'b2bfinance-186310',
  keyFilename: process.env.GCLOUD_STORAGE_KEY_FILE || '/run/secrets/google.json'
};

const Storage = gcStorage(storageOptions);
const bucket = Storage.bucket(bucketName);

function log(message) {
  process.stdout.write(`[${new Date()}] INFO: ${message.trim()}\n`);
}

function fatal(message, err) {
  process.stderr.write(`[${new Date()}] FATAL: ${message.trim()}\n${err}\n`);
  process.exit(1);
}

function root(location) {
  return path.join(__dirname, '..', location);
}

function run(bucket, src, dest) {
  log(`Reading: ${src}`);
  log(`Writing to: ${dest}`);

  const file = bucket.file(dest);

  fs.createReadStream(src)
    .pipe(file.createWriteStream({ gzip: true }))
    .on('error', err => {
      fatal('Error uploading build.', err);
    })
    .on('finish', async () => {
      try {
        await file.makePublic();

        await file.setMetadata({
          contentType: 'application/javascript',
          contentLanguage: 'en',
          cacheControl: 'max-age=86400'
        });
      } catch (e) {
        fatal('Unable to complete actions to ensure browsers love us.', e);
      }
    });
}

async function getSource() {
  const am = require(root(`/build/asset-manifest.json`));
  const staticDir = root('./build/static/js');
  const buildFilename = `./build/${new Date().getTime()}.js`;

  if (!am) {
    fatal('Cannot find asset-manifest.');
  }

  try {
    const files = await fs.promises.readdir(staticDir);

    const contents = await Promise.all(
      files.map(file => fs.promises.readFile(path.join(staticDir, file)))
    );

    await fs.promises.writeFile(buildFilename, contents);
  } catch (e) {
    fatal(e);
  }

  return buildFilename;
}

log(`Bucket: ${bucketName}`);
log(`Project: ${storageOptions.projectId}`);
log(`Key file: ${storageOptions.keyFile}`);

let version = pkg.version;
let source = getSource();

const main = async () => {
  run(bucket, await source, `products-embed/main-${version}.js`);
};

do {
  main();
  version = version.substr(0, version.lastIndexOf('.'));
} while (version != '');
