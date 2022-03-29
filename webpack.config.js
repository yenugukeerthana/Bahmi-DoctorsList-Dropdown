// const {resolve, path} = require('path')

// const {merge} = require('webpack-merge')
// const omrsDefaultWebpack = require('openmrs/default-webpack-config')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

// module.exports = (env, argv = {}) => {
//   let omrsDefaultConfig = omrsDefaultWebpack(env, argv)
//   return merge(omrsDefaultConfig, {
//     plugins: [
//       new CopyWebpackPlugin({
//         patterns: [{from: 'omrs-app-shell'}],
//       }),
//     ],
//   })
// }

module.exports = require('openmrs/default-webpack-config')
