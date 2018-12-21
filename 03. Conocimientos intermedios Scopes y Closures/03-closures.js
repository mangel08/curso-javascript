function saludarFamilia(apellido) {
	return function saludarMiembroDeFamilia(nombre) {
		console.log(`Hola ${nombre} ${apellido}`)
	}


const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")
const saludarPalma = saludarFamilia("Palma")

saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Laura")
saludarGomez("Mónica")

saludarPerez("Dario")
saludarPerez("Martin")
saludarPerez("Julieta")

saludarPalma("Miguelangel")

const prefijoRe = makePrefixer("re")

let generaPrefijo = prefijo => valor => prefijo + valor;
const re = generaPrefijo("re");
re("malo");