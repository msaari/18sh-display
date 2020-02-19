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

/* 1846 (and others) */

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

/* 1825 Unit 2 */

.GNR {
	color: white;
	background-image: linear-gradient(
		0deg,
		#D09050 5%,
		#208020 5%,
		#208020 10%,
		#80B020 10%,
		#80B020 90%,
		#208020 90%,
		#208020 95%,
		#D09050 95%
	);
}

.GCR {
	color: white;
	background-image: linear-gradient(
		0deg,
		#109030 5%,
		#A04070 5%,
		#A04070 10%,
		#109030 10%,
		#109030 90%,
		#A04070 90%,
		#A04070 95%,
		#109030 95%
	);
}

.LYR {
	color: #D0D0D0;
	background-image: linear-gradient(
		0deg,
		#202010 5%,
		#C07060 5%,
		#C07060 10%,
		#202010 10%,
		#202010 90%,
		#C07060 90%,
		#C07060 95%,
		#202010 95%
	);
}

.NER {
	color: black;
	background-image: linear-gradient(
		0deg,
		#4A8050 5%,
		#FFFFFF 5%,
		#FFFFFF 10%,
		#50A050 10%,
		#50A050 90%,
		#FFFFFF 90%,
		#FFFFFF 95%,
		#4A8050 95%
	);
}

.MR {
	color: white;
	background-image: linear-gradient(
		0deg,
		#3A3A30 5%,
		#FFF050 5%,
		#FFF050 10%,
		#853555 10%,
		#853555 90%,
		#FFF050 90%,
		#FFF050 95%,
		#3A3A30 95%
	);
}

.LNWR {
	color: #A05560;
	background-image: linear-gradient(
		0deg,
		#A05560 5%,
		#F0F0F0 5%,
		#F0F0F0 10%,
		#303030 10%,
		#303030 90%,
		#F0F0F0 90%,
		#F0F0F0 95%,
		#A05560 95%
	);
}

.NSR {
	color: black;
	background-image: linear-gradient(
		0deg,
		#404030 5%,
		#F0D050 5%,
		#F0D050 10%,
		#903050 10%,
		#903050 90%,
		#F0D050 90%,
		#F0D050 95%,
		#404030 95%
	);
}

.FR {
	color: white;
	background-image: linear-gradient(
		0deg,
		#303030 5%,
		#F0F0F0 5%,
		#F0F0F0 10%,
		#854A4A 10%,
		#854A4A 90%,
		#F0F0F0 90%,
		#F0F0F0 95%,
		#303030 95%
	);
}



/* 1825 Unit 3 */

.CR {
	color: white;
	background-image: linear-gradient(
		0deg,
		#90304A 5%,
		#FFFFFF 5%,
		#FFFFFF 10%,
		#405090 10%,
		#405090 90%,
		#FFFFFF 90%,
		#FFFFFF 95%,
		#90304A 95%
	);
	background-color: #405090;
}

.NBR {
	color: black;
	background-image: linear-gradient(
		0deg,
		#000000 5%,
		#E0BA50 5%,
		#E0BA50 10%,
		#908020 10%,
		#908020 90%,
		#E0BA50 90%,
		#E0BA50 95%,
		#000000 95%,
		#000000 100%
	);
}

.GSWR {
	color: white;
	background-image: linear-gradient(
		0deg,
		#9A4055 5%,
		#E0BA50 5%,
		#E0BA50 10%,
		#8C881B 10%,
		#8C881B 90%,
		#E0BA50 90%,
		#E0BA50 95%,
		#9A4055 95%,
		#9A4055 100%
	);
}

.GNS {
	color: white;
	background-image: linear-gradient(
		0deg,
		#A5272B 5%,
		#FFC13C 5%,
		#FFC13C 10%,
		#386E23 10%,
		#386E23 90%,
		#FFC13C 90%,
		#FFC13C 95%,
		#A5272B 95%,
		#A5272B 100%
	);
}

.MC {
	color: white;
	background-image: linear-gradient(
		0deg,
		#3F3C33 5%,
		#F3CF45 5%,
		#F3CF45 10%,
		#4C8B5F 10%,
		#4C8B5F 90%,
		#F3CF45 90%,
		#F3CF45 95%,
		#3F3C33 95%,
		#3F3C33 100%
	);
}

.HR {
	color: black;
	background-image: linear-gradient(
		0deg,
		#708B54 5%,
		#272B1A 5%,
		#272B1A 10%,
		#DA910F 10%,
		#DA910F 90%,
		#272B1A 90%,
		#272B1A 95%,
		#708B54 95%,
		#708B54 100%
	);
}

/* 1862 by Piotr Starnawski */

.LH {
    color: rgb(203, 8, 78);
    background-color: rgb(169, 204, 231);
}

.NB {
    color: rgb(217, 109, 63);
    background-color: rgb(182, 175, 173);
}

.WVR {
    color: rgb(227, 154, 172);
    background-color: rgb(138, 50, 104);
}

.YN {
    color: rgb(210, 69, 77);
    background-color: rgb(9, 11, 8);
}

.LE {
    color: rgb(253, 237, 16);
    background-color: rgb(209, 6, 62);
}

.ESR {
    color: rgb(164, 195, 155);
    background-color: rgb(63, 90, 66);
}

.LD {
    color: rgb(49, 51, 118);
    background-color: rgb(221, 100, 61);
}

.ECR {
    color: rgb(144, 70, 135);
    background-color: rgb(45, 46, 120);
}

.EUR {
    color: rgb(129, 29, 95);
    background-color: rgb(216, 9, 65);
}

.ENR {
    color: rgb(4, 123, 157);
    background-color: rgb(250, 217, 111);
}

.FDR {
    color: rgb(191, 6, 61);
    background-color: rgb(230, 151, 99);
}

.NGC {
    color: rgb(47, 32, 21);
    background-color: rgb(253, 221, 107);
}

.EH {
    color: rgb(224, 112, 67);
    background-color: rgb(252, 248, 128);
}

.WSTI {
    color: rgb(246, 211, 96);
    background-color: rgb(145, 48, 108);
}

.NS {
    color: rgb(61, 39, 102);
    background-color: rgb(168, 193, 219);
}

.IB {
    color: rgb(198, 195, 189);
    background-color: rgb(8, 10, 9);
}

.NE {
    color: rgb(65, 93, 64);
    background-color: rgb(187, 181, 170);
}

.WF {
    color: rgb(202, 213, 131);
    background-color: rgb(13, 117, 66);
}

.WNR {
    color: rgb(179, 8, 53);
    background-color:rgb(170, 145, 114);
}

.SVR {
    color: rgb(73, 95, 69);
    background-color: rgb(156, 138, 115);

}

	`.trim()
}
