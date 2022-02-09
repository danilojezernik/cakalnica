$(document).ready(function(){
    $("#mojModal").modal('show');
});

function vstaviIme() {
    let txt = document.getElementById("dodajIme").value;
    let element =  document.getElementById("dodanoIme");
    element.innerHTML = `${txt}`;
    document.getElementById("mojModal").innerHTML = "";
}