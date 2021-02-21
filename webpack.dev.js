const path = require('path');

const tsDemoSourceFile = path.resolve('/demo/ts/Demo.ts');
const jsDemoDestFile = path.resolve('scratch/compiled/demo.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LiveReloadPlugin = require('webpack-livereload-plugin');
const {
  CheckerPlugin
} = require('awesome-typescript-loader');

module.exports = {
  options: {
    mode: 'development',
    watch: true
  },
  dev: {
    entry: tsDemoSourceFile,
    devtool: 'source-map',

    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx', '.scss', '.css']
    },

    module: {
      rules: [{
          test: /\.js$/,
          use: ['source-map-loader'],
          enforce: 'pre'
        },
        {
          test: /\.tsx?$/,
          use: [{
              loader: 'babel-loader',
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true
              }
            }
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // fallback to style-loader in development
            process.env.NODE_ENV !== "production" ?
            "style-loader" :
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.ts$/,
          use: [{
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true
            }
          }]
        }
      ]
    },

    plugins: [new LiveReloadPlugin(), new CheckerPlugin()],

    output: {
      filename: path.basename(jsDemoDestFile),
      path: path.dirname(jsDemoDestFile)
    }
  }
}