const jamaicaMovie   = "Star Wars VII - El despertar de la fuerza",
  	  pgJamaicaMovie = 13,
  	  nameMiguel	 = 'Miguel',
  	  ageMiguel		 = 17,
  	  nameSanti      = "Santi";
let	  ageSanti		 = 11

const canWatchMovie  = (name, age, isWithAdult = false) => {
	if (age >= pgJamaicaMovie) {
		alert(`${name} puede pasar a ver ${jamaicaMovie}`)
	}
	elseif (isWithAdult) {
		alert(`${name} puede pasar a ver ${jamaicaMovie}. \nAunque su edad es ${age}, se encuentra acompañada/o de un adulto`)
	}
	else {
		alert(`${name} No puede pasar a ver ${jamaicaMovie}. \nTiene ${age} años y necesita tener ${pgJamaicaMovie}`)
	}
}



canWatchMovie(nameMiguel, ageMiguel)
canWatchMovie(nameSanti, ageSanti, true)
ageSanti = 18
canWatchMovie(nameSanti, ageSanti)