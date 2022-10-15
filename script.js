
//tarkistetaan joka vuorolla onko voittoa tullut. Tehdään funktio sitä varten.
function voitonTarkistus() {

  //Haetaan ensiksi ruutujen arvot HTML:stä muuttujiin.
  var ruutu1 = document.getElementById('ruutu1').value;
  var ruutu2 = document.getElementById('ruutu2').value;
  var ruutu3 = document.getElementById('ruutu3').value;
  var ruutu4 = document.getElementById('ruutu4').value;
  var ruutu5 = document.getElementById('ruutu5').value;
  var ruutu6 = document.getElementById('ruutu6').value;
  var ruutu7 = document.getElementById('ruutu7').value;
  var ruutu8 = document.getElementById('ruutu8').value;
  var ruutu9 = document.getElementById('ruutu9').value;

  // Käydään kaikki 8 voittomahdollisuutta läpi if lauseilla

  if ((ruutu1 == "x" || ruutu1 == "X") && (ruutu2 == "x" || ruutu2 == "X") && (ruutu3 == "x" || ruutu3 == "X"))  {
    alert("X voitti!")
    document.getElementById("ruutu4").disabled = true;
    document.getElementById("ruutu5").disabled = true;
    document.getElementById("ruutu6").disabled = true;
    document.getElementById("ruutu7").disabled = true;
    document.getElementById("ruutu8").disabled = true;
    document.getElementById("ruutu9").disabled = true;
  }
  else if ((ruutu4 == "x" || ruutu4 == "X") && (ruutu5 == "x" || ruutu5 == "X") && (ruutu6 == "x" || ruutu6 == "X"))  {
    alert("X voitti!")
    document.getElementById("ruutu1").disabled = true;
    document.getElementById("ruutu2").disabled = true;
    document.getElementById("ruutu3").disabled = true;
    document.getElementById("ruutu7").disabled = true;
    document.getElementById("ruutu8").disabled = true;
    document.getElementById("ruutu9").disabled = true;
  }
}



//Vuoron tarkistus muuttuja. Käytetään sen arvoja hyväksi vuoron vaihdoissa
var vuoronTarkistus = 1;

// Jokaiselle ruudulle oma funktio joka tarkistaa vuoron ja syöttää "x" tai "0" arvon vuoron mukaan

function ruutu1Klikki() {
  if (vuoronTarkistus == 1) {
    document.getElementById('ruutu1').value = "X";
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu1').value = "0";
    vuoronTarkistus = 1;
  }
}

function ruutu2Klikki() {
  if (vuoronTarkistus == 1) {
    document.getElementById('ruutu2').value = "X";
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu2').value = "0";
    vuoronTarkistus = 1;
  }
}

function ruutu3Klikki() {
  if (vuoronTarkistus == 1) {
    document.getElementById('ruutu3').value = "X";
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu3').value = "0";
    vuoronTarkistus = 1;
  }
}

function ruutu4Klikki() {
  if (vuoronTarkistus == 1) {
    document.getElementById('ruutu4').value = "X";
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu4').value = "0";
    vuoronTarkistus = 1;
  }
}

function ruutu5Klikki() {
  if (vuoronTarkistus == 1) {
    document.getElementById('ruutu5').value = "X";
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu5').value = "0";
    vuoronTarkistus = 1;
  }
}

function ruutu6Klikki() {
  if (vuoronTarkistus == 1) {
    document.getElementById('ruutu6').value = "X";
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu6').value = "0";
    vuoronTarkistus = 1;
  }
}

function ruutu7Klikki() {
  if (vuoronTarkistus == 1) {
    document.getElementById('ruutu7').value = "X";
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu7').value = "0";
    vuoronTarkistus = 1;
  }
}

function ruutu8Klikki() {
  if (vuoronTarkistus == 1) {
    document.getElementById('ruutu8').value = "X";
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu8').value = "0";
    vuoronTarkistus = 1;
  }
}

function ruutu9Klikki() {
  if (vuoronTarkistus == 1) {
    document.getElementById('ruutu9').value = "X";
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu9').value = "0";
    vuoronTarkistus = 1;
  }
}
