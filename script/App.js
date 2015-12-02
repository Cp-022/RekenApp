soortTafel = parseInt(prompt("welke tafel wil je doen?"));
x = 0;
maxTafel = 13;
function exNumber(soortTafel){
  for (x = 0; x < maxTafel; x++){
    answer = soortTafel * x;
    userInput = parseInt(prompt("wat is" + soortTafel + "keer" + x));
    if (userInput === answer){
      alert("yay");
    }
    else{
      alert("FOUT");
    }
  }
}
exNumber(soortTafel);
