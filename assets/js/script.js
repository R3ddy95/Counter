let counterNumeroVisualizzato = document.querySelector('.numero-visualizzato');
let counterAggiungi = document.querySelector('.aggiungi');
let counterSottrai = document.querySelector('.sottrai');
let counterRaddoppia = document.querySelector('.raddoppia');
let counterDividi = document.querySelector('.dividi');
let counterReset = document.querySelector('.reset');

let counter = 0;

aggiorna();
counterStile();

counterAggiungi.addEventListener("click", () => {
   counter++;
   aggiorna();
   counterStile();
});

counterSottrai.addEventListener("click", () => {
   counter--;
   aggiorna();
   counterStile();
});

counterRaddoppia.addEventListener("click", () => {
   counter = counter * 2;
   aggiorna();
});

counterDividi.addEventListener("click", () => {
   counter = counter / 2;
   aggiorna();
});

counterReset.addEventListener("click", () => {
   counter = 0;
   aggiorna();
   counterStile();
});

function aggiorna() {
   counterNumeroVisualizzato.innerHTML = counter;
};

function counterStile() {
   if (counter < 0) {
      counterNumeroVisualizzato.style.color = "red";
   } else if (counter > 0) {
      counterNumeroVisualizzato.style.color = "green";
   } else if (counter == 0) {
      counterNumeroVisualizzato.style.color = "black";
   }
};