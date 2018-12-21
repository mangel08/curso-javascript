const miguel = {
	nombre: 'Miguel',
	apellido: 'Palma'
}

function saludar(veces, tiempo) {
	for (let i = 0; i < veces; i++){
		console.log(`Hola ${this.nombre} ${this.apellido} a las ${tiempo}`)
	}
}

//Hace la misma funcionalidad los 2 reciben un contexto en este caso el objeto "miguel"
// La unica diferencia es al momento de pasar los parametros
// en Call se pasan los paramateros separados por coma
// en Applu se pasan los parametros dentro de un arreglo
saludar.call(miguel, 3, new Date())
saludar.apply(miguel, [3, new Date()])
