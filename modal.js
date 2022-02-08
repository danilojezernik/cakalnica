$(document).ready(function(){
    $("#mojModal").modal('show');
});

function vstaviIme() {
    let txt = document.getElementById("dodajIme").value;
    let element =  document.getElementById("dodanoIme");
    element.innerHTML = `<h2 class="text-center py-2">Lepo pozdravljeni ${txt} v Youtube čakalnici!</h2>`;
}
