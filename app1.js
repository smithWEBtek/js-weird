
function waitThreeSeconds(){
  var ms = 3000 + new Date().getTime()
  while (new Date() < ms){}
  console.log('finished function')
}

function clickHandler(){ 
  console.log('try again to find the magic button!')
}
 
function clickHandler1(){
  console.log('YES! you found the magic button!!!!')
  return (document.getElementById('Button1'));
}
 
document.addEventListener('click', clickHandler)
button1.addEventListener('click', clickHandler1)

waitThreeSeconds()
console.log('finished execution')

let tunes = [
"Amor De Loca Juventud",
"Barranquillero",
"Buena-Vista-Social-Club",
"Candela",
"Capullito De Aleli",
"Castellano Que Bueno Baila Usted",
"Chan Chan - lead sheet",
"Chucho - piano & bass",
"De Camino A La Vereda",
"Dos Gardenias",
"El Carretero",
"El Cuarto de Tula EL-OK Keys",
"La Bayamesa",
"El Manisero",
"La Esencia Del Guaguanco -LatinRealBk",
"La Rebelion",
"LLORARAS",
"Moliendo Café - cumbia",
"Murmullo",
"My Little  Suede Shoes RB2",
"Orgullecida",
"Oye Como Va",
"Perdido - salsa",
"Pueblo Nuevo",
"Social Club Buena Vista",
"Son De La Loma_LRB",
"Sway",
"Tu Amor Me Hace Bien",
"Viente Anos",
"Y Tu Que Has Hecho?"
]

function sortTunes(){
  tunes.sort()
}