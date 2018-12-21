const nombre = 'Miguel'
const dias = [
	'lunes',
	'martes',
	'miércoles',
	'jueves',
	'viernes',
	'sábado',
	'domingo'
]

const correr = () => {
	const min = 5
	const max = 15
	return Math.floor(Math.random() * (max - min)) + min
}

let totalKms = 0
let size = dias.length

for (let i = 0; i < size; i++){
	const kms = correr()
	totalKms += kms
	console.log(`El día ${dias[i]} ${nombre} corrió ${kms}kms`)
}

const promedioKms = Math.round(totalKms/size)
console.log(`En promedio, ${nombre} corrió ${promedioKms}kms`)