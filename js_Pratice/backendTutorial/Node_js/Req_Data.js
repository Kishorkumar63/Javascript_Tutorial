const http = require("http");
const fs = require("fs");

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
      "<form  enctype='multipart/form-data' method='post'> <input  name='test' type='text'   />  <button>Submit</button>   </form>"
    );
    //getting req data
    const body = [];
    req.on("data", (chunk) => {
      //   console.log("Memory Chunk:");
      //   console.log(chunk);

      body.push(chunk);

      console.log(chunk);
    });

    req.on("end", () => {
      //merge req data
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      fs.writeFileSync("hello.txt", parsedBody);
    });

    // Reading File data part by part
    res.end("");
  }
});

server.listen(8000, (req, res) => {
  console.log("Server Running");
});
