"use strict"

module.exports = data => {
	let css = require("../css/style")()

	const gamesHtml = Object.keys(data).map(game => {
		return `<li><a href="/18sh/${game}">${game}</a></li>`
	})

	return `
	<html>
		<head>
			<title>18SH</title>
			<style type="text/css">${css}</style>
			<meta http-equiv="refresh" content="30" />
		</head>
		<body id="main">
			<div id="topbar">
				<h1>18SH</h1>
			</div>
			<h2>All games currently available on this server:</h2>
			<ul>${gamesHtml}</ul>
			<p>If a game you expect to find is missing, it should appear here once
			you do an action in 18SH. If it still doesn't appear, check that the
			DISPLAY18SH environmental variable is correctly set on the system
			running 18SH.</p>

			<p>The server automatically clears the game history every now and then
			and at least once a day.</p>

			<p>For further information, see the <a
			href="https://github.com/msaari/18sh-display">18SH Cash Display GitHub page</a>.</p>
		</body>
	</html>
	`.trim()
}
