const images = [
    "hongj.jpg",
    "seong.jpg",
    "yuyu.jpg",
    "yeos.jpg",
    "sani.jpg",
    "min.jpg",
    "wooy.jpg",
    "jong.jpg"
];

const numero_immagini = 8;
const numero_carte = numero_immagini * 2;

const RITARDO = 800;
const copertina_carta = "backcard.jpg";

var carte;
var primaCarta;
var secondaCarta;
var nodoNuovaPartita;

function gestoreLoad () {
    try {

        nodoNuovaPartita = document.getElementById("nuovaPartita");
        nodoNuovaPartita.onclick = gestoreLoad;

        carte = [];

        // inizializza carte HTML
        for (var i = 0; i < numero_carte; i++) {

            var idImmagine = "t" + String(i);
            var nodoCarta = document.getElementById(idImmagine);

            nodoCarta.setAttribute("src", copertina_carta);
            nodoCarta.setAttribute("carta", "coperta");

            nodoCarta.onclick = gestoreClickCarta;

            carte.push(nodoCarta);
        }

        // assegna immagini random
        for (var i = 0; i < numero_immagini; i++) {

            var fileImmagine = images[i];

            var i1 = calcolaIndiceCarta();
            carte[i1].setAttribute("src1", fileImmagine);
            carte[i1] = null;

            var i2 = calcolaIndiceCarta();
            carte[i2].setAttribute("src1", fileImmagine);
            carte[i2] = null;
        }

        primaCarta = null;
        secondaCarta = null;

    } catch (e) {
        alert("gestoreLoad " + e);
    }
}

window.onload = gestoreLoad;


function giraCarte () {
    try {

        primaCarta.setAttribute("src", copertina_carta);
        secondaCarta.setAttribute("src", copertina_carta);

        primaCarta = null;
        secondaCarta = null;

    } catch (e) {
        alert("giraCarte " + e);
    }
}


function gestoreClickCarta () {
    try {

        if (this.getAttribute("carta") == "scoperta") {
            return;
        }

        if (this == primaCarta) {
            return;
        }

        if (primaCarta == null) {

            primaCarta = this;
            this.setAttribute("src", this.getAttribute("src1"));
            return;
        }

        if (secondaCarta == null) {

            secondaCarta = this;
            this.setAttribute("src", this.getAttribute("src1"));

            if (primaCarta.getAttribute("src1") == secondaCarta.getAttribute("src1")) {

                primaCarta.setAttribute("carta", "scoperta");
                secondaCarta.setAttribute("carta", "scoperta");

                primaCarta = null;
                secondaCarta = null;

            } else {
                setTimeout(giraCarte, RITARDO);
            }
        }

    } catch (e) {
        alert("gestoreClickCarta " + e);
    }
}


function uniformeRandom (k) {
    return Math.trunc(Math.random() * k);
}


function calcolaIndiceCarta () {
    var i = uniformeRandom(numero_carte);

    while (carte[i] == null) {
        i = uniformeRandom(numero_carte);
    }

    return i;
}