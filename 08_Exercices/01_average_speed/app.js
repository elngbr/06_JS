var firstNumberInput = document.getElementById("first-number");


var secondNumberInput = document.getElementById("second-number");
var outputParagraph = document.getElementById("output");


function printFrom1ToN() {
  outputParagraph.innerHTML = "";
  //outputParagraph.innerHTML = "";
  
  var a = Number(firstNumberInput.value);
  var b = Number(secondNumberInput.value);

  var i = a;

  while (i <=b) {
    console.log(i);
    outputParagraph.innerHTML = outputParagraph.innerHTML + " " + i;
    i = i + 1;
  }
}
