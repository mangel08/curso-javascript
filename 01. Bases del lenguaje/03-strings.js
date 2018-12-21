function platzom(str){
	let translation = str

	// Si la palabra termina en "ar", se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')){
		//empieza desde el caracter cero y corta 2 caracteres antes de terminar la cadena
		translation = str.slice(0, -2)
	}

	// Si la palabra inicia con z, se le añe "pe" al final
	if(str.toLowerCase().startsWith('z')){
		translation += 'pe'
	}
	// Si la palabra traducida tiene 10 o mas letras,
	// se debe partir a la mitad y unir con un guión del medio
	const length = translation.length;
	if(translation.length >= 10){
		const firstHalf = translation.slice(0, Math.round(length)/2)
		const secondHalf = translation.slice(Math.round(length)/2)
		translation = `${firstHalf}-${secondHalf}`
	}
	
	// Si la palabra original es un palíndromo,
	// ninguna regla anterior cuenta y se devuelve
	// la misma palabra intercalando mayúsculas y minusculas

	// funcion para poner al reverso un string
	// reverse() metodo de arreglos para poner un arreglo al reves
	// join() para unir un arreglo como string
	const reverse = (str) => str.split('').reverse().join('')

	const minMay = (str) => {
		const length = str.length
		let translation = ''
		let capitalize = true

		for (let i = 0; i < length; i++){
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}

		return translation
	}

	if(str == reverse(str)){
		return minMay(str)
	}

	return translation
}

console.log(platzom("Programar")) //program
console.log(platzom("Zorro")) //Zorrope
console.log(platzom("Zorpar")) //Zarppe
console.log(platzom("abecedario")) //abece-dario
console.log(platzom("sometemos")) //SoMeTeMoS