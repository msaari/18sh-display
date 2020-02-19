"use strict"

module.exports = (title, data) => {
	let css = require("../css/style")()

	const round = data.round
	const currencySymbol = data.currency

	if (currencySymbol !== "$") css = css.replace(/\$/, currencySymbol)

	const cashHoldings = Object.keys(data.cash).map(key => {
		const cash = data.cash[key]
		const className = key.replace(/[^\w\d]/g, "_")
		return `<div class="item" id="${className}"><div class="name ${className}">${key}</div><div class="cash">${cash}</div></div>`
	})
	const cashHTML = cashHoldings.join("")

	const today = new Date()
	const time =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

	const topBarContent = `
	Pro tip: Zoom in in the browser until the boxes fill up screen nicely. Click an item to move it first on the list. Last refresh: <span id="time">${time}</span>
	`.trim()

	return `
		<div id="topbar">
			<h1>${title}</h1> <span class="round" id="round">${round}</span> <span>${topBarContent}</span>
		</div>
		<div id="grid">${cashHTML}</div>
	`.trim()
}
