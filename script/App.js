function Submit(){
  for (x = 0; x < maxTafel; x++){
    if(parseInt(document.getElementById('antwoord'+x).value) === antwoorden[x]){
      goed++;
    }
    else{
      fout++;
    }
  }
  grade = ;
  if (score > 7){
    alert("goedzo!");
  }
  else{
    alert("volgende keer beter");
  }
  document.getElementById('grade').innerHTML = "Je hebt een " + grade + "!";
}
function Alles(){
  /*IMPORTING STUFF*/
  fout = 0;
  goed = 0;
  x = 0;
  antwoorden = new Array();
  maxTafelAllowed = 12;
  maxTafel = 13;
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
