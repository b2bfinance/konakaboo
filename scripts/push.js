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

const bucketName = 'b2bfinanceassets';
const storageOptions = {
  projectId: 'b2bfinance-186310',
  keyFilename: process.env.GCLOUD_STORAGE_KEY_FILE || '/run/secrets/google.json'
};
const fs = require('fs');
const Storage = require('@google-cloud/storage')(storageOptions);
const bucket = Storage.bucket(bucketName);

function log(message) {
  process.stdout.write(`[${new Date()}] INFO: ${message.trim()}\n`);
}

function fatal(message, err) {
  process.stderr.write(`[${new Date()}] FATAL: ${message.trim()}\n${err}\n`);
  process.exit(1);
}

function root(path) {
  return require('path').join(__dirname, '..', path);
}

function run(bucket, src, dest) {
  log(`Reading: ${src}`);
  log(`Writing to: ${dest}`);

  const file = bucket.file(dest);
  fs
    .createReadStream(src)
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
      process.exit(0);
    });
}

function getSource() {
  const am = require(root(`/build/asset-manifest.json`));
  const src = am['main.js'];

  if (src === '') {
    fatal('Cannot find main.js in asset-manifest.');
  }

  return root(`/build/${src}`);
}

log(`Bucket: ${bucketName}`);
log(`Project: ${storageOptions.projectId}`);
log(`Key file: ${storageOptions.keyFile}`);

run(bucket, getSource(), 'products-embed/main.js');