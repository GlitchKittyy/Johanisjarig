var Second = document.getElementById('2');
var Third = document.getElementById('3');
var Vierde = document.getElementById('4');
var Vijfde = document.getElementById('5');
var Zesde = document.getElementById('6');
var Zevende = document.getElementById('7');
var Achtste = document.getElementById('8');
var Negende = document.getElementById('9');
var Tiende = document.getElementById('10');
var boeietext = document.getElementById('boeie');

Second.style.display = "none";
Third.style.display = "none";
Vierde.style.display = "none";
Vijfde.style.display = "none";
Zesde.style.display = "none";
Zevende.style.display = "none";
Achtste.style.display = "none";
Negende.style.display = "none";
Tiende.style.display = "none";
boeietext.style.display = "none";

let counter = 0;

function next(number) {
    if (number === 1) {
        var First = document.getElementById('1');
        First.classList.add('fade-out');
        setTimeout(function() {
            Second.style.display = "grid";
            Second.classList.add('fade-in');
            First.style.display = "none";
        }, 500);
    } else if (number === 2) {
        Second.classList.add('fade-out');
        setTimeout(function() {
            Third.style.display = "grid";
            Third.classList.add('fade-in');
            Second.style.display = "none";
        }, 500);
    }
    else if (number === 3) {
        Third.classList.add('fade-out');
        setTimeout(function() {
            Vierde.style.display = "grid";
            Vierde.classList.add('fade-in');
            Third.style.display = "none";
        }, 500);
    }
    else if (number === 4) {
        Vierde.classList.add('fade-out');
        setTimeout(function() {
            Vijfde.style.display = "grid";
            Vijfde.classList.add('fade-in');
            Vierde.style.display = "none";
        }, 500);
    }
    else if (number === 5) {
        Vijfde.classList.add('fade-out');
        setTimeout(function() {
            Zesde.style.display = "grid";
            Zesde.classList.add('fade-in');
            Vijfde.style.display = "none";
        }, 500);
    }
    else if (number === 6) {
        Zesde.classList.add('fade-out');
        setTimeout(function() {
            Zevende.style.display = "grid";
            Zevende.classList.add('fade-in');
            Zesde.style.display = "none";
        }, 500);
    }
    else if (number === 7) {
        Zevende.classList.add('fade-out');
        setTimeout(function() {
            Achtste.style.display = "grid";
            Achtste.classList.add('fade-in');
            Zevende.style.display = "none";
        }, 500);
    }
    else if (number === 8) {
        Achtste.classList.add('fade-out');
        setTimeout(function() {
            Negende.style.display = "grid";
            Negende.classList.add('fade-in');
            Achtste.style.display = "none";
        }, 500);
    }
    
    else if (number === 9) {
        Negende.classList.add('fade-out');
        setTimeout(function() {
            Tiende.style.display = "grid";
            Tiende.classList.add('fade-in');
            Negende.style.display = "none";
        }, 500);
    }
    
    
}

function boeie() {
    boeietext.style.display = "grid";
    
}
