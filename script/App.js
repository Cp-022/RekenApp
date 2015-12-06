function Alles(){
soortTafel = parseInt(prompt("welke tafel wil je doen?"));
x = 0;
maxTafel = 13;
score = 1;

function exNumber(soortTafel){
  for (x = 0; x < maxTafel; x++){
    answer = soortTafel * x;
    userInput = parseInt(prompt("wat is " + soortTafel + " keer " + x));
    if (userInput === answer){
      alert("yay");
      score = score + 1;
    }
    else{
      alert("FOUT");
    }
  }
  if ( x = 13){
    document.write("Goedzo je hebt " + score + " goed!");
  }
}
exNumber(soortTafel);
}
