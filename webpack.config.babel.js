import { resolve } from 'path'
import { optimize } from 'webpack'
import makeRule from 'webpack-make-rule'

export default {
  entry: resolve(__dirname, './src/index.js'),
  output: {
    path: resolve(__dirname, './lib/'),
    filename: 'index.js',
    library: 'ReactReduxConnectHelpers',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      makeRule(/\.jsx?$/, 'standard-loader', 'pre'),
      makeRule(/\.jsx?$/, 'babel-loader')
    ]
  },
  externals: {
    'redux': {
      commonjs: 'redux',
      commonjs2: 'redux',
      amd: 'redux',
      root: 'Redux'
    },
    'react-redux': {
      commonjs: 'react-redux',
      commonjs2: 'react-redux',
      amd: 'react-redux',
      root: 'ReactRedux'
    }
  },
  plugins: [
    new optimize.UglifyJsPlugin({
      comments: false
    })
  ],
  stats: {
    chunks: true,
    colors: true,
    hash: true,
    version: false,
    timings: true
  }
}
