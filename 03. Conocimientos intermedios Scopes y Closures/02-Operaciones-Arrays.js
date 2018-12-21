const suma = (...elementos) => elementos.reduce((acum, elemento, index) => acum += elemento, 0)
const dobles = (...elementos) => elementos.map(elemento => elemento * 2)
const pares = (...elementos) => elementos.filter(elemento => elemento % 2 == 0)

suma(4, 8, 12, 8954, 7, 9)
dobles(4, 8, 12, 8954, 7, 9)
pares(4, 8, 12, 8954, 7, 9)