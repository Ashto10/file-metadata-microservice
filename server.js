const https = require("https");
const express = require('express');
const app = express();

const multer  = require('multer');
var upload = multer({ dest: 'temp/' })

app.use(express.static('public'));

app.get("/", (req, res) => {
  return res.sendFile(__dirname + '/views/index.html');
});

app.post("/api/analyze", upload.single('file'), (req,res) => {
  console.log(req.file);
  return res.send({size: req.file.size});
});

let listener = app.listen(process.env.PORT);