const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },

  //or
  //   destination: "uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      // file.originalname.replace(/\.[^/.]+$/,"")
      file.originalname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

let maxSizex = 10 * 1000 * 1000;

let upload = multer({
  storage: storage,
  limits: {
    fieldSize: maxSizex,
  },
  fileFilter: function (req, file, cb) {
    let fileTypes = /jpeg|jpg|png/;
    let mimeType = fileTypes.test(file.mimetype);
    let extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    if (mimeType && extname) {
      return cb(null, true);
    }
    cb(`Error:File Upload Only Support the follwing ${fileTypes}`);
  },
}).array("mypic");

app.get("/", (req, res) => {
  res.render("signup");
});
app.post("/upload", (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      res.send(err);
      if (err instanceof multer.MulterError && err.code == "LIMIT_FILE_SIZE") {
        return res.send("File size is maximum 2mb");
      }
    } else {
      res.send("success image uploads");
    }
  });
});

app.listen(8000, (req, res) => {
  console.log("Server Running");
});
