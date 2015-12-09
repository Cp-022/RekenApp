function Submit(){
  for (x = 0; x < maxTafel; x++){
    if(parseInt(document.getElementById('antwoord'+x).value) === antwoorden[x]){
      score++;
      alert("OMG GOED");
    }
    else{
      score--;
      alert("BADJAS");
    }
  }
  if(x === 13){
    document.write(score);
  }
}
function Alles(){
  /*IMPORTING STUFF*/
  x = 0;
  antwoorden = new Array();
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
      antwoorden[x] = soortTafel * x;

      document.getElementById("vragenlijst").innerHTML +="<span id=vraag"+x+">";
      document.getElementById("vraag"+x).innerHTML = "<p><span>wat is " + soortTafel + " keer " + x + "</span> " + "<input type=text id='antwoord"+x + "'> </input></p>";
    }
  }
  exNumber(soortTafel);
}
