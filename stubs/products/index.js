const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.writeHead(200, { "Content-Type": "application/json" });
  fs.createReadStream("response.json").pipe(res);
});

console.log("listening on 3000");
server.listen(3000);
