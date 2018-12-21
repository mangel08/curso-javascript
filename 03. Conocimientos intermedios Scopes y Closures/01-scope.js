// si defino esta variable aqui es una varia global
var nombre = "Miguel"

// Funcion que usa la variable global
function saludar(){
	console.log(`Hola ${nombre}`)
}

// Funcion que usa la variable local
function saludar(nombre){
	console.log(`Hola ${nombre}`)
}

// con scope global
saludar()

// con scope local
saludar("Eric")