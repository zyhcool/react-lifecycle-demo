var path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: "./build",
        historyApiFallback: true,
        inline: true,
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
        ]
    },
};