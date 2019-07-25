require('dotenv').config();

const withPlugins = require("next-compose-plugins");
const {PHASE_PRODUCTION_BUILD} = require("next-server/constants");
const css = require("@zeit/next-css");
const images = require("next-images");
const sass = require("@zeit/next-sass");
const less = require('@zeit/next-less');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withTM = require('next-transpile-modules');

const webpackConfiguration = {
    distDir: "build",
    webpack: (config, options) => {

        config.node = {
            fs: 'empty'
        }

        config.plugins = config.plugins || [];

        config.plugins = [
            ...config.plugins,

            // Read the .env file
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
        ];

        const originalEntry = config.entry;
        config.entry = async () => {
            const entries = await originalEntry();
            if (entries['main.js']) {
                entries['main.js'].unshift('./lib/polyfills.js'); // <- polyfill here
            }
            return entries;
        };

        return config;
    }
};
module.exports = withPlugins([css, images, sass, less, [withTM, {
    transpileModules: ['@sindresorhus',
        'colorette',
        'graphql-hooks-memcache',
        'graphql-hooks-ssr', 'tiny-lru', 'debug', 'generic-pool'],
}]], webpackConfiguration);
