const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();



//get请求的路由
router.get('/',async(ctx)=>{
	console.log(ctx)
})

// 启动路由
app.use(router.routes())
app.use(router.allowedMethods())

//服务启动端口
app.listen(3000);