/*
  Setlist data.

  Add songs to SONGS in the order you want them to appear in the setlist.
  Add an entry to FLOWS only when the expanded live order is different from
  the section order or needs repeated sections.
*/
export const SONGS = [
  {
    id:"mi-nombre", title:"Mi nombre", artist:"Leire Martínez",
    key:"F#m",
    sections:[
      {name:"Verso 1", bars:["F#m","%","D","%","F#m","%","D","%","E","%","D","%"]},
      {name:"Verso 2 (→ Coro)", bars:["F#m","%","D","%","F#m","%","D","%","E","E#°","F#m","%","E","D","C#"]},
      {name:"Coro", bars:["F#m","%","D","%","A","%","C#","%","F#m","%","D","%","A","%","C#","%"]},
      {name:"Puente", note:"El último C# no se toca (parada).", bars:["D","E","F#m","E","D","D","C#","C#"]}
    ]
  },
  {
    id:"el-fin-del-mundo", title:"El fin del mundo", artist:"La La Love You",
    key:"D",
    sections:[
      {name:"Verso", bars:["D","%","G","%","Em","%","G","%"]},
      {name:"Verso (→ Coro)", bars:["D","%","G","%","Em","%","G","A"]},
      {name:"Coro", rep:"bucle 2×", bars:["D","A","Bm","G"]},
      {name:"Coro final (→ Puente)",
        parts:[
          {label:"Vuelta normal", bars:["D","A","Bm","G"]},
          {label:"Última vuelta → Puente", bars:["D","A","Bm","Em","Em","G","A"]}
        ]},
      {name:"Puente", bars:["D","A","Bm","A","G","Em","A","D"]},
      {name:"Outro", bars:["D","%","A","%","G","%","A","%","D","%","A","%","G","%","A","%"]}
    ]
  },
  {
    id:"inmortal", title:"Inmortal", artist:"La Oreja de Van Gogh",
    key:"Am",
    sections:[
      {name:"Intro", bars:["Am"]},
      {name:"Verso", bars:["Am","%","E","%","F","%","C","%","G","%","F","G","C","%"]},
      {name:"Pre-Coro", bars:["Em","F","G","C","Am","Em","F","G"]},
      {name:"Coro", bars:["C","G","Am","E","F","C","G","F","C","E","Am"]},
      {name:"Coro (→ final)", bars:["C","G","Am","E","F","C","Bb","A"]},
      {name:"Coro final (modula a D)", bars:["D","%","A","%","Bm","%","F#","%","G","%","D","A","G","D"]}
    ]
  },
  {
    id:"peter-pan", title:"Peter Pan", artist:"El Canto del Loco",
    key:"A",
    sections:[
      {name:"Intro", bars:["A","Bm7","D","A"]},
      {name:"Verso", bars:["A","Bm7","D","A"]},
      {name:"Pre-Coro", bars:["A","Bm7","D","Dm"]},
      {name:"Coro", bars:["A","E","D","A","E","D","A","E","D","Bm7","%","E"]},
      {name:"Post-Coro 1", bars:["F#m","Bm7","E","A","A/G#","F#m","Bm7","D","Dm","A"]},
      {name:"Instrumental", bars:["E","D","E","Bm7","A","D","E","A"]},
      {name:"Post-Coro 2 (con E)", bars:["F#m","Bm7","E","A","E","F#m","Bm7","D","Dm","A"]},
      {name:"Outro", bars:["A","Bm7","D","A","A","Bm7","D","Dm"]}
    ]
  },
  {
    id:"cuando-tu-vas", title:"Cuando tú vas", artist:"Chenoa",
    key:"Bm",
    sections:[
      {name:"Verso",
        parts:[
          {label:"Bucle", rep:"x2", bars:["Bm","Em","C#m","F#m"]},
          {label:"Última vuelta", bars:["Bm","Em","C#m","F#"]}
        ]},
      {name:"Pre-Coro", bars:["F#","G","F#"]},
      {name:"Coro", rep:"bucle 2×", bars:["Bm","Em","F#","Bm","Em","F#m Em","Bm"]}
    ]
  },
  {
    id:"marta-sebas-guille", title:"Marta, Sebas, Guille y los demás", artist:"Amaral",
    key:"D",
    sections:[
      {name:"Intro", bars:["G","D","A"]},
      {name:"Verso", bars:["D","A","Bm","G","D","A","Bm","G","Em","D","B","A"]},
      {name:"Coro", bars:["D","A","Bm","G","D","A","D","A","Bm","G","D","A"]},
      {name:"Verso 2", bars:["D","A","Bm","G","D","A","Bm","G","Em","D","Bm","B","A"]},
      {name:"Puente", bars:["Bm","G","D","Bm","A","Em","Bm","A"]},
      {name:"Outro", bars:["G","A","D","Bm","D","Bm","G","D","A","D"]}
    ]
  },
  {
    id:"que-te-queria", title:"Que te quería", artist:"La Quinta Estación",
    key:"Am",
    sections:[
      {name:"Intro",
        parts:[
          {label:"Bucle", rep:"x3", bars:["F","G","Am"]},
          {label:"Cierre", bars:["F","G"]}
        ]},
      {name:"Verso 1",
        parts:[
          {label:"Base", rep:"x2", bars:["C","G","Am","F"]},
          {label:"Salida", bars:["Am","Dm","F","G"]}
        ]},
      {name:"Coro",
        parts:[
          {label:"Bucle", rep:"x2", bars:["F","G","Am"]},
          {label:"Salida", bars:["F","G","C","G","Am","Dm","G","F","G","C"]}
        ]},
      {name:"Verso 2", bars:["G","Am","F","C","G","Am","F","Am","Dm","F","G"]},
      {name:"Coro final",
        parts:[
          {label:"Bucle", rep:"x2", bars:["F","G","Am"]},
          {label:"Salida", bars:["F","G","C","G","Am","Dm","G","F","G"]},
          {label:"Tag final", bars:["Dm","G","Dm","F","G","F"]}
        ]},
      {name:"Interludio · De aquella idiota",
        parts:[
          {label:"Entrada", bars:["G","Am","F","G"]},
          {label:"Salida", bars:["C","G","Am","F","G"]}
        ]},
      {name:"Solo", bars:["F","G","Am","%","F","G","C","G","Am","F","G"]}
    ]
  },
  {
    id:"sobre-un-vidrio-mojado", title:"Sobre un vidrio mojado", artist:"",
    key:"Bb",
    sections:[
      {name:"Intro", bars:["C","F","C","F","C","F","Ab","Bb"]},
      {name:"Verso", bars:["Gm","Eb","Bb","Gm","Eb","Bb","Gm","Eb","F","Gm","Eb","F","Gm","Eb","F","C"]},
      {name:"Estribillo", bars:["F","C","F","C","F","Ab","Bb"]},
      {name:"Puente", bars:["Gm","Eb","Bb","Gm","Eb","Bb","Gm"]},
      {name:"Final", bars:["Gm","Eb","Bb","Gm","Eb","Bb","Gm","Eb","Bb","Gm","Eb","Bb"]}
    ]
  },
  {
    id:"me-has-invitado-a-bailar", title:"Me has invitado a bailar", artist:"",
    key:"Db",
    sections:[
      {name:"Verso", bars:["Db","Bbm","Gb","Db","Bbm","Gb","Ebm","Gb","Db","Ab"]},
      {name:"Estribillo", bars:["Ebm","Gb","Db","Ab","Ebm","Gb","Db","Ab"]},
      {name:"Verso 2", bars:["Db","Ab","Db","Bbm","Gb","Db","Ab","Cb","Gb","Ebm","Gb","Db","Ab"]},
      {name:"Coda", bars:["Ebm","Gb","Db","Ab"]}
    ]
  },
  {
    id:"desde-que-ya-no-eres-mia", title:"Desde que ya no eres mía", artist:"Los Zigarros",
    key:"Dm",
    sections:[
      {name:"Intro", bars:["Dm"]},
      {name:"Verso", bars:["Dm","G","Dm","%","Am","%","Bb","Gm","F","Gm","A"]},
      {name:"Coro", rep:"(Uhmm…)", bars:["Dm","G","Dm","F","A","Dm","Dm","G","Dm","F","A","Dm"]}
    ]
  },
  {
    id:"carolina", title:"Carolina", artist:"M-Clan",
    key:"G#m",
    sections:[
      {name:"Intro",
        parts:[
          {label:"Entrada", rep:"x2", bars:["G#m","E"]},
          {label:"Bucle", rep:"x3", bars:["G#m","E","B","F#"]},
          {label:"Cierre", bars:["D","A","B"]}
        ]},
      {name:"Verso / Solo 2", rep:"x2", bars:["E","B","F#","C#m","E","B","F#"]},
      {name:"Pre-Coro", bars:["C#m","F#","C#m","F#","E/B","F#"]},
      {name:"Coro / Solo / Outro",
        parts:[
          {label:"Bucle", rep:"x3", bars:["G#m","E","B","F#"]},
          {label:"Cierre", bars:["D","A","B"]}
        ]}
    ]
  },
  {
    id:"zapatillas", title:"Zapatillas", artist:"El Canto del Loco",
    key:"Cm",
    sections:[
      {name:"Intro", bars:["Cm","G","Ab","G"]},
      {name:"Verso",
        parts:[
          {label:"Bucle", bars:["Cm","G","Ab","G","Cm","G","Ab","G"]},
          {label:"Última vuelta → Pre-Coro", bars:["Cm","G","Gm","Ab","Bb"]}
        ]},
      {name:"Pre-Coro", bars:["Eb","Bb","Cm","Bb","Eb"]},
      {name:"Coro", bars:["Bb","Cm","Bb","Eb","Bb","Cm","Bb","Eb","Bb","Gm","G","Cm","G","Ab","G"]},
      {name:"Verso 2", bars:["Cm","G","Ab","G","Cm","G","Ab","G","Cm","G","Ab","Bb"]},
      {name:"Puente", bars:["Cm","Ab","Cm","G","Cm","G","Ab","Bb"]}
    ]
  },
  {
    id:"potra-salvaje", title:"Potra salvaje", artist:"Isabel Aaiún",
    key:"Dm",
    sections:[
      {name:"Intro", bars:["Dm","C","Bb","A"]},
      {name:"Verso", bars:["Dm","C","Bb","%","F","Bb","C","%","Dm","C","Bb","%","F","Bb","C","%"]},
      {name:"Verso 2", bars:["C","Bb","F","Bb","C"]},
      {name:"Pre-Estribillo", bars:["Gm","Dm","F","C","Gm","Bb","C"]},
      {name:"Estribillo", bars:["Bb","C","A","Dm","C","Bb","C","A","Dm"]},
      {name:"Interludio", bars:["Dm","C","Bb","C","A"]},
      {name:"Puente", bars:["Gm","Dm","F","C","Gm","Bb","A"]}
    ]
  },
  {
    id:"voy-a-pasarmelo-bien", title:"Voy a pasármelo bien", artist:"Hombres G",
    key:"A",
    sections:[
      {name:"Verso", bars:["A","%","D","A","F#m","D","G","D","A"]},
      {name:"Puente hablado", bars:["D","A","D","E","G","D","A"]},
      {name:"Solo", bars:["D","A","F#m","D","G","D","A"]},
      {name:"Outro",
        parts:[
          {label:"Vamp", bars:["G","D","A","G","D","A"]},
          {label:"Remate", bars:["A","D","F","G","A"]}
        ]}
    ]
  },
  {
    id:"antes-de-que-cuente-diez", title:"Antes de que cuente diez", artist:"Fito & Fitipaldis",
    key:"C",
    sections:[
      {name:"Intro", bars:["Am","G","Dm","F","G"]},
      {name:"Verso", bars:["Am","%","G","%","Dm","%","C","G"]},
      {name:"Puente", bars:["Am","C/G"]},
      {name:"Verso 2",
        parts:[
          {label:"Primera vuelta", bars:["Am","%","C","G","Dm","%"]},
          {label:"Segunda vuelta", bars:["Am","%","C","G","Dm","G"]}
        ]},
      {name:"Solo Guitarra", bars:["Am","%","F","%","Dm","%","F","%"]},
      {name:"Solo Sax", bars:["Am","%","G","%","Dm","F","G"]},
      {name:"Verso 3",
        parts:[
          {label:"Entrada 1x", bars:["Am","%","C","%","G","%","F","%"]},
          {label:"Bucle", rep:"4x", bars:["C","%","G","%","Am","%","F","%"]}
        ]},
      {name:"Variacion", bars:["F/E","F/E","D/C"]}
    ]
  }
];

export const FLOWS = {
  "mi-nombre":["Verso 1","Verso 2 (→ Coro)","Coro","Verso 2 (→ Coro)","Coro","Puente","Coro"],
  "el-fin-del-mundo":["Verso","Verso (→ Coro)","Coro","Verso","Verso (→ Coro)","Coro final (→ Puente)","Puente","Outro"],
  "inmortal":["Intro","Verso","Verso","Pre-Coro","Coro","Verso","Pre-Coro","Coro (→ final)","Coro final (modula a D)"],
  "peter-pan":["Intro","Verso","Pre-Coro","Coro","Post-Coro 1","Verso","Pre-Coro","Coro","Instrumental","Coro","Post-Coro 2 (con E)","Outro"],
  "cuando-tu-vas":["Verso","Pre-Coro","Coro"],
  "marta-sebas-guille":["Intro","Verso","Verso","Coro","Verso 2","Coro","Puente","Coro","Coro","Outro"],
  "sobre-un-vidrio-mojado":["Intro","Verso","Estribillo","Verso","Estribillo","Puente","Verso","Final"],
  "me-has-invitado-a-bailar":["Verso","Estribillo","Verso 2","Estribillo","Coda","Estribillo","Coda"],
  "zapatillas":["Intro","Verso","Pre-Coro","Coro","Verso 2","Pre-Coro","Coro","Puente","Coro"],
  "que-te-queria":["Intro","Verso 1","Coro","Verso 2","Coro final","Interludio · De aquella idiota","Solo"],
  "desde-que-ya-no-eres-mia":["Intro","Verso","Verso","Coro","Verso","Coro","Coro"],
  "carolina":["Intro","Verso / Solo 2","Pre-Coro","Coro / Solo / Outro"],
  "potra-salvaje":["Intro","Verso","Pre-Estribillo","Estribillo","Verso 2","Pre-Estribillo","Estribillo","Interludio","Puente","Estribillo"],
  "voy-a-pasarmelo-bien":["Verso","Verso","Verso","Puente hablado","Solo","Verso","Verso","Outro"],
  "antes-de-que-cuente-diez":["Intro","Verso","Puente","Verso 2","Solo Guitarra","Solo Sax","Verso 3","Variacion"]
};
