module.exports = () => {
	return `
body {
	font-family: sans-serif;
}

#main p, #main ul {
	margin-left: 2em;
	width: 50%;
	min-width: 500px;
}

#grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.item {
	margin: 20px;
	flex: 1;
	border: 1px solid #999;
}

.name {
	padding: 10px 20px;
	font-size: 80px;
	text-align: center;
}

.cash {
	padding: 20px 40px;
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

#topbar .round {
	font-size: 32px;
	margin-right: 2em;
}

.GT {
	color: black;
	background-color: orange;
}

.PRR {
	color: white;
	background-color: red;
}

.B_O {
	color: white;
	background-color: blue;
}

.ERIE {
	color: black;
	background-color: yellow;
}

.IC {
	color: white;
	background-color: darkgreen;
}

.C_O {
	color: white;
	background-color: lightblue;
}

.NYC {
	color: white;
	background-color: black;
}

	`.trim()
}
