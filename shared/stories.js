export const levels = [
 {id:'semilla',name:'Semilla',age:'6–7 años',icon:'🌱',description:'Mis primeras aventuras'},
 {id:'brote',name:'Brote',age:'7–8 años',icon:'🌿',description:'Descubro nuevas ideas'},
 {id:'arbol',name:'Árbol',age:'8–9 años',icon:'🌳',description:'Leo entre líneas'},
]
const q=(text,options,answer,hint,explanation)=>({text,options,answer,hint,explanation})
export const stories = [
{id:'luna',level:'semilla',title:'Luna y la semilla dormilona',emoji:'🌻',theme:'Paciencia y naturaleza',color:'sun',text:[
'Luna encontró una semilla en el jardín de su abuela. La puso en una maceta con tierra suave y le dio un poco de agua.',
'Cada mañana, Luna miraba la maceta. —¡Despierta, semillita! —decía. Pero la tierra seguía igual.',
'Su abuela sonrió. —Las plantas necesitan agua, sol y tiempo. No podemos apurarlas.',
'Luna dejó la maceta junto a la ventana y esperó. Una mañana apareció una hojita verde. Luna dio un salto de alegría. ¡Su semilla ya estaba despierta!'],questions:[
q('¿Dónde puso Luna la semilla?',['En una maceta','En una caja','En su cama'],0,'Busca en el primer párrafo qué tenía tierra suave.','Luna puso la semilla en una maceta con tierra suave.'),
q('¿Qué necesitaba además de agua y sol?',['Ruido','Tiempo','Una manta'],1,'Recuerda el consejo de la abuela sobre no apurar las plantas.','Las plantas también necesitan tiempo para crecer.'),
q('¿Qué aprendió Luna?',['A esperar con paciencia','A regar todo el día','A esconder las plantas'],0,'Piensa en lo que hizo antes de ver la hojita.','Esperó y descubrió que crecer toma tiempo.')]},
{id:'tito',level:'semilla',title:'El paraguas de Tito',emoji:'☂️',theme:'Amistad y generosidad',color:'rain',text:[
'Tito salió con su paraguas amarillo. Empezó a llover. Debajo de un árbol vio a una gata con las patas mojadas.',
'—Ven conmigo —dijo Tito. Más adelante encontraron a un perro que temblaba de frío. Tito también lo invitó.',
'Los tres llegaron a casa. Tito tenía un hombro mojado, pero sonreía: había hecho dos amigos.'],questions:[
q('¿De qué color era el paraguas?',['Rojo','Amarillo','Verde'],1,'El color está al principio.','El paraguas era amarillo.'),
q('¿A quién encontró primero?',['Al perro','A la gata','A un pájaro'],1,'Busca quién estaba debajo del árbol.','Primero encontró a la gata.'),
q('¿Por qué sonreía Tito?',['No llovía','Había hecho dos amigos','Perdió el paraguas'],1,'Lee cómo se sentía al llegar a casa.','Compartir le permitió hacer dos amigos.')]},
{id:'pan',level:'semilla',title:'Un pan para compartir',emoji:'🥖',theme:'Compartir en familia',color:'peach',text:[
'Ana y su papá hicieron un pan redondo. Ana mezcló la harina y papá encendió el horno. La cocina olía delicioso.',
'Ana quería comer el pan entero. Entonces llegó su hermano de la escuela. Él tenía hambre.',
'Ana cortó cuatro partes: una para ella, otra para su hermano, otra para papá y otra para mamá. El pan se acabó, pero la mesa se llenó de sonrisas.'],questions:[
q('¿Quién mezcló la harina?',['Papá','Ana','Mamá'],1,'Busca qué hizo Ana al empezar.','Ana mezcló la harina.'),
q('¿En cuántas partes cortó el pan?',['Dos','Tres','Cuatro'],2,'Cuenta las personas para las que guardó pan.','Cortó una parte para cada una de las cuatro personas.'),
q('¿Por qué decidió compartir?',['Su hermano tenía hambre','El pan se quemó','No le gustaba el pan'],0,'Piensa en lo que pasó al llegar su hermano.','Vio que su hermano tenía hambre.')]},
{id:'puente',level:'brote',title:'El puente de las hormigas',emoji:'🐜',theme:'Trabajo en equipo',color:'leaf',text:[
'Las hormigas llevaban comida a su casa. La lluvia había formado un charco en el camino. Para una persona era pequeño; para ellas, parecía un lago.',
'Brisa intentó cruzar sobre una hoja. La hoja dio vueltas y regresó a la orilla. Otra hormiga propuso rodear el charco, pero el camino era demasiado largo.',
'Brisa vio una ramita. Pidió ayuda y entre todas la empujaron sobre el agua. La rama unía las dos orillas.',
'Cruzaron una por una con la comida. Brisa descubrió que una buena idea crece cuando otros ayudan a realizarla.'],questions:[
q('¿Qué les impedía pasar?',['Un charco','Una puerta','Una montaña'],0,'Busca qué dejó la lluvia.','La lluvia formó un charco.'),
q('¿Por qué no sirvió la hoja?',['Se rompió','Daba vueltas y regresaba','Era muy pesada'],1,'Relee el primer intento de Brisa.','La hoja regresó a la orilla.'),
q('¿Qué hizo posible cruzar?',['Esperar a la noche','Que Brisa empujara sola','Colaborar para mover la rama'],2,'Fíjate en quiénes construyeron el puente.','Todas ayudaron a colocar la rama.')]},
{id:'nube',level:'brote',title:'La nube que cambió de planes',emoji:'☁️',theme:'Cambios y empatía',color:'rain',text:[
'Nina preparó una cometa para el sábado. Al despertar, vio una nube gris. Comenzó a llover y cerró la ventana con enfado.',
'Su abuelo le señaló el huerto. Las hojas, caídas por el calor, estaban levantándose. Un gorrión bebía gotas de una maceta.',
'Su cometa tendría que esperar, pero las plantas y el pájaro necesitaban la lluvia. Nina buscó papel y dibujó el huerto.',
'Por la tarde salió el sol. Volaría su cometa al día siguiente. En su dibujo, la nube gris tenía una gran sonrisa.'],questions:[
q('¿Qué quería hacer Nina?',['Volar su cometa','Ir al cine','Comprar papel'],0,'Busca su plan para el sábado.','Quería estrenar su cometa.'),
q('¿Por qué se recuperaron las plantas?',['Por un dibujo','Por el agua de lluvia','Por el viento'],1,'Relaciona el calor con lo que necesitaban las hojas.','La lluvia les dio agua.'),
q('¿Qué entendió Nina?',['Nunca saldría el sol','Ya no quería su cometa','La lluvia ayudaba a otros'],2,'Compara su enfado con el dibujo final.','Entendió que la lluvia ayudaba a las plantas y al pájaro.')]},
{id:'libro',level:'brote',title:'El misterio del libro viajero',emoji:'📚',theme:'Curiosidad y cuidado',color:'lavender',text:[
'Leo encontró una tarjeta dentro de un libro de la biblioteca. Decía: «Gracias por cuidarme. Ahora puedo viajar a otra casa».',
'La bibliotecaria explicó que una niña la había escrito para el próximo lector. Los libros viajaban de casa en casa cuando las personas los tomaban prestados.',
'Leo leyó con cuidado y usó un separador para no doblar las páginas. Al terminar escribió: «En estas páginas encontrarás un bosque. ¡Buen viaje!».',
'El martes devolvió el libro. Una niña lo eligió y encontró su tarjeta. Leo sonrió sin decir nada.'],questions:[
q('¿Quién escribió la primera tarjeta?',['Leo','Una niña','La bibliotecaria'],1,'Recuerda la explicación de la bibliotecaria.','Una niña la escribió para el siguiente lector.'),
q('¿Qué significa que el libro viajaba?',['Pasaba entre casas y lectores','Tenía alas','Iba en avión'],0,'Piensa en el préstamo de una biblioteca.','Los lectores lo llevaban a casa y lo devolvían.'),
q('¿Para qué usó Leo un separador?',['Para esconder el libro','Para tapar el título','Para no doblar las páginas'],2,'Busca cómo cuidó el libro.','Marcó la lectura sin dañar las páginas.')]},
{id:'faro',level:'arbol',title:'Una luz en la colina',emoji:'🏮',theme:'Iniciativa y comunidad',color:'peach',text:[
'El sendero hacia la plaza cruzaba una colina. Cada noche, don Elías encendía una lámpara en su ventana para orientar a quienes regresaban tarde. Nadie se lo había pedido; simplemente lo hacía.',
'Una noche la ventana quedó oscura. Vera supo que don Elías estaba visitando a su hermana. Pensó que alguien más se ocuparía del camino, pero al anochecer siguiente todo seguía igual.',
'Vera colocó una linterna en su ventana. Su casa estaba más abajo y la luz apenas alcanzaba la curva. En lugar de rendirse, habló con los vecinos. Cada familia puso una luz en una ventana que miraba al sendero.',
'Cuando don Elías volvió, encontró una cadena de pequeñas luces hasta la plaza. Quiso agradecer a Vera, pero ella señaló las casas. —La colina nos queda grande a uno solo —dijo—. Entre todos sí podemos iluminarla.'],questions:[
q('¿Para qué encendía su lámpara don Elías?',['Para venderla','Para orientar a los caminantes','Para despertar a Vera'],1,'Busca el propósito de la luz.','Ayudaba a orientarse en el sendero.'),
q('¿Por qué pidió ayuda Vera?',['Su luz no alcanzaba suficiente','Le ordenaron hacerlo','Quería apagar las luces'],0,'Fíjate en dónde estaba su casa.','Su linterna apenas iluminaba la curva.'),
q('¿Qué sugiere la última frase?',['Solo sirven lámparas grandes','Hay que esperar a los demás','Colaborar resuelve problemas grandes'],2,'Compara una linterna con la cadena de luces.','Juntos iluminaron lo que una persona sola no podía.')]},
{id:'jardin',level:'arbol',title:'El jardín de las preguntas',emoji:'🦋',theme:'Observar antes de decidir',color:'leaf',text:[
'La clase de Inés cuidaba un jardín. Encontraron varias hojas mordidas. Tomás aseguró que los caracoles eran los culpables y propuso sacarlos a todos. Inés pidió esperar: nadie había visto quién mordía las hojas.',
'Durante tres recreos observaron las plantas y anotaron sus hallazgos. Los caracoles comían hojas caídas junto al muro. Bajo las hojas mordidas descubrieron pequeñas orugas verdes.',
'La profesora explicó que algunas orugas se convierten en mariposas. La clase reservó dos plantas para ellas y protegió las demás con una malla. Semanas después aparecieron las primeras mariposas.',
'Tomás dibujó una y escribió: «Antes de decidir, hay que mirar mejor». Inés añadió: «¿Qué otras cosas nos faltará descubrir?».'],questions:[
q('¿Qué propuso Inés?',['Quitar todas las plantas','Observar antes de decidir','Traer más caracoles'],1,'Compara su idea con la seguridad de Tomás.','Pidió esperar y reunir información.'),
q('¿Qué hallazgo cambió la idea inicial?',['Un dibujo','La llegada del lunes','Las orugas bajo las hojas mordidas'],2,'Busca evidencia junto a las hojas dañadas.','Encontraron orugas allí; los caracoles comían hojas caídas.'),
q('¿Qué logró reservar dos plantas?',['Cuidar el jardín y las orugas','Castigar a Tomás','Abandonar el jardín'],0,'Piensa en las dos necesidades que atendieron.','Dejaron alimento para las orugas y protegieron otras plantas.')]},
{id:'mapa',level:'arbol',title:'El mapa que no estaba terminado',emoji:'🗺️',theme:'Inclusión y creatividad',color:'lavender',text:[
'Mateo dibujó un mapa de su barrio para la feria escolar. Marcó la cancha, la panadería y el parque. Creía haberlo terminado hasta que su amiga Sara lo miró con atención.',
'Sara se desplazaba en silla de ruedas. Preguntó por dónde podía entrar al parque, pues la entrada dibujada tenía escalones. Mateo nunca se había fijado: siempre los subía de un salto.',
'Recorrieron el barrio con un adulto. Encontraron una entrada con rampa, una vereda rota y un cruce con semáforo. Mateo añadió símbolos y una leyenda para explicarlos.',
'En la feria, muchas personas consultaron los nuevos detalles. Mateo dejó lápices junto al cartel para que los vecinos añadieran lo que conocían. El mapa ya no parecía terminado, pero ahora era mucho más útil.'],questions:[
q('¿Qué había pasado por alto Mateo?',['El color del parque','El nombre de su escuela','Los escalones de la entrada'],2,'Piensa en la pregunta de Sara.','No había considerado los escalones como un obstáculo.'),
q('¿Por qué mejoró el mapa?',['Incluyó distintas necesidades','Era más pequeño','Tenía menos caminos'],0,'Relaciona rampas y cruces con sus usuarios.','Ayudaba a elegir caminos accesibles.'),
q('¿Por qué dejó lápices?',['Para borrar todo','Para que los vecinos aportaran información','Ya no quería dibujar'],1,'Busca qué podían añadir los visitantes.','Los vecinos podían mejorar el mapa con lo que conocían.') ]},
]
