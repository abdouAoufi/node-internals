const fs = require("fs");

const data = fs.readFileSync(process.cwd() + "/test.ts", "utf-8");
fs.mkdirSync(process.cwd() + "/src")
    // console.log(data);