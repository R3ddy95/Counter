// Container del counter 

let container = document.createElement("div");
container.classList = ("container");
document.body.appendChild(container);

// Counter

let display = document.createElement("div");
let numeroVisualizzato = document.createTextNode("0");
display.classList = ("numeroVisualizzato");
display.appendChild(numeroVisualizzato);
container.appendChild(display);


// Bottoni

let btn = document.createElement("div");
btn.classList = ("bottoni");
container.appendChild(btn);

// Sottrai 

let sottrai = document.createElement("button");
let minus = document.createTextNode("-");
sottrai.classList = ("sottrai btn btn-outline-danger");
sottrai.appendChild(minus);
btn.appendChild(sottrai);

// Reset

let reset = document.createElement("button");
let rst = document.createTextNode("RESET");
reset.classList = ("reset btn btn-outline-dark");
reset.appendChild(rst);
btn.appendChild(reset);

// Aggiungi

let aggiungi = document.createElement("button");
let plus = document.createTextNode("+");
aggiungi.classList = ("aggiungi btn btn-outline-success");
aggiungi.appendChild(plus);
btn.appendChild(aggiungi);


// Bottoni 2

let btn2 = document.createElement("div");
btn.classList = ("bottoni2");
container.appendChild(btn2);

// Dividi

let dividi = document.createElement("button");
let divided = document.createTextNode(": 2");
dividi.classList = ("dividi btn btn-outline-dark");
dividi.appendChild(divided);
btn2.appendChild(dividi);

// Raddoppia

let raddoppia = document.createElement("button");
let doubles = document.createTextNode("x 2");
raddoppia.classList = ("raddoppia btn btn-outline-dark");
raddoppia.appendChild(doubles);
btn2.appendChild(raddoppia);


// Operazioni

counter = 0;

sottrai.addEventListener("click", function () {
   counter--;
   numeroVisualizzato.textContent = counter;
   counterStile();
});

aggiungi.addEventListener("click", function () {
   counter++;
   numeroVisualizzato.textContent = counter;
   counterStile();
});

reset.addEventListener("click", function () {
   counter = 0;
   numeroVisualizzato.textContent = counter;
   counterStile();
});

raddoppia.addEventListener("click", function () {
   counter = counter * 2;
   numeroVisualizzato.textContent = counter;
});

dividi.addEventListener("click", function () {
   counter = counter / 2;
   numeroVisualizzato.textContent = counter;
});


function counterStile() {
   if (counter < 0) {
      display.style.color = "red";
   } else if (counter > 0) {
      display.style.color = "green";
   } else if (counter == 0) {
      display.style.color = "black";
   }
};


// Crediti

let credits = document.createElement("div");
credits.classList = ("credits");
credits.innerHTML = 'Created by <a href="https://github.com/R3ddy95" target="_blank">Edoardo Vitagliano <img src="assets/images/GitHub.png" alt="GitHub"></a>';
document.body.appendChild(credits);