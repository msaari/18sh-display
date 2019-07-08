"use strict"

module.exports = (title, data) => {
	const css = `
<style type="text/css">
#grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.item {
	padding: 40px;
	flex: 1;
}

.name {
	font-size: 80px;
	text-align: center;
}

.cash {
	font-size: 100px;
	text-align: center;
}

.cash::before {
	content: "$";
}

#topbar {
	background-color: rgb(30, 62, 46);
	color: #fff;
	padding: 10px 20px;
}

#topbar h1 {
	display: inline;
	margin-right: 2em;
}
</style>
	`.trim()

	const cashHoldings = Object.keys(data).map(key => {
		const cash = data[key]
		return `<div class="item"><div class="name">${key}</div><div class="cash">${cash}</div></div>`
	})
	const cashHTML = cashHoldings.join("")

	const topBarContent = `
	Pro tip: Zoom in in the browser until the boxes fill up screen nicely.
	`.trim()

	return `<html><head><title>18SH: ${title}</title>${css}</head><body><div id="topbar"><h1>${title}</h1> <span>${topBarContent}</span></div><div id="grid">${cashHTML}</div></body></html>`
}
