class Persona {
	constructor(nombre, amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}

	// 1era forma para usar el this referenciado en otro contexto declarando una variable
	// listarAmigos() {
	// 	const _this = this
	// 	this.amigos.forEach(function (amigo) {
	// 		console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
	// 	})
	// }

	// 2da forma con metodo bind() para referenciar al this global
	// listarAmigos() {
	// 	const _this = this
	// 	this.amigos.forEach(function (amigo) {
	// 		console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
	// 	}.bind(this))
	// }

	//3era forma con arrow fuction
	// en este caso javascript con las arrow fuctions el this toma el valor fuera del contexto en donde se declara
	listarAmigos() {
		this.amigos.forEach((amigo) => {
			console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
		})
	}

}

const miguel = new Persona("Miguel", ["Carlos", "Roger", "Breiddy", "Clissman", "Pedro" ])