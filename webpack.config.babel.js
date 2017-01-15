import { resolve } from 'path'

const makeRule = (ext, loader, enforce, exclude, include) => ({
  test: typeof ext === 'string'
    ? RegExp(`/.${ext}$/`)
    : ext,
  use: typeof loader === 'string'
    ? loader
    : loader || `${ext}-loader`,
  enforce:
    enforce || undefined,
  exclude:
    exclude || /node_modules/,
  include:
    include || undefined
})

export default {
  entry: resolve(__dirname, './src/index.js'),
  output: {
    path: resolve(__dirname, './lib'),
    filename: 'index.js'
  },
  module: {
    rules: [
      makeRule(/\.jsx?$/, 'standard-loader', 'pre'),
      makeRule(/\.jsx?$/, 'babel-loader')
    ]
  },
  externals: {
    'react': 'React',
    'redux': 'Redux'
  },
  stats: {
    chunks: true,
    colors: true,
    hash: true,
    version: false,
    timings: true
  }
}
