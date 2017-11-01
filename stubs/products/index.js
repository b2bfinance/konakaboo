const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  switch (req.url) {
    case '/bank_accounts':
      res.writeHead(200, {"Content-Type": "application/json"});
      fs.createReadStream('response.json').pipe(res);
    break;
    case '/buy_to_lets':
      res.writeHead(200, {"Content-Type": "application/json"});
      fs.createReadStream('response.json').pipe(res);
    break;
    default:
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.end();
  }
});

console.log('listening on 3000');
server.listen(3000);
