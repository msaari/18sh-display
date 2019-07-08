const Configstore = require("configstore")
const gameFormat = require("../modules/gameFormat")

module.exports = ({ router }) => {
	router.get("/:id", async (ctx, next) => {
		const conf = new Configstore(ctx.params.id)
		const game = conf.get("data")
		if (game !== undefined) {
			ctx.body = gameFormat(ctx.params.id, game)
		} else {
			ctx.status = 404
			ctx.body = `<h1>No game found!</h1><p>Nothing found with <em>${
				ctx.params.id
			}</em>!</p>`
		}
	})

	router.post("/", async (ctx, next) => {
		const body = ctx.request.body

		if (!body.name) ctx.throw(400, "Game name not specified.")

		const conf = new Configstore(body.name)
		conf.set("data", body.data)

		ctx.status = 201
		ctx.body = "Ok!"
	})
}
