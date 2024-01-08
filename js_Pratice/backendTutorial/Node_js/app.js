const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Hello World!",
      })
    );

  const url = req.url;
  const method = req.method;

  // console.log(req);
});

//res.write()
//res.setHeader()
//res.end()

server.listen(8000, (req, res) => {
  console.log("Server Running");
});
