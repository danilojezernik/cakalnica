let dodajId = document.getElementById("dodajId");
let dodano = document.getElementById("dodano");
let dodajNaslov = document.getElementById("dodajNaslov");
let opravljeno = document.getElementById("opravljeno");
let dodajIdZgodovina = document.getElementById("dodajIdZgodovina");
let spisek = [];

function dodaj() {
    let text = dodajId.value;
    let naslov = dodajNaslov.value;
    let element = document.createElement("div");
    element.innerHTML =
        `<div class="bd-highlight bg-light bg-gradient rounded shadow p-3 mb-5 bg-body rounded" >
<p>${naslov}</p>
<p><iframe width="100%" height="315" 
src="https://www.youtube.com/embed/${text}" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe></p>
<div class="d-grid gap-2 d-md-block text-center mx-auto">
  <button class="btn btn-success" onclick="opravil()" type="button">Opravljeno</button>
  <button class="btn btn-outline-danger" type="button" onclick="odstrani(${spisek.length})">Odstrani</button>
</div></div>
`;
    dodano.appendChild(element);
    spisek.push(element);
}

function odstrani(mesto) {
    let element = spisek[mesto];
    element.remove();
}

function opravil() {
    let opravilo = dodajNaslov.value;
    let element2 = document.createElement("div");
    element2.innerHTML = `<div class="shadow-sm p-3 bg-body rounded"><img src="https://img.icons8.com/fluency/48/000000/check-all.png"/>${opravilo}</div>`;
    opravljeno.appendChild(element2);
    spisek.push(element2)
}

// Izbriši vse v dodanih videih
function izbrisVse() {
    dodano.innerHTML = "";
    spisek = [];
}

// Izbriši vse v opravljenih ogledih
function izbrisZgodovina() {
    opravljeno.innerHTML = "";
    spisek = [];
}