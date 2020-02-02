const path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "eat.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "anteater.js",
    },
}
