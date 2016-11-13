var path = require("path"),
    webpack = require("webpack"),
    srcPath = path.join(__dirname, "src");

let entry = {
    test: path.join(srcPath, "test.js")
};
var config = {
    entry: entry,
    output: {
        path: "dist",
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.js'],
        root: [path.join(__dirname, "node_modules"), srcPath],
    },
    module: {
        loaders: [{
            test: /\.(eot|woff|woff2|ttf|svg)$/,
            loader: "file?name=fonts/[name].[ext]"
        }, {
            test: /(shCore|shBrushJava)/,
            loader: "file?name=vendor/[name].[ext]"
        }, {
            test: /jquery/,
            loader: "expose?jQuery"
        }, {
            test: /\.vue$/,
            loader: "vue"
        },{
            test: /html$/,
            exclude: /index.html/,
            loader: "file?name=/[name].html"
        }, {
            test: /\.(png|jpg)$/,
            loader: "file?name=img/[name].[ext]"
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.scss$/,
            loader: "style!css!postcss!sass"
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "babel?presets[]=stage-1!babel?presets[]=es2015!eslint-loader"
        }, {
            test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
            loader: "file?name=fonts/[name].[ext]"
        }]
    },
    eslint: {
        configFile: "./.eslintrc"
    }
};

module.exports = config;
