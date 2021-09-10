totalMotivation = 0;
funds = 0;
function motivate(motivation) {
	totalMotivation += motivation;
	funds += motivation;
	updateCounters();
	checkForUpgrades();
}
function updateCounters(){
	document.getElementById("motivationCounter").innerHTML = "MOTIVATION: " + totalMotivation;
	document.getElementById("fundsCounter").innerHTML = "DOGECOIN: " + funds;
}

upgrades = [//name, shown, cost, motivation, description
	["coffee", false, 10, 3, "Give rkn a coffee to keep him awake."],
	["adderall", false, 100, 10, "Give rkn adderall so, i dunno, he can be more like Elon Musk I guess."],
	["tacoShack", false, 1000, 2, "Have rkn play tacoshack. He then becomes addicted though, so it's not very effective."],
	["pupper", false, 1500, 25, "Let rkn pet Vincent. It's very effective."],

	["mystery", false, (Math.round(Math.random() * 60000) + 2000), (Math.round(Math.random() * 35) + 15), "Provide rkn with a mystery substance. It probably does something special."]
];
function checkForUpgrades() {
	for (i = 0; i < upgrades.length; i++) {
		if (funds >= upgrades[i][2] && upgrades[i][1] == false) {
			document.body.innerHTML += "<div id = " + upgrades[i][0] + "><button id = 'upgradeBuy" + i + "' onclick = 'buy(" + i + ")'>Buy the ability to " + upgrades[i][4] + " (Cost: " + upgrades[i][2] + ", Motivation: " + upgrades[i][3] + ")</button></div>";
			upgrades[i][1] = true;
		}
	}
}

function buy(id) {
	if (funds >= upgrades[id][2]) {//checks to see if it's affordable. If so, the purchase is made.
		funds -= upgrades[id][2]
		document.getElementById(upgrades[id][0]).innerHTML = "<button id = '" + upgrades[id][0] + "Button' onclick = 'motivate(" + upgrades[id][3] + ")'>" + upgrades[id][4] + " (" + upgrades[id][3] + ")</button>"
		updateCounters();
	}
}
