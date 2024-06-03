// 1)
getResistenza = (numero) => {
  if (numero < 10) {
    return 0;
  } 

  const moltiplicaCifre = (num) => {
    return num.toString().split('').reduce((a, b) => a * parseInt(b), 1);
  }
  const nuovoNumero = moltiplicaCifre(numero);

  return 1 + getResistenza(nuovoNumero);
};

// console.log(getResistenza(352));

// 2)
trovaNumeroConTargetResistenza = (targetResistenza) => {
  let numero = 10;

  while(true) {
    if (this.getResistenza(numero) >= targetResistenza) {
      return numero;
    }
    numero++;
   }
};

console.log(trovaNumeroConTargetResistenza(7)); 

// 3)
getMaxFrequente = (array) => {
  let frequenze = {};
  let maxFrequenza = 0;
  let numeriConMaxFrequenza = [];

   for (let num of array) {
    if (frequenze[num] === undefined) {
      frequenze[num] = 0;
    }
    frequenze[num]++;
    if (frequenze[num] > maxFrequenza) {
      maxFrequenza = frequenze[num];
    }
   }

   for (let key in frequenze) {
    if (frequenze[key] === maxFrequenza) {
      numeriConMaxFrequenza.push(Number(key));
    }
  }
  return Math.min(...numeriConMaxFrequenza);
};

console.log(getMaxFrequente([2, 54, 54, 2, 2, 2, 54, 54, 2, 54]));

// 4)
getMaxFrequente = (array, k) => {
  let frequenze = {};
  let piuFrequenti = [];

   for (let num of array) {
    if (frequenze[num] === undefined) {
      frequenze[num] = 0;
    }
    frequenze[num]++;
   }
   let arrOfFrequences = Object.entries(frequenze).sort((a, b) =>  b[1] - a[1] || a[0] - b[0]);
   console.log(arrOfFrequences)


   for (let i = 0;  i < k && i < arrOfFrequences.length; i++) {
    piuFrequenti.push(parseInt(arrOfFrequences[i][0]));
   }
  return piuFrequenti;
};

console.log(getMaxFrequente([1,1,1,2,2,3,3], 3));