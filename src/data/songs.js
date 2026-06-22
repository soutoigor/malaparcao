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
    lyrics:`Llegan las dudas gritando que sí fue mi culpa
Están dictando palabras usando tu voz
Imaginando que van a escuchar mis disculpas

Rompiste todo cuando casi estaba perfecto
Y eres el miedo vestido tras cada canción
Siempre pensaste que yo guardaría el secreto
Pero solo dame tiempo para demostrar que yo

Nunca fui tuya
Búscate a alguien que me sustituya
Ya lo hiciste una vez
Pero tú ya no podrás esconder más
Dos caras y un nombre

¿Dónde?
¿Dónde firmo para que te cobren
Las mentiras que tan bien escondes?
Pero que te volverán
Gritando mi nombre

No quiero oír nada más, ya conozco tus miedos
Aunque los disfraces
Detrás de ti, puedo verlos usando mi voz
Aunque tú los calles
Vete corriendo a encontrar quién se crea tus cuentos
Que yo seguiré leyendo hasta demostrar que no

Nunca fui tuya
Búscate a alguien que me sustituya
Ya lo hiciste una vez
Pero tú ya no podrás esconder más
Dos caras y un nombre

¿Dónde?
¿Dónde firmo para que te cobren
Las mentiras que tan bien escondes?
Pero que te volverán

Sabes que yo
Aunque duela, no voy a olvidar
Esos años, y siempre serás
Bienvenido a este lugar

En el que nunca fui tuya
Búscate a alguien que me sustituya
Ya lo hiciste una vez
Pero tú ya no podrás esconder más
Dos caras y un nombre

¿Dónde?
¿Dónde firmo para que te cobren
Las mentiras que tan bien escondes?
Pero que te volverán
Gritando mi nombre`,
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
    lyrics:`Un día llega a mí la calma
Mi Peter Pan hoy amenaza
Aquí ya hay poco qué hacer

Me siento como en otra plaza
En la de estar solito en casa
¿Será culpa de tu piel?

¿Será que me habré hecho mayor?
Que algo nuevo ha tocado este botón
Para que Peter se largue

Y tal vez viva ahora mejor
Más a gusto y más tranquilo en mi interior
Que Campanilla te cuide y te guarde

A veces, gritas desde el cielo
Queriendo destrozar mi calma
Vas persiguiendo como un trueno
Para darme ese relámpago azul

Ahora, me gritas desde el cielo
Pero te encuentras con mi alma
Conmigo, ya no intentes nada
Parece que el amor me calma, me calma

Si te llevas mi niñez
Llévate la parte que me sobre a mí
Si te marchas, viviré
Con la paz que necesito y tanto ansié

Pasó un buen día junto a mí
Parecía que quería quedarse aquí
No había manera de echarle

Si Peter no se quiere ir
La soledad después querrá vivir en mí
La vida tiene sus fases, sus fases

A veces, gritas desde el cielo
Queriendo destrozar mi calma
Vas persiguiendo como un trueno
Para darme ese relámpago azul

Ahora me gritas desde el cielo
Pero te encuentras con mi alma
Conmigo, ya no intentes nada
Parece que el amor me calma

Y a veces, gritas desde el cielo
Queriendo destrozar mi calma
Vas persiguiendo como un trueno
Para darme ese relámpago azul

Ahora, me gritas desde el cielo
Pero te encuentras con mi alma
Conmigo ya no intentes nada
Parece que el amor me calma, me calma

Cuando te marches creceré
Recorriendo tantas partes que olvidé
Llegó mi tiempo, ya lo ves
Tengo paz y es el momento de crecer
Si te marchas, viviré
Con la paz que necesito y tanto ansié

Espero que no vuelva más
Que se quede tranquilito como está
Que él ya tuvo bastante

Fue un tiempo para no olvidar
La zona mala quiere ahora descansar
Que Campanilla te cuide
Y te guarde`,
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
    lyrics:`Presumiendo que lo sabe todo
Me dice cosas que no suenan del todo bien
Está tratando de seducirme
Entre la marcha y tanto ruido no lo oigo bien
Pelo hacia atrás sonrisa retorcida
Intentará abordarme por segunda vez
No se da cuenta que no me interesa
Que lo que diga o lo que haga lo conozco bien

Y no me hables de sexo seguro
Ni plastifiques mi corazón
Ya estoy cansada de cuerpos duros
Y mentes blandas que no saben de amor

Cuando tú vas, yo vengo de allí
Cuando yo voy, tú todavía estas aquí
Y crees que me puedes confundir
Y de qué vas mirándome atrás
¡Ay, qué descaro! Ahora me gustas más
Y es que no me fío porque sé que tú me engañarás

Le vi una mueca casi congelada
Reflejado está en su cara lo que dije de él
Y como un rayo solo dio la vuelta
Me conquistó cuando me dijo que me equivoqué
Por fin preguntas como me llamaba
La verdad hubieses empezado con buen pie
Comprenderás que yo no te conozco
Pero me muero de deseo por besar su piel

Y no me hables de sexo seguro
Ni plastifiques mi corazón
Ya estoy cansada de cuerpos duros
Y mentes blandas que no saben de amor

Cuando tú vas, yo vengo de allí
Cuando yo voy, tú todavía estas aquí
Y crees que me puedes confundir
Y de qué vas mirándome atrás
¡Ay, qué descaro! Ahora me gustas más
Y es que no me fío porque sé que tú me engañarás`,
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
    lyrics:`Marta me llamó a las seis, hora española
Solo para hablar, solo se sentía sola
Porque Sebas se marchó de vuelta a Buenos Aires
El dinero se acabó, ya no hay sitio para nadie

¿Dónde empieza y dónde acabará
El destino que nos une y que nos separará?

Yo estoy sola en el hotel, estoy viendo amanecer
Santiago de Chile se despierta entre montañas
Aguirre toca la guitarra en la 304
Un gato rebelde que anda medio enamora'o

De la señorita rock'n'roll
Aunque no lo ha confesado
Eso lo sé yo

Son mis amigos
En la calle, pasábamos las horas
Son mis amigos
Por encima de todas las cosas

Carlos me contó que a su hermana Isabel
La echaron del trabajo sin saber porqué
No le dieron ni las gracias porque estaba sin contrato
Aquella misma tarde fuimos a celebrarlo

Ya no tendrás que soportar
Al imbécil de tu jefe
Ni un minuto más

Son mis amigos
En la calle, pasábamos las horas
Son mis amigos
Por encima de todas las cosas
Son mis amigos

Alicia fue a vivir a Barcelona
Y hoy ha venido a mi memoria
Claudia tuvo un hijo
Y de Guille y los demás, ya no sé nada

Son mis amigos
En la calle, pasábamos las horas
Son mis amigos
Por encima de todas las cosas

Son mis amigos
En la calle, pasábamos las horas
Son mis amigos
Por encima de todas las cosas
Son mis amigos`,
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
    lyrics:`La llama se apagó, no sé
Matamos la ilusión, tal vez
¿Y dónde quedo yo?
En este mundo sin color
Sin historias que contarte
Sin saber cómo explicarte

Que hoy te veo
Y aunque lo intente no se me olvida
Que eras tú el que no creía en las despedidas
Que sigo siendo la misma loca
Que entre tus sábanas se perdía
Y a fin de cuentas no soy distinta
De aquella idiota que te quería

No importa cómo fue, ni quien
Queríamos beber, ja, sin sed
Y dónde quedo yo
En este mundo sin tu voz
Ignorando las señales
Que me llevan a encontrarte

Que hoy te veo
Y aunque lo intente no se me olvida
Que eras tú el que no creía en las despedidas
Que sigo siendo la misma loca
Que entre tus sábanas se perdía
Y a fin de cuentas no soy distinta
De aquella idiota que te quería
Que todavía espera verte sonreír
Que todavía espera verse junto a ti

Que hoy te veo
Y aunque lo intente no se me olvida
Que eras tú el que no creía en las despedidas
Que sigo siendo la misma loca
Que entre tus sábanas se perdía
Y a fin de cuentas no soy distinta
De aquella idiota que te quería
Uh, yeh, yeh, uh, eh, eh, eh

Que sigo siendo la misma loca
Que entre tus sábanas se perdía
Y a fin de cuentas no soy distinta
De aquella idiota que te quería`,
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
    lyrics:`Sobre un vidrio mojado
Escribí su nombre sin darme cuenta
Y mis ojos quedaron igual que ese vidrio pensando en ella.

Los cuadros no tienen colores,
Las rosas no parecen flores,
No hay pájaros en la mañana;
Nada es igual, nada es igual, nada es igual, nada.
Sobre un vidrio mojado escribí su nombre sin darme cuenta
Y mis ojos quedaron igual que ese vidrio pensando en ella.

Hoy cuando desperté buscaba
El sol que entraba en mi ventana,
Tras una nube se ocultaba;
Nada es igual, nada es igual, nada es igual, nada.
Los cuadros no tienen colores,
Las rosas no parecen flores,
No hay pájaros en la mañana;
Nada es igual, nada es igual, nada es igual, nada.

Sobre un vidrio mojado escribí su nombre sin darme cuenta
Y mis ojos quedaron igual que ese vidrio pensando en ella.

Sobre un vidrio mojado escribí su nombre ...
Y mis ojos quedaron igual que ese vidrio ...
Sin darme cuenta ...
Pensando en ella ...`,
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
    lyrics:`Me has invitado a bailar
Estás espectacular
No he terminado y ya sé que me voy a querer quedar

Tienes un brillo especial
Una manera de hablar
Que, sin saber lo que dices, ya estoy convencido

Y tengo todo preparado
Cuando estés lista, nos vamos
Y no me hace falta regresar

Quiero que me dejes entrar
Donde no te han visto jamás
Y antes de llegar al final
Apunta y dispara que vuele por los aires lo demás

¿Cómo no te voy a cuidar
Si haces que me quiera quedar
Y llevaba fuera de casa tanto ya?

Has conseguido cambiar
Lo que creía real
Y me he quedado despierto por pasar un rato más

Casi puedo levitar
Con esta electricidad
Que me recorre por dentro cuando estoy contigo

No sé si me estoy pasando
Pero sé de lo que hablo
Cuando digo que no quiero más

Quiero que me dejes entrar
Donde no te han visto jamás
Y antes de llegar al final
Apunta y dispara que vuele por los aires lo demás

¿Cómo no te voy a cuidar
Si haces que me quiera quedar
Y llevaba fuera de casa tanto ya?

No sé qué pasará, pero creo
Que tengo mucho más puesto en juego
Quiero pasar la noche en tu pelo
Desenredar todos tus recuerdos

No sé qué pasará, pero creo
Que tengo mucho más puesto en juego
Quiero pasar la noche en tu pelo
Desenredar todos tus recuerdos

Quiero que me dejes entrar
Donde no te han visto jamás
Y antes de llegar al final
Apunta y dispara que vuele por los aires lo demás

¿Cómo no te voy a cuidar
Si haces que me quiera quedar
Y llevaba fuera de casa tanto ya?

No sé qué pasará, pero creo
Que tengo mucho más puesto en juego
Quiero pasar la noche en tu pelo
Desenredar todos tus recuerdos

No sé qué pasará
Que tengo mucho más
Quiero pasar la noche en tu pelo
Desenredar todos tus recuerdos

(No sé qué pasará, pero creo)
(Que tengo mucho más puesto en juego)
(Quiero pasar la noche en tu pelo)
(Desenredar todos tus recuerdos)

(No sé qué pasará, pero creo)
(Que tengo mucho más puesto en juego)
(Quiero pasar la noche en tu pelo)
(Desenredar todos tus recuerdos)`,
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
    lyrics:`Desde que ya no eres mía y no te tengo
Todos me dicen que ahora corres de bar en bar
En cada esquina dejas un rastro de purpurina
Como un fantasma que no me quiero encontrar

Oigo que mueves tus caderas como una loca
Sueño que subes a los coches de los demás
Ahora que ya no eres mía y no te tengo
No puedo controlar el miedo a verte
Diciéndole a cualquiera que si

Voy a perder la cabeza otra vez
Voy a perder la cabeza otra vez

Dicen que te has cortado el pelo y hablas distinto
Mojas la cama con niños guapos de la ciudad
Desde que ya no eres mía y no te tengo
Oh, la vida me soltó la mano
Todo se apagó a mi alrededor

Voy a perder la cabeza otra vez
Voy a perder la cabeza otra vez

Oigo que mueves tus caderas como una loca
Sueño que subes a los coches de los demás
Ahora que ya no eres mía y no te tengo
No puedo controlar el miedo a verte
Diciéndole a cualquiera que si

Voy a perder la cabeza otra vez
Voy a perder la cabeza otra vez`,
    sections:[
      {name:"Intro", bars:["Dm"]},
      {name:"Verso", bars:["Dm","G","Dm","%","Am","%","Bb","Gm","F","Gm","A"]},
      {name:"Coro", rep:"(Uhmm…)", bars:["Dm","G","Dm","F","A","Dm","Dm","G","Dm","F","A","Dm"]}
    ]
  },
  {
    id:"carolina", title:"Carolina", artist:"M-Clan",
    key:"G#m",
    lyrics:`La dulce niña Carolina
No tiene edad para hacer el amor
Su madre la estará buscando
Eso es lo que creo yo

No puedo echarla de mi casa
Me dice que no tiene dónde dormir
Después se mete en mi cama
Eso es mucho para mí

Esa va a ser mi ruina
Pequeña Carolina
Vete, por favor

Carolina, trátame bien
No te rías de mí, no me arranques la piel
Carolina, trátame bien
O, al final, te tendré que comer

No queda en la ciudad esquina
Tras la que yo me pueda esconder
Siempre aparece Carolina
Con algún tipo de interés

La reina de las medicinas
Que no se venden en farmacia legal
Vinagre para las heridas
Dulce azúcar al final

El diablo está en mi vida
Pequeña Carolina
Vete, por favor

Carolina, trátame bien
No te rías de mí, no me arranques la piel
Carolina, trátame bien
O, al final, te tendré que comer

El diablo está en mi vida
Pequeña Carolina
Vete, por favor

Carolina, trátame bien
No te rías de mí, no me arranques la piel
Carolina trátame bien
O, al final, te tendré que comer

Carolina, trátame bien
No te rías de mí, no me arranques la piel
Carolina, trátame bien
O, al final, te tendré que comer

Dulce niña, Carolina`,
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
    lyrics:`Estoy cansado de salir de noche y ver siempre la misma gente
Estoy flipando de que la gente se invente, cuente y luego reinvente
Apoltronado en el sofá de mi casa, vente se está caliente

Amaestrados vamos al mismo sitio todos aunque luego ni entres
Alucinando de que me miren de arriba a bajo como un delincuente
Intoxicado de que me pongan esa puta música indiferente

Quiero entrar en tu garito con zapatillas
Que no me miren mal al pasar
Estoy cansado de siempre lo mismo
La misma historia, y quiero cambiar
Me da pena tanta tontería
Quiero un poquito de normalidad
Pero a ver, mírame, y dime tronco, no veo ni un sitio y no puedo aparcar

Estoy muy harto de que me digan: Si no estás en lista no puedes pasar
Solo entran cuatro, tenemos zona super mega guay y nunca la verás
Abarrotado, hay aforo limitado y ahora toca esperar
Y, y, nos han multado y tu coche se lo ha llevado la grúa municipal

Quiero entrar en tu garito con zapatillas
Que no me miren mal al pasar
Estoy cansado de siempre lo mismo
La misma historia, y quiero cambiar
Me da pena tanta tontería
Quiero un poquito de normalidad
Pero a ver, mírame, y dime tronco, no veo ni un sitio y no puedo aparcar

Ya has aparcado el coche y ahora busca lo del ticket de la hora
Y cuando vuelvas a ponerlo, te habrán puesto una receta de recuerdo

Quiero entrar en tu garito con zapatillas
Que no me miren mal al pasar
Estoy cansado de siempre lo mismo
La misma historia, y quiero cambiar
Me da pena tanta tontería
Quiero un poquito de normalidad
Pero a ver, mírame, y dime tronco, no veo ni un sitio

Quiero entrar en tu garito con zapatillas
Que no me miren mal al pasar
Estoy cansado de siempre lo mismo
La misma historia, quiero cambiar
Me da pena tanta tontería
Quiero un poquito de normalidad
Pero a ver, mírame, y dime tronco, no veo ni un sitio y no puedo aparcar`,
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
    lyrics:`Con la garganta llena de arena
Y con el odio, el orgullo y la pena
Así no puedo sentirme libre como el halcón

Porque el que canta su vida llena
Ven y cantemos el tiempo que queda
Seamos libres como el principio de una canción

No quiero hierro ni sed de venganza
Quien odia muere y quien perdona avanza
Le pido al cielo que pueda reírme de ser como soy

Como una potra salvaje
Que en el oleaje no pierde el sentido
No quiero riendas ni herrajes
Y en los homenajes, me pongo un vestido

Ya tengo seis tatuajes
Debajo del traje por siete motivos
Soy una potra salvaje
Que va de viaje a lo desconocido

Nube que esconde la Luna llena
Viento que al barco le arranca la vela
Si yo me fuera, que pueda irme de corazón

No quiero hierro ni sed de venganza
Quien odia muere y quien perdona avanza
Yo solo quiero curar cicatrices y ser como soy

Como una potra salvaje
Que en el oleaje no pierde el sentido
No quiero riendas ni herrajes
Y en los homenajes me pongo un vestido

Ya tengo seis tatuajes
Debajo del traje por siete motivos
Soy una potra salvaje
Que va de viaje a lo desconocido

No quiero hierro, ni fuego, ni busco la miel
Ya no hay sed de ganar la revancha
Y si algún día la tuve una noche, hacia el viento voló

Como una potra salvaje
Que en el oleaje no pierde el sentido
No quiero riendas ni herrajes
Y en los homenajes me pongo un vestido

Ya tengo seis tatuajes
Debajo del traje por siete motivos
Soy una potra salvaje
Que va de viaje a lo desconocido`,
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
    lyrics:`Hoy me he levantado dando un salto mortal
He echado un par de huevos a mi sartén
Dando volteretas he llegado al baño
Me he duchado y he despilfarrado el gel
Porque hoy, algo me dice
Que voy a pasármelo bien

Sé que tengo algunos enemigos
Pero esta noche no podrán contar conmigo
Porque voy a convertirme en hombre-lobo
Me he jurado a mí mismo que no dormiré solo
Porque hoy, de hoy no pasa
Y voy a pasármelo bien

Voy a cogerme un pedo de los que hacen afición
Me iré arrastrando a casa con la sonrisa puesta
Mañana ya si puedo dormiré la siesta
Pero esta noche no (esta noche no)
Esta noche, algo me dice
Que voy a pasármelo bien

Bueno, vamos a ver que encontramos
En esta agendilla de teléfonos, nunca se sabe
Marta, María del mar, Ana, ¿Elena estará?
No sé
Pero voy a pasármelo bien

Hoy me he levantado dando un salto mortal
Me he quitado el pijama sin usar las manos
Dando volteretas he llegado al baño
Le he dado buenos días a mis padres y hermanos
Porque hoy
Hoy no sé por qué, pero voy a pasármelo bien

Voy a pasármelo bien
Voy a pasármelo, muy bien
Muy bien, muy bien
Y voy a pasármelo bien
Muy bien, muy bien, muy bien

Y voy a pasar, voy a pasármelo bien
Hey, hey, muy bien
Voy a pasármelo bien

Hey, hey
Hey, hey, muy bien
Y voy a pasármelo bien
Hey, hey, muy bien

Muy
Bien`,
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
    lyrics:`Puedo escribir y no disimular
Es la ventaja de irse haciendo viejo
No tengo nada para impresionar
Ni por fuera ni por dentro

La noche en vela va cruzando el mar
Porque los sueños viajan con el viento
Y en mi ventana sopla en el cristal
Mira a ver si estoy despierto

Me perdí en un cruce de palabras
Me anotaron mal la dirección
Ya grabé mi nombre en una bala
Ya probé la carne de cañón
Ya lo tengo todo controlado
Y alguien dijo no, no, no, no, no
Que ahora viene el viento de otro lado
Déjame el timón
Y alguien dijo no, no, no

Lo que me llevará al final
Serán mis pasos, no el camino
No ves que siempre vas detrás
Cuando persigues al destino

Siempre es la mano y no el puñal
Nunca es lo que pudo haber sido
No es porque digas la verdad
Es porque nunca me has mentido

No voy a sentirme mal
Si algo no me sale bien
He aprendido a derrapar
Y a chocar con la pared
Que la vida se nos va
Como el humo de ese tren
Como un beso en un portal
Antes de que cuente diez

Y no volveré a sentirme extraño
Aunque no me llegue a conocer
Y no volveré a quererte tanto
Y no volveré a dejarte de querer
Dejé de volar me hundí en el barro
Y entre tanto barro me encontré
Algo de calor sin tus abrazos
Ahora sé que nunca volveré`,
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
