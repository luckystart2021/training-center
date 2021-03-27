import nextConnect from "next-connect";
import multer from "multer";
import userRequestService from "../../src/services/userService/user.service";

async function postData(url = "", data) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: data, // body data type must match "Content-Type" header
  });
  console.log("response", response.statusText);
  return response.json(); // parses JSON response into native JavaScript objects
}

export default async (req, res) => {
  let fileName = "";
  console.log("file name", req.body);
  postData("https://api.hellobugs.dev/api/user/upload/ck", req.body)
    .then((data) => {
      fileName = data;

      console.log("thanh cong roi", data); // JSON data parsed by `data.json()` call
    })
    .catch((error) => {
      fileName = error.message;
      console.log("loi roi:", error.message);
    });
  res.status(200).json({ url: "req.formData.name" });
};

// cho nay upload file hak
//uk luong di nhu nao tâ
