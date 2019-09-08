$(document).ready(function() {
    $('#enviar').click(function(e) {
        var cuij = $("input[name='cuij']").val();
        var expte = $("input[name='expte']").val();
        if (cuij.length>0 && expte.length == 0) {
            $("input[name='expte']").removeAttr("required");
        };
        if (expte.length > 0 && cuij.length == 0) {
            $("input[name='cuij']").removeAttr("required");
        };
    });
});