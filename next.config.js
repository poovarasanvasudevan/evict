require('dotenv').config();

const withPlugins = require("next-compose-plugins");
const {PHASE_PRODUCTION_BUILD} = require("next-server/constants");
const css = require("@zeit/next-css");
const images = require("next-images");
const sass = require("@zeit/next-sass");
const less = require('@zeit/next-less')
const path = require('path');
const Dotenv = require('dotenv-webpack');

const webpackConfiguration = {
    distDir: "build",
    webpack: (config, options) => {
        config.plugins = config.plugins || [];

        config.plugins = [
            ...config.plugins,

            // Read the .env file
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
        ];
        return config;
    }
};
module.exports = withPlugins([css, images, sass,less], webpackConfiguration);
