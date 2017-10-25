const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
    switch (req.url) {
        case '/bank_accounts':
            res.writeHead(200, {"Content-Type": "application/json"});
            fs.createReadStream('bank_accounts_response.json').pipe(res);
        break;
        case '/buy_to_lets':
            res.writeHead(200, {"Content-Type": "application/json"});
            fs.createReadStream('buy_to_lets_response.json').pipe(res);
        break;
        default:
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.end();
    }
});

console.log('listening on 3000');
server.listen(3000);
