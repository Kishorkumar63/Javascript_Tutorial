const http = require("http");
const fs=require("fs")

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write(
        "<form method='post'> <input  name='test' type='text'   /> <button>Submit</button>   </form>"
      );
if(url==="/message" && method==='post')
{
    res.write(" <h1>Product</h1>");
fs.writeFileSync("hello.txt","Dummy Content For The hello txt File");
                //redirect response header
    res.setHeader("Location","/");
            //redirect status code
    res.statusCode=302
 return   res.end()


}

  }
})
 


server.listen(8000, (req, res) => {
  console.log("Server Running");
});
