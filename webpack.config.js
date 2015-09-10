/**
 * Created by abjia on 15-9-8.
 * webpack 配置文件
 */

var path = require('path');
var webpack = require('webpack');


var appRoot = path.join(__dirname, 'app');
var nodeRoot = path.join(__dirname, 'node_modules');


var  PATH_CONS = {
    BIZ : "./src/js/"
}


//公共模块提取插件
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");


module.exports = {

    //页面入口文件
    //根据filename的[name]值 会打包多个文件
    entry: {

        t1 : PATH_CONS.BIZ+"test.js",
        //类库
        vendor: [
            "./lib/jquery/dist/jquery.min.js"
        ]
    },
    //开发模式
    devtool: 'source-map',
    debug: true,

    //插件项
    plugins: [

        //提取公共模块到common.js
        new CommonsChunkPlugin('vendor', "common.js"),

        //这个可以使jquery变成全局变量，妮不用在自己文件require('jquery')了
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
    ],
    //输出文件配置
    output: {
        //打包文件存放的绝对路径
        path: __dirname + '/dist/',
        //网站运行时的访问路径
        publicPath: "/src/",
        //打包后的文件名
        filename: '[name].biz.js'
    },

    module : {

        //加载器配置
        loaders : [
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader'},

            //.js 文件使用 jsx-loader 来编译处理
            //{ test: /\.js$/, loader: 'jsx-loader?harmony' },

            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}

        ]
    },

    resolve: {

        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias : {

        }
    }
};