const koa = require('koa')
const serve = require('koa-static')
const { historyApiFallback }  = require('koa2-connect-history-api-fallback')
const proxy = require('koa2-proxy-middleware')
const app = new koa() // 实例化一个web服务
// 注册跨域代理
app.use(proxy({
    targets: {
        '/prod-api/(.*)': {
            target: 'http://ihrm-java.itheima.net/api', // 代理后端服务器
            changeOrigin: true,
            pathRewrite: {
                '/prod-api': ''
            }
        }
    }
}))
app.use(historyApiFallback({
    whiteList: ['/prod-api'] // 意思是不处理这个地址
})) // 使用history 中间件
app.use(serve(__dirname + "/public")) // 静态服务
app.listen(3333, function() {
    console.log('人力资源项目启动。。。。http://localhost:3333')
})