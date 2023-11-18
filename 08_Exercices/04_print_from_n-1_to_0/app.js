var numberInput = document.getElementById("number");
var outputParagraph = document.getElementById("output");

function printFrom1ToN() {
  outputParagraph.innerHTML = "";
  var n = Number(numberInput.value);
  var i = n - 1;

  while (i >= 0) {
    console.log(i);
    outputParagraph.innerHTML = outputParagraph.innerHTML + " " + i;
    i = i - 1;
  }
}
