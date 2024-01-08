const http = require("http");

const Server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html"); //What is response Type

  res.write(
    "<form method='post'> <input  name='test' type='text'   /> <button>Submit</button>   </form>"
  );

  res.end("");
});

Server.listen(8000, (req, res) => {
  console.log("Server Running ");
});
