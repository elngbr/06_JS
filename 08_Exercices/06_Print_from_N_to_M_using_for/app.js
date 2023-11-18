var firstNumberInput = document.getElementById("first-number");
var secondNumberInput = document.getElementById("second-number");

var outputParagraph = document.getElementById("output");

function printFromNtoM() {
  outputParagraph.innerHTML = "";

  var i = 1;

  while (i <= n) {
    console.log(i);
    outputParagraph.innerHTML = outputParagraph.innerHTML + " " + i;
    i = i + 1;
  }
}

function printFromNToMUsingFor() {
  outputParagraph.innerHTML = "";

  var m = Number(firstNumberInput.value);
  var n = Number(secondNumberInput.value);

  for (var i = m; i <= n; i++) {
    console.log(i);
    outputParagraph.innerHTML = outputParagraph.innerHTML + " " + i;
  }
}
