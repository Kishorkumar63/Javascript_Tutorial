const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-type", "text/html");

    res.write(" <h1>Product</h1>");
    res.write("<ul>");
    res.write(" <li>Laptop</li>");
    res.write("<li>Smart Phone</li>");
    res.write("<li>Smart Watch</li>");
    res.write("<li>Solar Light</li>");
    res.write("<li>Ligth</li>");

    res.write("</ul>");
  }
  if (url === "/form") {
    res.setHeader("Content-type", "text/html");
    res.write(
      "<form method='post'> <input  name='test' type='text'   /> <button>Submit</button>   </form>"
    );
    res.end("");
  }
});

server.listen(8000, (req, res) => {
  console.log("Server Running");
});
