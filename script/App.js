function validateForm() {
    soortTafel = document.forms["myForm"]["fname"].value;
    soortTafelNummer = parseInt(soortTafel);
    switch (soortTafelNummer){
      case 1:
        tafelOefenen = 1;
        document.write("11n");
        break;
      case 2:
        tafelOefenen = 2;
        break;
      case 3:
        tafelOefenen = 3;
        break;
      default:
      document.write("WOLO");
    }
}
