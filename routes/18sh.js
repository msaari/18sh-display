const Conf = require("conf")
const gameFormat = require("../modules/gameFormat")
const dataFormat = require("../modules/dataFormat")
const showAll = require("../modules/showAll")

module.exports = ({ router }) => {
	router.get("/", async (ctx, next) => {
		const conf = new Conf("18sh-display")
		const allGames = conf.store
		ctx.body = showAll(allGames)
	})

	router.get("/:id", async (ctx, next) => {
		const conf = new Conf("18sh-display")
		const game = conf.get(ctx.params.id)
		if (game !== undefined) {
			ctx.body = gameFormat(ctx.params.id, game)
		} else {
			ctx.status = 404
			ctx.body = `<h1>No game found!</h1><p>Nothing found with <em>${ctx.params.id}</em>!</p>`
		}
	})

	router.get("/data/:id", async (ctx, next) => {
		const conf = new Conf("18sh-display")
		const game = conf.get(ctx.params.id)
		if (game !== undefined) {
			ctx.body = game
		} else {
			ctx.status = 404
		}
	})

	router.post("/", async (ctx, next) => {
		const body = ctx.request.body

		if (!body.name) ctx.throw(400, "Game name not specified.")

		const conf = new Conf("18sh-display")
		conf.set(body.name, body.data)

		ctx.status = 200
		ctx.body = "Ok!"
	})
}
