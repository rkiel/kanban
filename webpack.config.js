const Helper = require('webpack-config-helper');

function buildConfig(config) {
  config.entry('bundle', './src/index.jsx').entryAndCommonsChunk('vendor').addRuleForBabel().addHtmlWebpackPlugin().echo();
}

module.exports = Helper.use(buildConfig);
