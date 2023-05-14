const webpack = require('webpack')
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');


const currentPath = path.join(__dirname, '../');

const basePath = currentPath + '.env';

const envPath = basePath + '.' + 'production';
let enviromentExist = false
if (fs.existsSync(envPath) || fs.existsSync(basePath)) {
  enviromentExist = true
}
const finalPath = fs.existsSync(envPath) ? envPath : basePath;

const fileEnv = dotenv.config({ path: finalPath }).parsed;

const envKeys = (enviromentExist === true ? (
  Object.keys(fileEnv).reduce((prev, next) => {

    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {})
) : {})


module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin(envKeys),
  ],
}