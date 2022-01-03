const fs = require("fs");

const readStream = fs.createReadStream(__dirname + "/source.txt", {
    encoding: "utf-8",
    highWaterMark: 16 * 1024,
});
const writeStream = fs.createWriteStream(__dirname + "/output.txt");

readStream.on("data", function(chunk) {
    writeStream.write(chunk);
});