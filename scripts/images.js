const PinataJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkYzViMzNmMS00ZDRjLTQwODktYTY4OS1jOWY0ZDg3NjI2ZDUiLCJlbWFpbCI6InJhdWhhbmFsaTJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjY2MTc3OTQzNGUzZWZhMzc0MGRkIiwic2NvcGVkS2V5U2VjcmV0IjoiZjJjMTFiNTkwZmFjODI3YTNhOTI2M2RhMTQ0Njk0NGNlZGVmNGY3OTNiOThmNzk4YzU2YTBiYmNjODJmZDAyNiIsImlhdCI6MTY3MjQyMDk1MX0.3bHzu1OpMwB9Y1O4ISrSfIZqMX3svYGpaysxmSucW9w";
const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");
const recursive = require("recursive-fs");
const basePathConverter = require("base-path-converter");

async function main() {
  try {
    const path = "./images";
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    recursive.readdirr(path, function (err, dirs, files) {
      let data = new FormData();
      files.forEach((file) => {
        data.append(`file`, fs.createReadStream(file), {
          filepath: basePathConverter(path, file),
        });
      });

      const metadata = JSON.stringify({
        name: "mathImages",
      });
      data.append("pinataMetadata", metadata);

      return axios
        .post(url, data, {
          maxBodyLength: "Infinity",
          headers: {
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
            Authorization: `Bearer ${PinataJWT}`,
          },
        })
        .then(function (response) {
          console.log(response.data);
          process.exit(0);
        })
        .catch(function (error) {
          throw error;
        });
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main(); 