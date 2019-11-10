/*
 * @Author: your name
 * @Date: 2019-11-08 22:13:35
 * @LastEditTime: 2019-11-10 13:21:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webapp/webapp/config/index.js
 */
'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')
module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
      target: 'http://apidev.zys6d.cn',  // 通过本地服务器将你的请求转发到这个地址
      changeOrigin: true,  // 设置这个参数可以避免跨域
      // pathRewrite: {
      //   '/api': '/'
      // }
      cookieDomainRewrite: {
        "*": ""
      }
    },
  },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8181, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    useEslint: false,
    showEslintErrorsInOverlay: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true
  },
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
