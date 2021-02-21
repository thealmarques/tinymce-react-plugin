const path = require('path');

const tsSourceFile = path.resolve('src/Main.ts');
const jsDestFile = path.resolve('dist/plugin.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
  options: {
    mode: 'production',
  },
  prod: {
    entry: tsSourceFile,
    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx', '.scss', '.css']
    },
    optimization: {
      minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new TSLintPlugin({
        files: ['./src/**/*.ts', './src/**/*.tsx']
      })
    ],

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

    output: {
      filename: path.basename(jsDestFile),
      path: path.dirname(jsDestFile)
    }
  }
}