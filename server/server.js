const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const router = express.Router();

const port = process.env.PORT || 8080;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/");
  },
  filename: function (req, file, cb) {
    const extension = file.originalname.replace(/.+\./, "");
    cb(null, file.fieldname + "-" + Date.now() + "." + extension);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10000000, files: 1 },
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return callback(new Error("Only Images are allowed !"), false);
    }
    callback(null, true);
  },
});

router.post("/images/upload", upload.single("avatar"), (req, res) => {
  console.log(req.file);
  let path = `/images/${req.file.filename}`;
  res
    .status(200)
    .json({ message: "Image Uploaded Successfully!", path: `http://localhost:${port}${path}` });
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", router);

app.use(express.static(path.join(__dirname, "public")));


app.listen(port);
console.log(`App Runs on ${port}`);
