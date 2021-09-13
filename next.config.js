const withImages = require("next-images")

module.exports = withImages()

module.exports = {
  webpack: (config, options) => {
    config.experiments = {
      topLevelAwait: true,
    }
    return config
  },
}
