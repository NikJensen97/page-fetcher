const fs = require('fs');
const request = require('request');
let bodylength;
const website = process.argv[2];
const fileSpot = process.argv[3];

request(`${website}`, (error, response, body) => {
  bodylength = body.length;
  fs.writeFile(`${fileSpot}`, body, err => {
    if (err) {
      console.error(err);
    }
  // file written successfully
  });
  console.log(`Downloaded and saved ${bodylength} bytes to ${fileSpot}`);
});

