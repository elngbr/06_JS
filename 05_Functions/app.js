function isPositive(n) {
  if (n > 0) return true;
  else return false;
}

function isNegative(n) {
  if (n < 0) return true;
  else return false;
}

function isZero(n) {
  if (n === 0)
    return true; ////////////////VEZI CA AICI E CU TREI DE ZEROOOOOOOO!!!
  else return false;
}

function checkNumber(n) {
  if (isPositive(n) === true) {
    console.log("S-a introdus o val pozitiva");
  } else if (isNegative(n)) {
    console.log("S-a intodus o val negativa");
  } else {
    console.log("Este un numar null");
  }
}
console.log(isPositive(3.5));
console.log(isNegative(-12));
console.log(isZero(0));

// 8. Se citesc doua numere. Sa de afiseze rezultatul impartirii lor. In cazul in care al doilea
// numar este nul, sa se afiseze un mesaj de eroare.
// Exemple:
// se citesc 4 si 2, se afiseaza “Rezultatul impartirii este 2”
// se citesc -6 si 2, se afiseaza “Rezultatul impartirii este -3”
// se citesc 3 si 0, se afiseaza “Operate imposibila; impartitorul este nul”

var a = 9;
var b = 5;


/////VEZI !==          si        !=

if (b !== 0) {
    console.log("The remainder of the divison is ", a % b);
} else {
    console.log("Impossible operation; the divison is a NULL value");
}
