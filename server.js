const express = require("express");
const path = require("path");
const app = express();
const assetsDir = path.join(__dirname, "assets");

app.get(
    new RegExp("/jsonedit((\/style.css)|(\/index.js))"),
    function (req, resp) {
        resp.sendFile(path.join(assetsDir, req.params[0]));
    });

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "assets", "index.html"));
});

app.listen(8006, function () {
    console.log("listening on port 8006");
});


// End
