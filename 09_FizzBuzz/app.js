var firstNumberInput = document.getElementById("first-number");
var secondNumberInput = document.getElementById("second-number");
var outputParagraph = document.getElementById("output");

//console.log(firstNumberInput,secondNumberInput);

function fizzBuzz() {
  outputParagraph.innerHTML = "";
  var m = firstNumberInput.value;
  var n = secondNumberInput.value;

  for (var i = m; i <= n; i++) {
    if (i % 15 === 0) {
      outputParagraph.innerHTML = outputParagraph.innerHTML + "Fizz Buzz" + " ";
    } else if (i % 3 === 0) {
      console.log(i);

      outputParagraph.innerHTML = outputParagraph.innerHTML + "Fizz" + " ";
    } else if (i % 5 == 0) {
      outputParagraph.innerHTML = outputParagraph.innerHTML + "Buzz" + " ";
    } else {
      outputParagraph.innerHTML = outputParagraph.innerHTML + i + " ";
    }
  }
}
