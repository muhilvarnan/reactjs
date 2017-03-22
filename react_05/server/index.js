import express from "express";
import path from "path";
import bodyParser from "body-parser";

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from "../webpack.config.dev";
import webpackHotMiddleware from 'webpack-hot-middleware';
import users from "./routes/users";
import auth from "./routes/auth";

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/auth', auth);
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

app.listen(8000, () => console.log("running on localhost:8000"))
