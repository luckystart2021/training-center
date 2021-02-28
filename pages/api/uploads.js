import nextConnect from "next-connect";
import multer from "multer";

async function postData(url = "", data) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "multipart/form-data",
    },
    redirect: "follow", // manual, *follow, error
    body: data, // body data type must match "Content-Type" header
  });
  //   console.log("response", response);
  return response.json(); // parses JSON response into native JavaScript objects
}
const upload = multer({
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      console.log("file", file);
      cb(null, file.originalname);
    },
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array("upload"));

apiRoute.post((req, res) => {
  console.log("req", req.files);
  postData("https://api.dtc-project.tk/api/user/upload/ck", req.files.path)
    .then((data) => {
      //   console.log("thanh cong roi", data); // JSON data parsed by `data.json()` call
    })
    .catch((error) => {
      console.log("loi roi:", error.message);
    });
  res.status(200).json({
    uploaded: true,
    url: `http://localhost:3000/uploads/${req.files[0].filename}`,
  });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
