export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
	// Slate 1
	regirock: {
		inherit: true,
		otherFormes: ["Regirock-Kalos"],
		formeOrder: ["Regirock", "Regirock-Kalos"],
	},
	regirockkalos: {
		num: 377,
		name: "Regirock-Kalos",
		baseSpecies: "Regirock",
		forme: "Kalos",
		types: ["Rock", "Grass"],
		gender: "N",
		baseStats: {hp: 80, atk: 100, def: 200, spa: 50, spd: 100, spe: 50},
		abilities: {0: "Clear Body", H: "Water Absorb"},
		heightm: 1.7,
		weightkg: 230,
		color: "Brown",
		tags: ["Sub-Legendary"],
		eggGroups: ["Undiscovered"],
	},
	regice: {
		inherit: true,
		otherFormes: ["Regice-Kalos"],
		formeOrder: ["Regice", "Regice-Kalos"],
	},
	regicekalos: {
		num: 378,
		name: "Regice-Kalos",
		baseSpecies: "Regice",
		forme: "Kalos",
		types: ["Ice", "Ghost"],
		gender: "N",
		baseStats: {hp: 80, atk: 50, def: 100, spa: 100, spd: 200, spe: 50},
		abilities: {0: "Clear Body", H: "Cursed Body"},
		heightm: 1.8,
		weightkg: 175,
		color: "Blue",
		tags: ["Sub-Legendary"],
		eggGroups: ["Undiscovered"],
	},
	registeel: {
		inherit: true,
		otherFormes: ["Registeel-Kalos"],
		formeOrder: ["Registeel", "Registeel-Kalos"],
	},
	registeelkalos: {
		num: 379,
		name: "Registeel-Kalos",
		baseSpecies: "Registeel",
		forme: "Kalos",
		types: ["Steel", "Psychic"],
		gender: "N",
		baseStats: {hp: 80, atk: 75, def: 150, spa: 75, spd: 150, spe: 50},
		abilities: {0: "Clear Body", H: "Magic Bounce"},
		heightm: 1.9,
		weightkg: 205,
		color: "Gray",
		tags: ["Sub-Legendary"],
		eggGroups: ["Undiscovered"],
	},

};