// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = [];
  for (let i = 0; i < moviesArray.length; i++) {
    allDirectors.push(moviesArray[i].director);
  }
  return allDirectors;
}

//function getAllDirectors(moviesArray) {
//     let allDirectors = [];
//     for (let i = 0; i < moviesArray.length; i++) {
//       if (allDirectors.indexOf(moviesArray[i]) === -1)
//         allDirectors.push(moviesArray[i].director);
//     }
//     return allDirectors;
//   }
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const soSteven = moviesArray.filter(
    (movies) => movies.director === "Steven Spielberg"
  );
  const filmesSpilberg = soSteven.map((soSteven) => {
    if (soSteven.genre.includes("Drama") === true) {
      return soSteven;
    }
  });

  const onlyDrama = filmesSpilberg.filter(
    (filmesSpilberg) => filmesSpilberg !== undefined
  );
  return onlyDrama.length;
}

console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const semNota = moviesArray.map((moviesArray) =>
    moviesArray.score === undefined ? { ...moviesArray, score: 0 } : moviesArray
  );
  const mediaTotal = semNota.map((moviesArray) => moviesArray.score);
  const result = mediaTotal.reduce(
    (valorAnterior, quemSoma) => valorAnterior + quemSoma,
    0
  );
  let resultado = result / moviesArray.length;
  return resultado.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((moviesArray) =>
    moviesArray.genre.includes("Drama")
  );
  if (dramaMovies.length === 0) {
    return 0;
  }
  const notaDrama = dramaMovies.map((moviesArray) => moviesArray.score);
  let result = notaDrama.reduce(
    (valorAnterior, quemSoma) => valorAnterior + quemSoma,
    0
  );
  let mediaDosDramas = result / dramaMovies.length;
  return mediaDosDramas;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const filmesAno = moviesArray.sort(function (ano1, ano2) {
    return ano1.year - ano2.year;
  });
  const lista = filmesAno.map(
    (filmesAno) =>
      (filmesAno = "Year " + filmesAno.year + " " + filmesAno.title)
  );

  const listaNova = [lista.sort().join(", ")];
  return listaNova;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const fimesOrdemAlf = moviesArray.sort(function (titulo1, titulo2) {
    if (titulo1.title < titulo2.title) {
      return -1;
    }
    if (titulo1 > titulo2) {
      return 1;
    }
    return 0;
  });
  let top20 = fimesOrdemAlf.map((fimesOrdemAlf) => fimesOrdemAlf.title);
  return top20.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
