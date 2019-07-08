const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const Router = require("koa-router")

const app = new Koa()
app.use(bodyParser())

app.use(async (ctx, next) => {
	try {
		await next()
	} catch (err) {
		ctx.status = err.status || 500
		ctx.body = err.message
		ctx.app.emit("error", err, ctx)
	}
})

app.on("error", (err, ctx) => {
	if (err.name === "CastError") {
		ctx.status = 400
	} else {
		console.error(err)
	}
})

const router = new Router({
	prefix: "/18sh"
})

require("./routes/18sh")({ router })

app.use(router.routes())
app.use(router.allowedMethods())

if (!module.parent) app.listen(3018)

module.exports = app
