
var cuij = document.getElementById('cuij');
var expte = document.getElementById('expte');

function required2() {
       
        if (cuij == '' && expte == '') {
            alert('Faltan ambos');
        } else if (expte == ''){
            alert('requerido el cuij');
        }
        else {
            alert('Requerido expte');
        }
     }
    