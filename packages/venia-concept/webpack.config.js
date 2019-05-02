const Buildpack = require('@magento/pwa-buildpack');

module.exports = async function setupBuildpackBuild(webpackCliEnv) {
    const config = await Buildpack.configureWebpack({
        context: __dirname,
        rootComponentPaths: ['./src/RootComponents'],
        webpackCliEnv
    });
    return config;
};
