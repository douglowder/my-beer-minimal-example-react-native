/* eslint-disable */

const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('txt');
defaultConfig.resolver.sourceExts.push('cjs');
defaultConfig.resolver.sourceExts.push('txt');
module.exports = defaultConfig;
