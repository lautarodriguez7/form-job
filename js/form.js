
var cuij = document.getElementById('cuij');
var expte = document.getElementById('expte');

    function required() {
       
        if (cuij==='' || cuij===' ' && expte==='' || expte===' ') {
            alert('Falta el expte');
        } else if (expte==='' || expte===' '){
            alert('falta el cuij');
        }
        else {
            alert('faltan ambos');
        }
    }