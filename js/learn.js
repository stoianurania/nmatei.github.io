console.info(1);

function sayWelcome() {
  console.info("Salut" + prenume + ", bine ai venitla noi!");
}

var nume = "Stoian";
var prenume = "Lavinia";
var owner = "Stoian's";
var msg1 = 'ai zis "Lavy"?';
var msg2 = 'Nu,am zis "Lavinia"';
var template = 'Text cu ghilimele " sau simple ';

console.debug("auzi...?dar cum te cheama?-" + prenume);
sayWelcome();

var skills = ["html", "css", "js"];

prenume = "Lavy";

console.info("toate variabilele au fost initializate");
console.log(nume);
console.debug("cum te cheama?-" + prenume);

sayWelcome();

//schimb valutar

var cursEUR = 4.5;
var myEUR = 20;
var myRON = 0;
var friendEUR = 100;
var friendRON = 0;
//operatori * / + -

myRON = myEUR * cursEUR;
console.info("eu am" + myRON + "RON");

friendRON = friendEUR * cursEUR - (friendEUR * cursEUR * 1) / 100;
var ATMFunds = 5000;
var funds = 5000;

function getExtractFee(ammount) {
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    console.warn("comision minim aplicat");
    comision = 2.5;
  }
  return comision;
}
 function checkExtractPermisison() {
   return:true;
 }

function extractFromATM(ammount) {
  console.info("==== ==== ==== ==== ====");
  console.info("suma extrasa este: " + ammount);
  var comision = getExtractFee(ammount);

  var totalExtract = ammount + comision;

  if (totalExtract > funds) {
    console.error("insufficient funds");
    return;
  }

  if (ATMFunds < totalExtract) {
    console.error("ATM insufficient funds");
    return;
  }

  funds = funds - totalExtract;
  ATMFunds - ammount;

  console.info("comision aplicat: " + comision);
  console.info("sold curent:" + funds);
  console.info("==== ==== ==== ==== ====");
}

extractFromATM(1005); // nu e multiplu de 10
extractFromATM(100000); //nu am solduri insuficiente
extractFromATM(3000);
extractFromATM(3000);
extractFromATM(3000);
var x = 4 + 5;

//var motto, favorite, links;

// motto=document.getElementById("motto");

// console.log(motto);

// favorite=document.getElementsByClassName("favorite");

// console.log(favorite);

//links=document.getElementsByTagName("a");
// console.log(links);
// links[0] .onclick=function( {
//  console.info("ai facut click pe mine...");
// favorite[0].style.color="red";
//  favorite[1].style.display="none";
//  motto.innerHTML=
//   "Salut <strong>Lavinia</strong>,bine ai venit la mine pe site!";

//  };
