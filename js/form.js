
var cuij = document.getElementById('cuij');
var expte = document.getElementById('expte');

    function required() {
       
        if (cuij != '' && expte != '') {
            alert('Ninguno de los dos esta'); 
        } else if (cuij = '') {
            alert('falta el CUIJ');
        }
        else {
            alert('Falta el EXPTE');
        }
    }