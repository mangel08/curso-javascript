const Punto = {
	// Funcion Init para construir el objeto
	init: function init(x,y) {
		// Atributos
		this.x = x
		this.y = y
	},

	// Metodos del objeto
	moverEnX: function moverEnX(x) {
		this.x += x
	},
	moverEnY: function moverEnY(y) {
		this.y += y
	},
	distancia: function distancia(p) {
		const x = this.x - p.x
		const y = this.y - p.y

		return Math.sqrt(x * x + y * y)
	}
}

const p1 = Object.create(Punto), p2 = Object.create(Punto);
p1.init(0,4); p2.init(3,0);
console.log(p1.distancia(p2)); console.log(p2.distancia(p1)); 
p1.moverEnX(10)
console.log(p1.distancia(p2))
p2.moverEnY(-4)
console.log(p1.distancia(p2))