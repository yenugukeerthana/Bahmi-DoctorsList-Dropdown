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

const config = (module.exports = require('openmrs/default-webpack-config'))
config.scriptRuleConfig.exclude = /(node_modules[^\/@openmrs\/esm\-patient\-common\-lib])/
module.exports = config
