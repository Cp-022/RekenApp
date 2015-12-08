function Submit(){
  if (antwoord === answer){
    score = score + 1;
  }
  else{
    /*EMPTY*/
  }
  if (score <5){
    alert("jammer");
  }
}
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
      document.getElementById("vragenlijst").innerHTML +="<span id=vraag"+x+">";
      document.getElementById("vraag"+x).innerHTML = "<p><span>wat is " + soortTafel + " keer " + x + "</span> " + "<input type=text id='antwoord'+"+x + "> </input></p>";
      antwoord = document.getElementById('antwoord'+x);
    }
  }
  exNumber(soortTafel);
}
