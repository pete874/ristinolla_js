

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




  // Käydään kaikki 8 voittomahdollisuutta läpi if lauseilla X pelaajan kohdalla.

  if (ruutu1 == "X" && ruutu2 == "X" && ruutu3 == "X")  {
    alert("X voitti!")
    document.getElementById("ruutu4").disabled = true;
    document.getElementById("ruutu5").disabled = true;
    document.getElementById("ruutu6").disabled = true;
    document.getElementById("ruutu7").disabled = true;
    document.getElementById("ruutu8").disabled = true;
    document.getElementById("ruutu9").disabled = true;
  }
  else if (ruutu4 == "X" && ruutu5 == "X" && ruutu6 == "X")  {
    alert("X voitti!")
    document.getElementById("ruutu1").disabled = true;
    document.getElementById("ruutu2").disabled = true;
    document.getElementById("ruutu3").disabled = true;
    document.getElementById("ruutu7").disabled = true;
    document.getElementById("ruutu8").disabled = true;
    document.getElementById("ruutu9").disabled = true;
  }
  else if (ruutu7 == "X" && ruutu8 == "X" && ruutu9 == "X")  {
    alert("X voitti!")
    document.getElementById("ruutu1").disabled = true;
    document.getElementById("ruutu2").disabled = true;
    document.getElementById("ruutu3").disabled = true;
    document.getElementById("ruutu4").disabled = true;
    document.getElementById("ruutu5").disabled = true;
    document.getElementById("ruutu6").disabled = true;
  }
  else if (ruutu1 == "X" && ruutu4 == "X" && ruutu7 == "X")  {
    alert("X voitti!")
    document.getElementById("ruutu2").disabled = true;
    document.getElementById("ruutu3").disabled = true;
    document.getElementById("ruutu5").disabled = true;
    document.getElementById("ruutu6").disabled = true;
    document.getElementById("ruutu8").disabled = true;
    document.getElementById("ruutu9").disabled = true;
  }
  else if (ruutu2 == "X" && ruutu5 == "X" && ruutu8 == "X")  {
    alert("X voitti!")
    document.getElementById("ruutu1").disabled = true;
    document.getElementById("ruutu3").disabled = true;
    document.getElementById("ruutu4").disabled = true;
    document.getElementById("ruutu6").disabled = true;
    document.getElementById("ruutu7").disabled = true;
    document.getElementById("ruutu9").disabled = true;
  }
  else if (ruutu3 == "X" && ruutu6 == "X" && ruutu9 == "X")  {
    alert("X voitti!")
    document.getElementById("ruutu1").disabled = true;
    document.getElementById("ruutu2").disabled = true;
    document.getElementById("ruutu4").disabled = true;
    document.getElementById("ruutu5").disabled = true;
    document.getElementById("ruutu7").disabled = true;
    document.getElementById("ruutu8").disabled = true;
  }
  else if (ruutu1 == "X" && ruutu5 == "X" && ruutu9 == "X")  {
    alert("X voitti!")
    document.getElementById("ruutu2").disabled = true;
    document.getElementById("ruutu3").disabled = true;
    document.getElementById("ruutu4").disabled = true;
    document.getElementById("ruutu6").disabled = true;
    document.getElementById("ruutu7").disabled = true;
    document.getElementById("ruutu8").disabled = true;
  }
  else if (ruutu3 == "X" && ruutu5 == "X" && ruutu7 == "X")  {
    alert("X voitti!")
    document.getElementById("ruutu1").disabled = true;
    document.getElementById("ruutu2").disabled = true;
    document.getElementById("ruutu4").disabled = true;
    document.getElementById("ruutu6").disabled = true;
    document.getElementById("ruutu8").disabled = true;
    document.getElementById("ruutu9").disabled = true;
  }

  // Käydään kaikki 8 voittomahdollisuutta läpi if lauseilla 0 pelaajan kohdalla.

  else if (ruutu1 == "0" && ruutu2 == "0" && ruutu3 == "0")  {
    alert("0 voitti!")
    document.getElementById("ruutu4").disabled = true;
    document.getElementById("ruutu5").disabled = true;
    document.getElementById("ruutu6").disabled = true;
    document.getElementById("ruutu7").disabled = true;
    document.getElementById("ruutu8").disabled = true;
    document.getElementById("ruutu9").disabled = true;
  }
  else if (ruutu4 == "0" && ruutu5 == "0" && ruutu6 == "0")  {
    alert("0 voitti!")
    document.getElementById("ruutu1").disabled = true;
    document.getElementById("ruutu2").disabled = true;
    document.getElementById("ruutu3").disabled = true;
    document.getElementById("ruutu7").disabled = true;
    document.getElementById("ruutu8").disabled = true;
    document.getElementById("ruutu9").disabled = true;
  }
  else if (ruutu7 == "0" && ruutu8 == "0" && ruutu9 == "0")  {
    alert("0 voitti!")
    document.getElementById("ruutu1").disabled = true;
    document.getElementById("ruutu2").disabled = true;
    document.getElementById("ruutu3").disabled = true;
    document.getElementById("ruutu4").disabled = true;
    document.getElementById("ruutu5").disabled = true;
    document.getElementById("ruutu6").disabled = true;
  }
  else if (ruutu1 == "0" && ruutu4 == "0" && ruutu7 == "0")  {
    alert("0 voitti!")
    document.getElementById("ruutu2").disabled = true;
    document.getElementById("ruutu3").disabled = true;
    document.getElementById("ruutu5").disabled = true;
    document.getElementById("ruutu6").disabled = true;
    document.getElementById("ruutu8").disabled = true;
    document.getElementById("ruutu9").disabled = true;
  }
  else if (ruutu2 == "0" && ruutu5 == "0" && ruutu8 == "0")  {
    alert("0 voitti!")
    document.getElementById("ruutu1").disabled = true;
    document.getElementById("ruutu3").disabled = true;
    document.getElementById("ruutu4").disabled = true;
    document.getElementById("ruutu6").disabled = true;
    document.getElementById("ruutu7").disabled = true;
    document.getElementById("ruutu9").disabled = true;
  }
  else if (ruutu3 == "0" && ruutu6 == "0" && ruutu9 == "0")  {
    alert("0 voitti!")
    document.getElementById("ruutu1").disabled = true;
    document.getElementById("ruutu2").disabled = true;
    document.getElementById("ruutu4").disabled = true;
    document.getElementById("ruutu5").disabled = true;
    document.getElementById("ruutu7").disabled = true;
    document.getElementById("ruutu8").disabled = true;
  }
  else if (ruutu1 == "0" && ruutu5 == "0" && ruutu9 == "0")  {
    alert("0 voitti!")
    document.getElementById("ruutu2").disabled = true;
    document.getElementById("ruutu3").disabled = true;
    document.getElementById("ruutu4").disabled = true;
    document.getElementById("ruutu6").disabled = true;
    document.getElementById("ruutu7").disabled = true;
    document.getElementById("ruutu8").disabled = true;
  }
  else if (ruutu3 == "0" && ruutu5 == "0" && ruutu7 == "0")  {
    alert("0 voitti!")
    document.getElementById("ruutu1").disabled = true;
    document.getElementById("ruutu2").disabled = true;
    document.getElementById("ruutu4").disabled = true;
    document.getElementById("ruutu6").disabled = true;
    document.getElementById("ruutu8").disabled = true;
    document.getElementById("ruutu9").disabled = true;
  }

  // Tarkistetaan tasapeli

}



//Vuoron tarkistus muuttuja. Käytetään sen arvoja hyväksi vuoron vaihdoissa
var vuoronTarkistus = 1;

// Jokaiselle ruudulle oma funktio joka tarkistaa vuoron ja syöttää "x" tai "0" arvon vuoron mukaan

function ruutu1Klikki() {
  if (vuoronTarkistus == 1) {
    var ruutu1 = document.getElementById('ruutu1');
    ruutu1.classList.add("uusiclassi");
    document.getElementById('ruutu1').value = "X";
    document.getElementById("ruutu1").disabled = true;  //disabloidaan ruutu joka vuoron jälkeen, jottei samaan ruutuun pysty laittamaa uudestaan
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu1').value = "0";
    document.getElementById("ruutu1").disabled = true;
    vuoronTarkistus = 1;
  }
}

function ruutu2Klikki() {
  if (vuoronTarkistus == 1) {
    var ruutu2 = document.getElementById('ruutu2');
    ruutu2.classList.add("uusiclassi")
    document.getElementById('ruutu2').value = "X";
    document.getElementById("ruutu2").disabled = true;
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu2').value = "0";
    document.getElementById("ruutu2").disabled = true;
    vuoronTarkistus = 1;
  }
}

function ruutu3Klikki() {
  if (vuoronTarkistus == 1) {
    var ruutu3 = document.getElementById('ruutu3');
    ruutu3.classList.add("uusiclassi")
    document.getElementById('ruutu3').value = "X";
    document.getElementById("ruutu3").disabled = true;
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu3').value = "0";
    document.getElementById("ruutu3").disabled = true;
    vuoronTarkistus = 1;
  }
}

function ruutu4Klikki() {
  if (vuoronTarkistus == 1) {
    var ruutu4 = document.getElementById('ruutu4');
    ruutu4.classList.add("uusiclassi")
    document.getElementById('ruutu4').value = "X";
    document.getElementById("ruutu4").disabled = true;
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu4').value = "0";
    document.getElementById("ruutu4").disabled = true;
    vuoronTarkistus = 1;
  }
}

function ruutu5Klikki() {
  if (vuoronTarkistus == 1) {
    var ruutu5 = document.getElementById('ruutu5');
    ruutu5.classList.add("uusiclassi")
    document.getElementById('ruutu5').value = "X";
    document.getElementById("ruutu5").disabled = true;
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu5').value = "0";
    document.getElementById("ruutu5").disabled = true;
    vuoronTarkistus = 1;
  }
}

function ruutu6Klikki() {
  if (vuoronTarkistus == 1) {
    var ruutu6 = document.getElementById('ruutu6');
    ruutu6.classList.add("uusiclassi")
    document.getElementById('ruutu6').value = "X";
    document.getElementById("ruutu6").disabled = true;
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu6').value = "0";
    document.getElementById("ruutu6").disabled = true;
    vuoronTarkistus = 1;
  }
}

function ruutu7Klikki() {
  if (vuoronTarkistus == 1) {
    var ruutu7 = document.getElementById('ruutu7');
    ruutu7.classList.add("uusiclassi")
    document.getElementById('ruutu7').value = "X";
    document.getElementById("ruutu7").disabled = true;
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu7').value = "0";
    document.getElementById("ruutu7").disabled = true;
    vuoronTarkistus = 1;
  }
}

function ruutu8Klikki() {
  if (vuoronTarkistus == 1) {
    var ruutu8 = document.getElementById('ruutu8');
    ruutu8.classList.add("uusiclassi")
    document.getElementById('ruutu8').value = "X";
    document.getElementById("ruutu8").disabled = true;
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu8').value = "0";
    document.getElementById("ruutu8").disabled = true;
    vuoronTarkistus = 1;
  }
}

function ruutu9Klikki() {
  if (vuoronTarkistus == 1) {
    var ruutu9 = document.getElementById('ruutu9');
    ruutu9.classList.add("uusiclassi")
    document.getElementById('ruutu9').value = "X";
    document.getElementById("ruutu9").disabled = true;
    vuoronTarkistus = 0;
  }
  else {
    document.getElementById('ruutu9').value = "0";
    document.getElementById("ruutu9").disabled = true;
    vuoronTarkistus = 1;
  }
}

//Pöydän tyhjennys funktio

function tyhjenna() {
  //tyhjennetään lisätyt classit
  document.getElementById('ruutu1').classList.remove("uusiclassi")
  document.getElementById('ruutu2').classList.remove("uusiclassi")
  document.getElementById('ruutu3').classList.remove("uusiclassi")
  document.getElementById('ruutu4').classList.remove("uusiclassi")
  document.getElementById('ruutu5').classList.remove("uusiclassi")
  document.getElementById('ruutu6').classList.remove("uusiclassi")
  document.getElementById('ruutu7').classList.remove("uusiclassi")
  document.getElementById('ruutu8').classList.remove("uusiclassi")
  document.getElementById('ruutu9').classList.remove("uusiclassi")

  //Muutetaan valuet tyhjiksi
  document.getElementById('ruutu1').value = "";
  document.getElementById('ruutu2').value = "";
  document.getElementById('ruutu3').value = "";
  document.getElementById('ruutu4').value = "";
  document.getElementById('ruutu5').value = "";
  document.getElementById('ruutu6').value = "";
  document.getElementById('ruutu7').value = "";
  document.getElementById('ruutu8').value = "";
  document.getElementById('ruutu9').value = "";

  // poistetaan kaikki disabloidut ruudut
  document.getElementById("ruutu1").disabled = false;
  document.getElementById("ruutu2").disabled = false;
  document.getElementById("ruutu3").disabled = false;
  document.getElementById("ruutu4").disabled = false;
  document.getElementById("ruutu5").disabled = false;
  document.getElementById("ruutu6").disabled = false;
  document.getElementById("ruutu7").disabled = false;
  document.getElementById("ruutu8").disabled = false;
  document.getElementById("ruutu9").disabled = false;
  //Muutetaan vuorontarkistus takas 1
  vuoronTarkistus = 1;
}
