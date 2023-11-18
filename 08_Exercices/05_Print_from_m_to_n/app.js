var firstNumberInput = document.getElementById("first-number");
var secondNumberInput = document.getElementById("second-number");


var outputParagraph = document.getElementById("output");

function printFromNToM() {
  outputParagraph.innerHTML = "";
  var start= Number(firstNumberInput.value);
  var end= Number(secondNumberInput.value);

  //swap 2 elements

  if(end<start)
  {
    var tmp=start;
    start=end;
    end=tmp;
  }

  var i=start;

   while (i<end) {
    console.log(i);
    outputParagraph.innerHTML = outputParagraph.innerHTML + " " + i;
    i = i + 1;
  }
}
