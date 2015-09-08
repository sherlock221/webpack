/**
 * Created by abjia on 15-9-8.
 * webpack 配置文件
 */

var webpack = require('webpack');


//公共模块提取插件
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");


module.exports = {

    //页面入口文件
    //根据filename的[name]值 会打包多个文件
    entry:{
        t2 : "./assets/js/other.js",
        t1 : "./assets/js/test.js"
    },

    //插件项
    plugins : [
        //提取公共模块到common.js
        new CommonsChunkPlugin("common.js")
    ],
    //输出文件配置
    output: {
        //打包文件存放的绝对路径
        path: __dirname + '/assets/',
        //网站运行时的访问路径
        publicPath: "/assets/",
        //打包后的文件名
        filename: '[name].entry.js'
    },

    /**
     * 定义了解析模块路径时的配置，常用的就是extensions，
     * 可以用来指定模块的后缀，这样在引入模块时就不需要写后缀了，会自动补全
     */
    resolve:{
    }
};