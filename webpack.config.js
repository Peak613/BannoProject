const path = require('path');
var webpack = require('webpack');


module.exports = {

    entry: {
        app: ["./src/banno.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/assets/",
        filename: "banno.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            }]
    }
};

