import http from "http";
import { generateProducts } from "./product-mocks.mjs";

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      data: generateProducts(20),
    })
  );
});

server.listen(6005, () => {
  console.log("mock-api running on port 6005");
});
