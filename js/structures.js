
rockers_structure = {
			  "flute4": {
			    "4": {
			      "node": {},
			      "waveform": "sawtooth",
			      "filter" : {
			      	"type":"lowpass",
			      	"frequency": 1000,
			      	"Q": 1
			      	},
			      "gain" : 1.0
			    }
			  },
			  "string": {
			    "4": {
			      "node": {},
			      "waveform": "sawtooth",
			      "filter" : {
			      	"type":"lowpass",
			      	"frequency": 10000,
			      	"Q": 1
			      	},
			      "gain" : 1.0
			    },
			    "8": {
			      "node": {},
			      "waveform": "sawtooth",
			      "filter" : {
			      	"type":"lowpass",
			      	"frequency": 10000,
			      	"Q": 1
			      	},
			      "gain" : 1
			    }
			  },
			  "trumpet": {
			    "4": {
			      "node": {},
			      "waveform": "sawtooth",
			      "filter" : {
			      	"type":"lowpass",
			      	"frequency": 5000,
			      	"Q": 1
			      	},
			      "gain" : 0.5
			    },
			    "8": {
			      "node": {},
			      "waveform": "sawtooth",
			      "filter" : {
			      	"type":"lowpass",
			      	"frequency": 1000,
			      	"Q": 1
			      	},
			      "gain" : 1
			    }
			  },
			  "oboe": {
			    "4": {
			      "node": {},
			      "waveform": "sawtooth",
			      "filter" : {
			      	"type":"lowpass",
			      	"frequency": 1000,
			      	"Q": 1
			      	},
			      "gain" : 1
			    },
			    "8": {
			      "node": {},
			      "waveform": "sawtooth",
			      "filter" : {
			      	"type":"lowpass",
			      	"frequency": 6000,
			      	"Q": 1
			      	},
			      "gain" : 1
			    }
			  },
			  "flute8": {
			    "8": {
			      "node": {},
			      "waveform": "sawtooth",
			      "filter" : {
			      	"type":"lowpass",
			      	"frequency": 600,
			      	"Q": 1
			      	},
			      "gain" : 1
			    }
			  },
			  "clarinet": {
			    "16": {
			      "node": {},
			      "waveform": "sawtooth",
			      "filter" : {
			      	"type":"lowpass",
			      	"frequency": 1000,
			      	"Q": 1
			      	},
			      "gain" : 1
			    }
			  },
			  "bass": {
			    "16": {
			      "node": {},
			      "waveform": "sawtooth",
			      "filter" : {
			      	"type":"lowpass",
			      	"frequency": 400,
			      	"Q": 1
			      	},
			      "gain" : 1
			    }
			  }
			};

note_maps = { 
				4   : {	"C1" : "C2",
						"C#1": "C#2",
						"D1" : "D2",
						"D#1": "D#2",
						"E1" : "E2",
						"F1" : "F2",
						"F#1": "F#2",
						"G1" : "G2",
						"G#1": "G#2",
						"A1" : "A2",
						"A#1": "A#2",
						"B1" : "B2",

						"C2" : "C3",
						"C#2": "C#3",
						"D2" : "D3",
						"D#2": "D#3",
						"E2" : "E3",
						"F2" : "F3",
						"F#2": "F#3",
						"G2" : "G3",
						"G#2": "G#3",
						"A2" : "A3",
						"A#2": "A#3",
						"B2" : "B3",

						"C3" : "C4",
						"C#3": "C#4",
						"D3" : "D4",
						"D#3": "D#4",
						"E3" : "E4",
						"F3" : "F4",
						"F#3": "F#4",
						"G3" : "G4",
						"G#3": "G#4",
						"A3" : "A4",
						"A#3": "A#4",
						"B3" : "B4",

						"C4" : "C5",
						"C#4": "C#5",
						"D4" : "D5",
						"D#4": "D#5",
						"E4" : "E5",
						"F4" : "F5",
						"F#4": "F#5",
						"G4" : "G5",
						"G#4": "G#5",
						"A4" : "A5",
						"A#4": "A#5",
						"B4" : "B5",

						"C5" : "C5",
						"C#5": "C#5",
						"D5" : "D5",
						"D#5": "D#5",
						"E5" : "E5",
						"F5" : "F5",
						"F#5": "F#5",
						"G5" : "G5",
						"G#5": "G#5",
						"A5" : "A5",
						"A#5": "A#5",
						"B5" : "B5",

						"C6" : "C5"},

				8	: { "C1" : "C1",
						"C#1": "C#1",
						"D1" : "D1",
						"D#1": "D#1",
						"E1" : "E1",
						"F1" : "F1",
						"F#1": "F#1",
						"G1" : "G1",
						"G#1": "G#1",
						"A1" : "A1",
						"A#1": "A#1",
						"B1" : "B1",

						"C2" : "C2",
						"C#2": "C#2",
						"D2" : "D2",
						"D#2": "D#2",
						"E2" : "E2",
						"F2" : "F2",
						"F#2": "F#2",
						"G2" : "G2",
						"G#2": "G#2",
						"A2" : "A2",
						"A#2": "A#2",
						"B2" : "B2",

						"C3" : "C3",
						"C#3": "C#3",
						"D3" : "D3",
						"D#3": "D#3",
						"E3" : "E3",
						"F3" : "F3",
						"F#3": "F#3",
						"G3" : "G3",
						"G#3": "G#3",
						"A3" : "A3",
						"A#3": "A#3",
						"B3" : "B3",

						"C4" : "C4",
						"C#4": "C#4",
						"D4" : "D4",
						"D#4": "D#4",
						"E4" : "E4",
						"F4" : "F4",
						"F#4": "F#4",
						"G4" : "G4",
						"G#4": "G#4",
						"A4" : "A4",
						"A#4": "A#4",
						"B4" : "B4",

						"C5" : "C5",
						"C#5": "C#5",
						"D5" : "D5",
						"D#5": "D#5",
						"E5" : "E5",
						"F5" : "F5",
						"F#5": "F#5",
						"G5" : "G5",
						"G#5": "G#5",
						"A5" : "A5",
						"A#5": "A#5",
						"B5" : "B5",

						"C6" : "C5"},

				16	: {	"C1" : "C0",
						"C#1": "C#0",
						"D1" : "D0",
						"D#1": "D#0",
						"E1" : "E0",
						"F1" : "F0",
						"F#1": "F#0",
						"G1" : "G0",
						"G#1": "G#0",
						"A1" : "A0",
						"A#1": "A#0",
						"B1" : "B0",

						"C2" : "C1",
						"C#2": "C#1",
						"D2" : "D1",
						"D#2": "D#1",
						"E2" : "E1",
						"F2" : "F1",
						"F#2": "F#1",
						"G2" : "G1",
						"G#2": "G#1",
						"A2" : "A1",
						"A#2": "A#1",
						"B2" : "B1",

						"C3" : "C2",
						"C#3": "C#2",
						"D3" : "D2",
						"D#3": "D#2",
						"E3" : "E2",
						"F3" : "F2",
						"F#3": "F#2",
						"G3" : "G2",
						"G#3": "G#2",
						"A3" : "A2",
						"A#3": "A#2",
						"B3" : "B2",

						"C4" : "C3",
						"C#4": "C#3",
						"D4" : "D3",
						"D#4": "D#3",
						"E4" : "E3",
						"F4" : "F3",
						"F#4": "F#3",
						"G4" : "G3",
						"G#4": "G#3",
						"A4" : "A3",
						"A#4": "A#3",
						"B4" : "B3",

						"C5" : "C4",
						"C#5": "C#4",
						"D5" : "D4",
						"D#5": "D#4",
						"E5" : "E4",
						"F5" : "F4",
						"F#5": "F#4",
						"G5" : "G4",
						"G#5": "G#4",
						"A5" : "A4",
						"A#5": "A#4",
						"B5" : "B4",

						"C6" : "C5"},
				};

midiNumber = {107:'B7',106:'A#7',105:'A7',104:'G#7',103:'G7',102:'F#7',101:'F7',100:'E7',99:'D#7',98:'D7',97:'C#7',96:'C7',95:'B6',94:'A#6',93:'A6',92:'G#6',91:'G6',90:'F#6',89:'F6',88:'E6',87:'D#6',86:'D6',85:'C#6',84:'C6',83:'B5',82:'A#5',81:'A5',80:'G#5',79:'G5',78:'F#5',77:'F5',76:'E5',75:'D#5',74:'D5',73:'C#5',72:'C5',71:'B4',70:'A#4',69:'A4',68:'G#4',67:'G4',66:'F#4',65:'F4',64:'E4',63:'D#4',62:'D4',61:'C#4',60:'C4',59:'B3',58:'A#3',57:'A3',56:'G#3',55:'G3',54:'F#3',53:'F3',52:'E3',51:'D#3',50:'D3',49:'C#3',48:'C3',47:'B2',46:'A#2',45:'A2',44:'G#2',43:'G2',42:'F#2',41:'F2',40:'E2',39:'D#2',38:'D2',37:'C#2',36:'C2',35:'B1',34:'A#1',33:'A1',32:'G#1',31:'G1',30:'F#1',29:'F1',28:'E1',27:'D#1',26:'D1',25:'C#1',24:'C1',23:'B0',22:'A#0',21:'A0'};