function ninjaConstructor(name, cohort) {
	this.name = name;
	this.cohort = cohort;
	this.belt = "yellow";
	this.levelUp = function() {
		if (this.belt === "yellow") {
			this.belt = "red";
		} else if (this.belt === "red") {
			this.belt = "black";
		} else {
			console.log(this.name + " is already a master.")
		}
	}
}