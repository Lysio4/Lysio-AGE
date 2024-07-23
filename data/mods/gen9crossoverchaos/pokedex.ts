export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	malenia: {
		num: 1,
		name: "Malenia",
		types: ["Grass", "Poison"],
		gender: "F",
		baseStats: {hp: 70, atk: 115, def: 71, spa: 68, spd: 94, spe: 117},
		abilities: {0: "Overgrow", H: "Regenerator"},
		weightkg: 85,
	},
	kingdedede: {
		num: 2,
		name: "King Dedede",
		types: ["Flying", "Fighting"],
    	gender: "M",
		baseStats: {hp: 150, atk: 130, def: 100, spa: 70, spd: 60, spe: 70},
		abilities: {0: "Thick Fat", H: "Gluttony"},
		weightkg: 100,
		formeOrder: ["King Dedede", "Masked Dedede"],
	},
	maskeddedede: {
		num: 2,
		name: "Masked Dedede",
    	baseSpecies: "King Dedede",
		forme: "Masked",
		types: ["Flying", "Electric"],
    	gender: "M",
		baseStats: {hp: 150, atk: 160, def: 120, spa: 90, spd: 70, spe: 90},
		abilities: {0: "Thick Fat", H: "Gluttony"},
		weightkg: 150,
    	requiredItem: "Dedede's Mask",
    	battleOnly: "King Dedede",
	},
	princesszelda: {
		num: 3,
		name: "Princess Zelda",
		types: ["Psychic"],
		gender: "F",
		baseStats: {hp: 96, atk: 71, def: 79, spa: 114, spd: 111, spe: 79},
		abilities: {0: "Magic Guard", 1: "Queenly Majesty", H: "Serene Grace"},
		weightkg: 48,
	},
	isaac: {
		num: 4,
		name: "Isaac",
		types: ["Ground"],
		gender: "M",
		baseStats: {hp: 98, atk: 120, def: 80, spa: 105, spd: 80, spe: 97},
		abilities: {0: "Long Reach", H: "Adept Prowess"},
		weightkg: 61,
	},
	dracocentauros: {
		num: 5,
		name: "Draco Centauros",
		types: ["Dragon", "Fire"],
		gender: "F",
		baseStats: {hp: 95, atk: 90, def: 113, spa: 70, spd: 92, spe: 81},
		abilities: {0: "Puyo Mastery", 1: "Competitive", H: "Prankster"},
		weightkg: 72.5,
	},
	funkykong: {
		num: 6,
		name: "Funky Kong",
		types: ["Ground", "Flying"],
		gender: "M",
		baseStats: {hp: 85, atk: 110, def: 80, spa: 70, spd: 80, spe: 100},
		abilities: {0: "Funky Mode", 1: "Unburden", H: "Swift Swim"},
		weightkg: 136.1,
	},
	balogar: {
		num: 7,
		name: "Balogar",
		types: ["Steel", "Psychic"],
		gender: "M",
		baseStats: {hp: 100, atk: 130, def: 100, spa: 86, spd: 81, spe: 73},
		abilities: {0: "Sharpness", 1: "Battle Armor", H: "Runelord"},
		weightkg: 197.8,
	},
	kingkrool: {
		num: 8,
		name: "King K Rool",
		types: ["Water", "Steel"],
		gender: "M",
		baseStats: {hp: 90, atk: 75, def: 80, spa: 115, spd: 110, spe: 60},
		abilities: {0: "Torrent", H: "Thick Fat"},
		weightkg: 680,
	},
	clownpiece: {
		num: 9,
		name: "Clownpiece",
		types: ["Ghost", "Fairy"],
		gender: "F",
		baseStats: {hp: 160, atk: 90, def: 60, spa: 100, spd: 60, spe: 60},
		abilities: {0: "Torch of Madness"},
		weightkg: 53,
	},
	olympia: {
		num: 10,
		name: "Olympia",
		types: ["Fighting", "Rock"],
		gender: "F",
		baseStats: {hp: 85, atk: 120, def: 99, spa: 55, spd: 76, spe: 65},
		abilities: {0: "Inner Focus", 1: "Guts", H: "Crystallize"},
		weightkg: 142,
	},
	gravelordlych: {
		num: 11,
		name: "Gravelord Lych",
		types: ["Ghost", "Flying"],
		gender: "N",
		baseStats: {hp: 180, atk: 60, def: 50, spa: 110, spd: 60, spe: 80},
		abilities: {0: "Spectral Leech"},
		weightkg: 200,
	},
	spamton: {
		num: 12,
		name: "Spamton",
		baseForme: "Base",
		types: ["Dark", "Poison"],
		gender: "M",
		baseStats: {hp: 70, atk: 97, def: 97, spa: 97, spd: 97, spe: 97},
		abilities: {0: "Tinted Lens", 1: "Receiver", H: "Relentless"},
		formeOrder: ["Spamton", "Spamton NEO"],
		weightkg: 97,
	},
	spamtonneo: {
		num: 12,
		name: "Spamton NEO",
		baseSpecies: "Spamton",
		forme: "NEO",
		types: ["Dark", "Poison"],
		gender: "M",
		baseStats: {hp: 107, atk: 127, def: 97, spa: 127, spd: 97, spe: 97},
		abilities: {0: "Tinted Lens", 1: "Receiver", H: "Anger Point"},
		weightkg: 199.7,
	},
	gavialinvincible: {
		num: 13,
		name: "Gavial-Invincible",
		baseSpecies: "Gavial-Invincible",
		forme: "Invincible",
		types: ["Ground", "Fighting"],
		gender: "F",
		baseStats: {hp: 108, atk: 125, def: 100, spa: 75, spd: 50, spe: 92},
		abilities: {0: "Dry Skin", H: "Medicinal Background"},
		weightkg: 135,
	},
	tropicaleon: {
		num: 14,
		name: "Tropicaleon",
		types: ["Normal"],
		baseStats: {hp: 90, atk: 67, def: 122, spa: 100, spd: 120, spe: 40},
		abilities: {0: "Color Change", H: "Chameleon"},
		weightkg: 40,
	},
	dewy: {
		num: 15,
		name: "Dewy",
		baseForme: "Base",
		types: ["Water", "Fairy"],
		gender: "M",
		baseStats: {hp: 90, atk: 93, def: 80, spa: 93, spd: 105, spe: 100},
		abilities: {0: "Water Absorb", H: "Air Lock"},
		formeOrder: ["Dewy", "Dewy-Ice", "Dewy-Mist"],
		weightkg: 5,
	},
	dewyice: {
		num: 15,
		name: "Dewy-Ice",
		baseSpecies: "Dewy",
		forme: " Ice",
		types: ["Ice", "Fairy"],
		gender: "M",
		baseStats: {hp: 90, atk: 110, def: 108, spa: 65, spd: 73, spe: 115},
		abilities: {0: "Ice Body", H: "Snow Warning"},
		weightkg: 5,
	},
	dewymist: {
		num: 15,
		name: "Dewy-Mist",
		baseSpecies: "Dewy",
		forme: "Mist",
		types: ["Electric", "Fairy"],
		gender: "M",
		baseStats: {hp: 90, atk: 88, def: 95, spa: 128, spd: 105, spe: 55},
		abilities: {0: "Cloud Nine", H: "Drought"},
		weightkg: 5,
	},
	fectoelfilis: {
		num: 16,
		name: "Fecto Elfilis",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 90, atk: 130, def: 86, spa: 142, spd: 110, spe: 122},
		abilities: {0: "Neuroforce", H: "Telepathy"},
		weightkg: 175,
	},
	susie: {
		num: 17,
		name: "Susie",
		types: ["Dark", "Dragon"],
		gender: "F",
		baseStats: {hp: 110, atk: 130, def: 85, spa: 40, spd: 85, spe: 90},
		abilities: {0: "Intimidate", H: "Mold Breaker"},
		weightkg: 128,
	},
	mora: {
		num: 18,
		name: "Mora",
		types: ["Bug", "Dark"],
		gender: "F",
		baseStats: {hp: 85, atk: 130, def: 130, spa: 65, spd: 65, spe: 75},
		abilities: {0: "Compound Eyes", H: "Call of Darkness"},
		weightkg: 41,
	},
	wrigglenightbugaltered: {
		num: 19,
		name: "Wriggle Nightbug-Altered",
		baseSpecies: "Wriggle Nightbug-Altered",
		forme: "Altered",
		types: ["Bug", "Fire"],
		gender: "F",
		baseStats: {hp: 80, atk: 115, def: 70, spa: 88, spd: 72, spe: 105},
		abilities: {0: "Color Filter", H: "Blackout Curtain"},
		weightkg: 60,
	},
	maskedman: {
		num: 20,
		name: "Masked Man",
		types: ["Electric", "Psychic"],
		gender: "M",
		baseStats: {hp: 70, atk: 110, def: 105, spa: 110, spd: 90, spe: 80},
		abilities: {0: "Sharpness", 1: "Screen Cleaner", H: "Lightning Rod"},
		weightkg: 115,
	},
	jackfrost: {
		num: 21,
		name: "Jack Frost",
		types: ["Ice", "Ghost"],
		gender: "M",
		baseStats: {hp: 70, atk: 88, def: 54, spa: 112, spd: 75, spe: 105},
		abilities: {0: "Prankster", H: "Frigid Bloodline"},
		weightkg: 76,
	},
	ishtar: {
		num: 22,
		name: "Ishtar",
		types: ["Rock", "Electric"],
		gender: "F",
		baseStats: {hp: 75, atk: 65, def: 75, spa: 135, spd: 95, spe: 105},
		abilities: {0: "Levitate", 1: "Dazzling", H: "Long Reach"},
		weightkg: 102,
	},
	matka: {
		num: 23,
		name: "Matka",
		types: ["Poison", "Fairy"],
		gender: "F",
		baseStats: {hp: 97, atk: 79, def: 81, spa: 133, spd: 119, spe: 41},
		abilities: {0: "Curse Weaver"},
		weightkg: 144,
	},
	hecatiatropical: {
		num: 24,
		name: "Hecatia-Tropical",
		baseSpecies: "Hecatia-Tropical",
		forme: "Tropical",
		types: ["Water", "Ground"],
		gender: "F",
		baseStats: {hp: 100, atk: 129, def: 92, spa: 112, spd: 80, spe: 82},
		abilities: {0: "Jelly Dessert Queen"},
		weightkg: 89,
	},
	hestu: {
		num: 25,
		name: "Hestu",
		types: ["Grass"],
		gender: "M",
		baseStats: {hp: 78, atk: 112, def: 154, spa: 65, spd: 75, spe: 68},
		abilities: {0: "Unaware", 1: "Harvest", H: "Prankster"},
		weightkg: 288,
	},
	twinrova: {
		num: 26,
		name: "Twinrova",
		baseForme: "Ice",
		types: ["Ice", "Psychic"],
		gender: "F",
		baseStats: {hp: 90, atk: 100, def: 74, spa: 113, spd: 92, spe: 111},
		abilities: {0: "Binary Soul"},
		weightkg: 65.1,
	},
	twinrovafire: {
		num: 26,
		name: "Twinrova-Fire",
		baseSpecies: "Twinrova",
		forme: "Fire",
		types: ["Fire", "Psychic"],
		gender: "F",
		baseStats: {hp: 90, atk: 100, def: 74, spa: 113, spd: 92, spe: 111},
		abilities: {0: "Binary Soul"},
		weightkg: 65.1,
	},
	snecko: {
		num: 27,
		name: "Snecko",
		types: ["Dragon", "Poison"],
		baseStats: {hp: 80, atk: 120, def: 70, spa: 85, spd: 90, spe: 90},
		abilities: {0: "Contrary", 1: "Intimidate", H: "Perplexing Gaze"},
		weightkg: 90, 
	},
	kaguyahouraisan: {
		num: 28,
		name: "Kaguya Houraisan",
		types: ["Grass", "Fairy"],
		gender: "F",
		baseStats: {hp: 115, atk: 65, def: 80, spa: 145, spd: 80, spe: 45},
		abilities: {0: "Clear Body", H: "Regenerator"},
		weightkg: 60.2,
	},
	luigi: {
		num: 29,
		name: "Luigi",
		types: ["Normal", "Flying"],
		gender: "M",
		baseStats: {hp: 87, atk: 99, def: 78, spa: 109, spd: 93, spe: 94},
		abilities: {0: "Rattled", 1: "Limber", H: "Wimp Out"},
		heightm: 1.7,
		weightkg: 62,
	},
	goldenfreddy: {
		num: 30,
		name: "Golden Freddy",
		types: ["Ghost"],
		baseStats: {hp: 183, atk: 130, def: 40, spa: 100, spd: 40, spe: 90},
		abilities: {0: "Strong Jaw", 1: "Cursed Body", H: "Supreme Overlord"},
		weightkg: 0.1,
	},
	queendr: {
		num: 31,
		name: "Queendr",
		types: ["Steel", "Electric"],
		gender: "F",
		baseStats: {hp: 96, atk: 92, def: 78, spa: 112, spd: 132, spe: 60},
		abilities: {0: "Queenly Majesty", 1: "Tangled Feet", H: "Download"},
		weightkg: 129,
	},
	alicemartagoid: {
		num: 32,
		name: "Alice Martagoid",
		types: ["Normal"],
		gender: "F",
		baseStats: {hp: 100, atk: 60, def: 100, spa: 120, spd: 100, spe: 70},
		abilities: {0: "Rainbow Puppeteer"},
		weightkg: 62,
	},
	reva: {
		num: 33,
		name: "Reva",
		types: ["Steel", "Fighting"],
		gender: "F",
		baseStats: {hp: 67, atk: 82, def: 115, spa: 82, spd: 115, spe: 95},
		abilities: {0: "Battle Armor", 1: "Friend Guard", H: "Magic Bounce"},
		weightkg: 115,
	},
	marle: {
		num: 34,
		name: "Marle",
		baseForme: "Will",
		types: ["Water", "Flying"],
		gender: "F",
		baseStats: {hp: 92, atk: 93, def: 96, spa: 92, spd: 95, spe: 114},
		abilities: {0: "Cloud Nine", 1: "Pastel Veil", H: "Queenly Majesty"},
		weightkg: 40,
	},
	marleparasite: {
		num: 34,
		name: "Marle-Parasite",
		baseSpecies: "Marle",
		forme: "Parasite",
		types: ["Water", "Electric"],
		gender: "F",	
		baseStats: {hp: 92, atk: 93, def: 96, spa: 92, spd: 95, spe: 114},
		abilities: {0: "Prankster", 1: "Pastel Veil", H: "Levitate"},
		weightkg: 40,
	},
	yuumatoutetsu: {
		num: 35,
		name: "Yuuma Toutetsu",
		types: ["Dark", "Poison"],
		gender: "F",
		baseStats: {hp: 60, atk: 120, def: 108, spa: 60, spd: 126, spe: 66},
		abilities: {0: "Gluttony", H: "Devouring Jaw"},
		weightkg: 50,
	},
	inaros: {
		num: 36,
		name: "Inaros",
		types: ["Rock", "Ground"],
		gender: "M",
		baseStats: {hp: 150, atk: 100, def: 90, spa: 90, spd: 50, spe: 60},
		abilities: {0: "Sand Stream", 1: "Sand Force", H: "Rocky Payload"},
		weightkg: 100,
	},
	divearmorx: {
		num: 37,
		name: "DiVE Armor X",
		types: ["Steel", "Electric"],
		gender: "M",
		baseStats: {hp: 100, atk: 90, def: 130, spa: 120, spd: 130, spe: 110},
		abilities: {0: "DiVE Armor"},
		weightkg: 125,
	},
	irene: {
		num: 38,
		name: "Irene",
		types: ["Flying", "Steel"],
		gender: "F",
		baseStats: {hp: 108, atk: 112, def: 98, spa: 67, spd: 70, spe: 85},
		abilities: {0: "Illuminate", 1: "Justified", H: "Sword of Ruin"},
		weightkg: 60,
	},
	beatrice: {
		num: 39,
		name: "Beatrice",
		types: ["Bug", "Ghost"],
		gender: "F",
		baseStats: {hp: 120, atk: 90, def: 60, spa: 135, spd: 95, spe: 100},
		abilities: {0: "Magic Guard", 1: "Magician", H: "Moody"},
		weightkg: 60,
	},
	azhdaha: {
		num: 40,
		name: "Azhdaha",
		types: ["Rock", "Dragon"],
		gender: "M",
		baseStats: {hp: 140, atk: 130, def: 80, spa: 110, spd: 100, spe: 40},
		abilities: {0: "Protean", H: "Solid Rock"},
		weightkg: 999.9,
	},
	sisyphusprime: {
		num: 41,
		name: "Sisyphus Prime",
		types: ["Fighting", "Fire"],
		gender: "M",
		baseStats: {hp: 102, atk: 120, def: 89, spa: 99, spd: 71, spe: 99},
		abilities: {0: "Mold Breaker", 1: "Moxie", H: "Solar Power"},
		weightkg: 136,
	},
	madwheel: {
		num: 42,
		name: "Mad Wheel",
		types: ["Steel", "Dark"],
		gender: "N",
		baseStats: {hp: 80, atk: 115, def: 65, spa: 109, spd: 75, spe: 116},
		abilities: {0: "Sharpness", H: "Motor Drive"},
		weightkg: 437,
	},
	aversa: {
		num: 43,
		name: "Aversa",
		types: ["Dark", "Flying"],
		gender: "F",
		baseStats: {hp: 85, atk: 70, def: 70, spa: 120, spd: 80, spe: 120},
		abilities: {0: "Shadowgift", H: "Galeforce"},
		weightkg: 40.8,
	},
	bagpipe: {
		num: 44,
		name: "Bagpipe",
		types: ["Dragon", "Fighting"],
		gender: "F",
		baseStats: {hp: 100, atk: 115, def: 88, spa: 77, spd: 50, spe: 110},
		abilities: {0: "Super Luck", H: "Stalwart"},
		weightkg: 54.4,
	},
	flynn: {
		num: 45,
		name: "Flynn",
		types: ["Normal", "Fighting"],
		gender: "M",
		baseStats: {hp: 90, atk: 95, def: 95, spa: 95, spd: 95, spe: 110},
		abilities: {0: "Smirk", H: "Adaptability"},
		weightkg: 68,
	},

};
