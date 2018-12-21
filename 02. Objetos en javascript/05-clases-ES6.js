// Clase Constructor con prototipos
class Punto{
	// Función inicializadora de la Clase Punto
	constructor(x,y) {
		// ATRIBUTOS
		this.x = x
		this.y = y
	}
	/*M E T O D O S   D E  L A   C L A S E*/
 	moverEnX(x){
		this.x += x
	}
	moverEnY(y){
		this.y += y
	}
	distancia(p){
		const x = this.x - p.x
		const y = this.y - p.y
		return Math.round(Math.sqrt(x * x + y * y))
	}
}

const p1 = new Punto(0,4)
const p2 = new Punto(3,0)
console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)
console.log(p1.distancia(p2))
p2.moverEnY(-4)
console.log(p1.distancia(p2))