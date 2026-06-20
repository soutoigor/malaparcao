/*
  Setlist data.

  Add songs to SONGS in the order you want them to appear in the setlist.
  Add an entry to FLOWS only when the expanded live order is different from
  the section order or needs repeated sections.
*/
export const SONGS = [
  {
    id:"mi-nombre", title:"Mi nombre", artist:"Leire Martínez",
    key:"F#m", origin:"Tono original (F#m).",
    sections:[
      {name:"Verso 1", bars:["F#m","%","D","%","F#m","%","D","%","E","%","D","%"]},
      {name:"Verso 2 (→ Coro)", bars:["F#m","%","D","%","F#m","%","D","%","E","E#°","F#m","%","E","D","C#"]},
      {name:"Coro", bars:["F#m","%","D","%","A","%","C#","%","F#m","%","D","%","A","%","C#","%"]},
      {name:"Puente", note:"El último C# no se toca (parada).", bars:["D","E","F#m","E","D","D","C#","C#"]}
    ]
  },
  {
    id:"el-fin-del-mundo", title:"El fin del mundo", artist:"La La Love You",
    key:"D", origin:"En D (según tu PDF de acordes).",
    sections:[
      {name:"Verso", note:"La última vez termina en G A antes del coro.", bars:["D","%","G","%","Em","%","G","%"]},
      {name:"Coro", rep:"bucle 2×", bars:["D","A","Bm","G"]},
      {name:"Coro final (→ Puente)", note:"El último coro acaba en Em-Em-G-A y entra el puente.", bars:["D","A","Bm","G","D","A","Bm","Em","Em","G","A"]},
      {name:"Puente", bars:["D","A","Bm","A","G","Em","A","D"]},
      {name:"Outro", note:"Cada acorde dura 2 compases.", bars:["D","%","A","%","G","%","A","%","D","%","A","%","G","%","A","%"]}
    ]
  },
  {
    id:"inmortal", title:"Inmortal", artist:"La Oreja de Van Gogh",
    key:"Am", origin:"En forma de Am (lo pediste). El final modula a D.",
    sections:[
      {name:"Intro", bars:["Am"]},
      {name:"Verso", note:"La última vuelta acaba en E (entra el Pre-Coro).", bars:["Am","%","E","%","F","%","C","%","G","%","F","G","C","%"]},
      {name:"Pre-Coro", bars:["Em","F","G","C","Am","Em","F","G"]},
      {name:"Coro", note:"Acaba en E - Am (vuelve al verso).", bars:["C","G","Am","E","F","C","G","F","C","E","Am"]},
      {name:"Coro (→ final)", note:"En vez de G-F-C, acaba en Bb - A y entra el coro final.", bars:["C","G","Am","E","F","C","Bb","A"]},
      {name:"Coro final (modula a D)", note:"Acaba en un D; no tocamos el Final.", bars:["D","%","A","%","Bm","%","F#","%","G","%","D","A","G","D"]}
    ]
  },
  {
    id:"peter-pan", title:"Peter Pan", artist:"El Canto del Loco",
    key:"A", origin:"En tono de A, sin cejilla (según tu PDF).",
    sections:[
      {name:"Intro", bars:["A","Bm7","D","A"]},
      {name:"Verso", note:"Bucle A·Bm7·D·A (una vez por frase).", bars:["A","Bm7","D","A"]},
      {name:"Pre-Coro", bars:["A","Bm7","D","Dm"]},
      {name:"Coro", bars:["A","E","D","A","E","D","A","E","D/C#","Bm7","%","E"]},
      {name:"Post-Coro", bars:["F#m","Bm7","E","A","A/G#","F#m","Bm7","D","Dm","A"]},
      {name:"Instrumental", bars:["E","D","E","Bm7","A/C#","D","E","A"]},
      {name:"Outro", bars:["A","Bm7","D","A","A","Bm7","D","Dm"]}
    ]
  },
  {
    id:"cuando-tu-vas", title:"Cuando tú vas", artist:"Chenoa",
    key:"Bm", origin:"En Bm (según tu PDF).",
    sections:[
      {name:"Verso 1", bars:["Bm","%","Em","%","C#m","%","F#m","Bm"]},
      {name:"Verso 2", note:"Acaba en F# (entra el Pre-Coro).", bars:["Bm","%","Em","%","C#m","%","F#","%"]},
      {name:"Pre-Coro", note:"‘No hables de sexo seguro… de amor’.", bars:["C#m","F#","Em","F#","G","%","F#"]},
      {name:"Coro", bars:["F#","Bm","Em","Bm","Em","F#","Bm","Em","F#m","Em","Bm","Em","C#m","F#","Bm","Em"]},
      {name:"Cierre", note:"Tag final con el D y ‘sé que tú me engañas’.", bars:["Bm","Em","F#","Bm","Em","D","Bm","Em","F#","Bm","Em","F#","Em","F#m","Em","F#m","Bm"]}
    ]
  },
  {
    id:"marta-sebas-guille", title:"Marta, Sebas, Guille y los demás", artist:"Amaral",
    key:"D", origin:"Tono original (D).",
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
    key:"Am", origin:"Tono original (Am).",
    sections:[
      {name:"Intro", bars:["F","G","Am","F","G","Am","F","G","Am","F","G"]},
      {name:"Verso 1", bars:["C","G","Am","F","C","G","Am","F","Am","Dm","F","G"]},
      {name:"Verso 2", note:"Empieza en G·Am (‘No importa cómo fue’) y va a ‘…sin tu voz’.", bars:["G","Am","F","C","G","Am","F","Am","Dm","F","G"]},
      {name:"Coro", bars:["F","G","Am","F","G","Am","F","G","C","G","Am","Dm","G","F","G","C"]},
      {name:"Coro final", note:"Añade ‘Que todavía espera…’: G·Dm / F·G·F.", bars:["F","G","Am","F","G","Am","F","G","C","G","Am","Dm","G","F","G","Dm","G","Dm","F","G","F"]},
      {name:"Interludio", bars:["G","Am","F","G","C","G","Am","F","G"]},
      {name:"Cierre", note:"‘De aquella idiota / Que te quería / Oh yeah…’ y último coro.", bars:["F","G","Am","F","G","Am","F","G","C","G","Am","Dm","G","F","G","F","G","Am","F","G","Am","F","G","C","G","Am","Dm","G","F","G"]}
    ]
  },
  {
    id:"sobre-un-vidrio-mojado", title:"Sobre un vidrio mojado", artist:"",
    key:"Bb", origin:"Tono original (Bb).",
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
    key:"Db", origin:"Tono original (Db).",
    sections:[
      {name:"Verso", bars:["Db","Bbm","Gb","Db","Bbm","Gb","Ebm","Gb","Db","Ab"]},
      {name:"Estribillo", bars:["Ebm","Gb","Db","Ab","Ebm","Gb","Db","Ab"]},
      {name:"Verso 2", bars:["Db","Ab","Db","Bbm","Gb","Db","Ab","Cb","Gb","Ebm","Gb","Db","Ab"]},
      {name:"Coda", bars:["Ebm","Gb","Db","Ab"]}
    ]
  },
  {
    id:"desde-que-ya-no-eres-mia", title:"Desde que ya no eres mía", artist:"Los Zigarros",
    key:"Dm", origin:"Tono original (Dm).",
    sections:[
      {name:"Intro", bars:["Dm"]},
      {name:"Verso", bars:["Dm","G","Dm","%","Am","%","Bb","Gm","F","Gm","A"]},
      {name:"Coro", rep:"(Uhmm…)", bars:["Dm","G","Dm","F","A","Dm","Dm","G","Dm","F","A","Dm"]}
    ]
  },
  {
    id:"carolina", title:"Carolina", artist:"M-Clan",
    key:"G", defaultOffset:4, origin:"Escrita en G; suena en B (lo pediste). Pulsa − para volver a G.",
    sections:[
      {name:"Intro", bars:["G","D","Em","C","G","D","Em","C","G","D","Bb","F","G","C"]},
      {name:"Verso 1", bars:["G","Am","C","G","D","C","G","D","Am","C","G","D","Am"]},
      {name:"Pre-Estribillo", bars:["D","Am","D","C","G","D","Em"]},
      {name:"Estribillo", bars:["C","G","D","Em","C","G","D","Em","C","G","D","Bb","F","G","Em","C"]},
      {name:"Solo 1", note:"Igual que la Intro.", bars:["G","D","Em","C","G","D","Em","C","G","D","Bb","F","G","C"]},
      {name:"Verso 2", bars:["G","D","Am","C","G","D","C","G","D","Am","C","G","D","Am"]},
      {name:"Solo 2", note:"‘Santi Campillo en la guitarra’.", bars:["D","Am","C","G","D","C","G","D","Am","C","G","D","Am"]},
      {name:"Final", bars:["G","D","Em","C","G","D","Em","C","G","D","Bb","F","G","Bb","F","G","Bb","F","G"]}
    ]
  },
  {
    id:"zapatillas", title:"Zapatillas", artist:"El Canto del Loco",
    key:"Cm", origin:"Tono original (Cm).",
    sections:[
      {name:"Intro", bars:["Cm","G","Ab","G"]},
      {name:"Verso", note:"Bucle Cm·G·Ab·G; la última vuelta acaba Cm·G·Gm·Ab·Bb.", bars:["Cm","G","Ab","G","Cm","G","Ab","G","Cm","G","Gm","Ab","Bb"]},
      {name:"Pre-Coro", bars:["Eb","Bb","Cm","Bb","Eb"]},
      {name:"Coro", bars:["Bb","Cm","Bb","Eb","Bb","Cm","Bb","Eb","Bb","Gm","G","Cm","G","Ab","G"]},
      {name:"Verso 2", bars:["Cm","G","Ab","G","Cm","G","Ab","G","Cm","G","Ab","Bb"]},
      {name:"Puente", bars:["Cm","Ab","Cm","G","Cm","G","Ab","Bb"]}
    ]
  },
  {
    id:"potra-salvaje", title:"Potra salvaje", artist:"Isabel Aaiún",
    key:"Dm", origin:"Tono original (Dm), según tu PDF.",
    sections:[
      {name:"Intro", bars:["Dm","C","Bb","A"]},
      {name:"Verso", bars:["Dm","C","Bb","%","F","Bb","C","%","Dm","C","Bb","%","F","Bb","C","%"]},
      {name:"Verso 2", note:"‘Nube que esconde…’ (media estrofa).", bars:["C","Bb","F","Bb","C"]},
      {name:"Pre-Estribillo", bars:["Gm","Dm","F","C","Gm","Bb","C"]},
      {name:"Estribillo", bars:["Bb","C","A","Dm","C","Bb","C","A","Dm"]},
      {name:"Interludio", bars:["Dm","C","Bb","C","A"]},
      {name:"Puente", bars:["Gm","Dm","F","C","Gm","Bb","A"]}
    ]
  },
  {
    id:"voy-a-pasarmelo-bien", title:"Voy a pasármelo bien", artist:"Hombres G",
    key:"A", origin:"En A (según tu PDF).",
    sections:[
      {name:"Verso", note:"El gancho ‘voy a pasármelo bien’ = G·D·A.", bars:["A","%","D","A","F#m","D","G","D","A"]},
      {name:"Puente hablado", bars:["D","A","D","E","G","D","A"]},
      {name:"Solo", bars:["D","A","F#m","D","G","D","A"]},
      {name:"Outro", note:"‘Muy bien / Mujer’: vamp G·D·A, remata en A·D·F·G·A.", bars:["G","D","A","G","D","A","A","D","F","G","A"]}
    ]
  },
  {
    id:"antes-de-que-cuente-diez", title:"Antes de que cuente diez", artist:"Fito & Fitipaldis",
    key:"C", origin:"Original: A. Transpuesta a C (lo pediste).",
    sections:[
      {name:"Intro", bars:["Am","G","Dm","F","G"]},
      {name:"Verso", bars:["Am","G","Dm","C","G","Am","G","Dm","C","G","Am","C","G"]},
      {name:"Interludio", bars:["Am","C","G","Am","C","G","Am","C","G"]},
      {name:"Pre-Coro", note:"Acaba con ‘…me voy a ir a dormir’.", bars:["Am","C","G","Dm","Am","C","G"]},
      {name:"Puente", note:"Instrumental ‘me voy a ir a dormir’.", bars:["Dm","G","Am","F","Dm","F","Am","G","Dm","F","Am","G","Dm","F","G"]},
      {name:"“Lo que me llevará…”", bars:["Am","C","G","F","Am","C","G","F","C","F"]},
      {name:"Coro", rep:"bucle 2×", bars:["C","G","Am","F","C","G","Am","F"]},
      {name:"Solo 1 (medio)", solo:true, note:"Las dos mitades se tocan con guitarra.",
        parts:[
          {label:"1ª mitad · guitarra", bars:["Am","F","Dm","F"]},
          {label:"2ª mitad · sax", bars:["Am","G","Dm","F","Am","G","Dm","F","G"]}
        ]},
      {name:"Solo 2 (final)", solo:true, note:"Las dos mitades se tocan con guitarra.",
        parts:[
          {label:"1ª mitad · guitarra", bars:["Am","F","Dm","F"]},
          {label:"2ª mitad · sax", bars:["Am","G","Dm","F","Am","G","Dm","F","G"]}
        ]}
    ]
  }
];

export const FLOWS = {
  "mi-nombre":["Verso 1","Verso 2 (→ Coro)","Coro","Verso 2 (→ Coro)","Coro","Puente","Coro"],
  "el-fin-del-mundo":["Verso","Verso","Coro","Verso","Verso","Coro final (→ Puente)","Puente","Outro"],
  "inmortal":["Intro","Verso","Verso","Pre-Coro","Coro","Verso","Pre-Coro","Coro (→ final)","Coro final (modula a D)"],
  "peter-pan":["Intro","Verso","Pre-Coro","Coro","Post-Coro","Verso","Pre-Coro","Coro","Instrumental","Coro","Post-Coro","Outro"],
  "cuando-tu-vas":["Verso 1","Verso 2","Pre-Coro","Coro","Pre-Coro","Coro","Cierre"],
  "marta-sebas-guille":["Intro","Verso","Verso","Coro","Verso 2","Coro","Puente","Coro","Coro","Outro"],
  "sobre-un-vidrio-mojado":["Intro","Verso","Estribillo","Verso","Estribillo","Puente","Verso","Final"],
  "me-has-invitado-a-bailar":["Verso","Estribillo","Verso 2","Estribillo","Coda","Estribillo","Coda"],
  "zapatillas":["Intro","Verso","Pre-Coro","Coro","Verso 2","Pre-Coro","Coro","Puente","Coro"],
  "que-te-queria":["Intro","Verso 1","Coro","Verso 2","Coro final","Interludio","Cierre"],
  "desde-que-ya-no-eres-mia":["Intro","Verso","Verso","Coro","Verso","Coro","Coro"],
  "carolina":["Intro","Verso 1","Pre-Estribillo","Estribillo","Solo 1","Verso 2","Pre-Estribillo","Estribillo","Solo 2","Pre-Estribillo","Estribillo","Estribillo","Final"],
  "potra-salvaje":["Intro","Verso","Pre-Estribillo","Estribillo","Verso 2","Pre-Estribillo","Estribillo","Interludio","Puente","Estribillo"],
  "voy-a-pasarmelo-bien":["Verso","Verso","Verso","Puente hablado","Solo","Verso","Verso","Outro"],
  "antes-de-que-cuente-diez":["Intro","Verso","Interludio","Pre-Coro","Puente","“Lo que me llevará…”","Coro","Solo 1 (medio)","Verso","Coro","Solo 2 (final)"]
};
