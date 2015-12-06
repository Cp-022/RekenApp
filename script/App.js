function Alles(){
  /*IMPORTING STUFF*/
  x = 0;
  maxTafelAllowed = 12;
  maxTafel = 13;
  score = 1;
  /*DONE IMPORTING */

  soortTafel = parseInt(prompt("welke tafel wil je doen?"));
  if (soortTafel > maxTafelAllowed){
    alert("Geef een tafel van 0 tot 12 op");
    Alles();
  }
  else if(isNaN(soortTafel)){
    alert("Geef een tafel van 0 tot 12 op");
    Alles();
  }

  function exNumber(soortTafel){
    for (x = 0; x < maxTafel; x++){
      answer = soortTafel * x;
      userInput = parseInt(prompt("wat is " + soortTafel + " keer " + x));
      if (userInput === answer){
        alert("Goedzo");
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
