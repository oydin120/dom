let names = prompt("Ismingizni kiriting:");
let surname = prompt("Familiyangizni kiriting:");
let ball = Number(prompt("Toplagan ballingizni kiriting:"));

let natija = document.createElement("h1");

natija.innerHTML = names + " " + surname;

natija.style.textAlign = "center";
natija.style.marginTop = "200px";

document.body.appendChild(natija);

if (ball >= 80) {
    natija.innerHTML += "<br>Tabriklaymiz, grandga kirdingiz!";
    document.body.style.backgroundColor = "violet";
} else if (ball >= 60) {
    natija.innerHTML += "<br>Tabriklaymiz, kontraktga kirdingiz!";
    document.body.style.backgroundColor = "aquamarine";
} else if (ball >= 30) {
    natija.innerHTML += "<br>Tabriklaymiz, super kontraktga kirdingiz!";
    document.body.style.backgroundColor = "darksalmon";
} else {
    natija.innerHTML += "<br>Afsuski, oqishga kira olmadingiz!";
    document.body.style.backgroundColor = "crimson";
}