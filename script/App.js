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
      case 4:
        tafelOefenen = 4;
        break;
      case 5:
        tafelOefenen = 5;
        break;
      case 6:
        tafelOefenen = 6;
        break;
      case 7:
        tafelOefenen = 7;
        break;
      case 8:
        tafelOefenen = 8;
        break;
      case 9:
        tafelOefenen = 9;
        break;
      case 10:
        tafelOefenen = 10;
        break;
      case 11:
        tafelOefenen = 11;
        break;
      case 12:
        tafelOefenen = 12;
        break;
      case 13:
        tafelOefenen = 13;
        break;
      default:
      document.write("WOLO");
    }
}
