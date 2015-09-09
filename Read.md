###webpack的几大优势

1. 我们不需要在去 外层做一个封装函数define,

define(['a','b'], function(a,b){})

2. 不需要去配置别名alias

只需要 var a = require('a');




### shimming

在 AMD/CMD 中，我们需要对不符合规范的模块（比如一些直接返回全局变量的插件）进行 shim 处理，这时候我们需要使用 exports-loader 来帮忙：



### webpack 执行

webpack --config XXX.js   //使用另一份配置文件（比如webpack.config2.js）来打包

$ webpack --watch   //监听变动并自动打包

$ webpack -p    //压缩混淆脚本，这个非常非常重要！

$ webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里了