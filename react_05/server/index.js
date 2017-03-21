import express from "express";
import path from "path";

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from "../webpack.config.dev";
import webpackHotMiddleware from 'webpack-hot-middleware';

let app = express();

const complier = webpack(webpackConfig);
app.use(webpackMiddleware(complier, {
  hot:true,
  publicPath: webpackConfig.output.publicPath,
  noInfo:true
}));
app.use(webpackHotMiddleware(complier));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(1337, () => console.log("running on localhost:1337"))
