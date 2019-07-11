"use strict"

module.exports = (title, data) => {
	const css = require("../css/style")

	const round = data.round

	const cashHoldings = Object.keys(data.cash).map(key => {
		const cash = data.cash[key]
		const className = key.replace(/[^\w\d]/, "_")
		return `<div class="item"><div class="name ${className}">${key}</div><div class="cash">${cash}</div></div>`
	})
	const cashHTML = cashHoldings.join("")

	const today = new Date()
	const time =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

	const topBarContent = `
	Pro tip: Zoom in in the browser until the boxes fill up screen nicely. Last refresh: ${time}
	`.trim()

	return `
	<html>
		<head>
			<title>18SH: ${title}</title>
			<style type="text/css">${css()}</style>
			<meta http-equiv="refresh" content="5" />
		</head>
		<body>
			<div id="topbar">
				<h1>${title}</h1> <span class="round">${round}</span> <span>${topBarContent}</span>
			</div>
			<div id="grid">${cashHTML}</div>
		</body>
	</html>
	`.trim()
}