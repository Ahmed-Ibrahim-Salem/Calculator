var tbcal = "";
const useinp = document.getElementById('useinp');
const compinp = document.getElementById('compout');

function calcad(value) {
    tbcal += value;
    useinp.value = tbcal;
}

function execm() {
    if (tbcal.length == 0 || tbcal == "") {
        alert("needs an input");
        return;
    }
    try {
        ans = eval(tbcal);
        compinp.value = ans;
    } catch (err) {
        alert("Invalid Input");
    }
}

function removech() {
    tbcal = tbcal.substring(0, tbcal.length - 1);
    useinp.value = tbcal;
}

function reset() {
    useinp.value = "";
    compinp.value = "";
    tbcal = "";
}