"use strict"

const dataFormat = require("./dataFormat")

module.exports = (title, data) => {
	let css = require("../css/style")()

	const content = dataFormat(title, data)

	return `
	<html>
		<head>
			<title>18SH: ${title}</title>
			<style type="text/css">${css}</style>
		</head>
		<body>
			<div id="content">
				${content}
			</div>
			<script type="text/javascript">
				let orderCounter = -1

				function setOrder(target) {
					target.path[1].style.order = orderCounter
					console.log(orderCounter)
					orderCounter--
				}

				function createItem(key) {
					let item = document.createElement('div')
					let name = item.appendChild(document.createElement('div'))
					let cash = item.appendChild(document.createElement('div'))
					const className = key.replace(/[^\\w\\d]/g, "_")
					item.id = className
					name.className = 'name ' + className
					name.innerHTML = key
					cash.className = 'cash'
					return item
				}

				const items = document.getElementsByClassName("item")
				for (let item of items) {
					item.addEventListener("click", setOrder)
				}

				function fetchData() {
					const request = new XMLHttpRequest()

					request.addEventListener('load', function () {
						if (this.readyState === 4 && this.status === 200) {
							const jsonData = JSON.parse(this.responseText)
							document.getElementById("round").innerHTML = jsonData.round
							for (let item of Object.keys(jsonData.cash)) {
								const element = document.getElementById(item)
								if ( element != null ) {
									element.childNodes[1].innerHTML = jsonData.cash[item]
								} else {
									const newElement = createItem(item)
									const parent = document.getElementById("grid")
									parent.appendChild(newElement)
								}

							}
							const today = new Date()
							const time =
								today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
							document.getElementById("time").innerHTML = time
						}
					});

					request.open('GET', '/18sh/data/${title}', true)
					request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
					request.send()
				}

				window.setInterval( fetchData, 2000 )

			</script>
		</body>
	</html>
	`.trim()
}
