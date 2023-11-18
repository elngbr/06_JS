///arthmetic operators

console.log(2+3);
console.log(2-1);
console.log(3*3);
console.log(2+3);
// operatorul modulo
console.log(4%3);
///operatorul div care imi da solutia de tip float (REAL)
console.log(4/3);

var a=10;
var isEven=a%2 ===0; ///mistooooooooooooooooooo
console.log(isEven);

////     " === " operator de comparare a valorii CU TOT CU TIP

////RELATIONAL OPERATORS

///notice that they ALWAYS have a boolean response

console.log(2>3);
console.log(5<6);
console.log(3<=4);
console.log(5>=4);


////CAMPARISON OPERATORS FOR EQUALITY

console.log(2== '2'); ///this one compares ONLY the value
console.log(2=== '2'); ///this one compares the TYPE, therefore in this case is false



///LOGICAL OPERATOR. FOR COMPARISON CHAINS

console.log(true || false);
console.log(true || true);
console.log(true ||true);
console.log(false || false);

console.log(true && false);
console.log(true && true);
console.log(true && true);
console.log(false && false);

console.log(!true);
console.log(!false);

///typeof

var a=10;
var s="ana are mere";
var b=true;
console.log(typeof a);  //number
console.log(typeof b);//boolean
console.log(typeof s);//string



///TERNARY OPERATOR
var age=20;


var canDrive=age >18 ?true:false;
var canDriveMessage=canDrive ? "poate conduce":"ia-ti permis";

