onSelectRow: function (id) {        

        celValue = $('#jqGrid-Autos').jqGrid ('getCell', id, 'GRUPO');
        if (celValue==21) {
          $.ajax({
            url : "autos_grupos.php?grupo=21",
            type : "POST",
            data: {               
                   },    
            dataType : "JSON",
            success : function(recibido) {
              
              jqGridAutosGrupo(recibido['rows'],21);
            }
          });

          $('#modal_autos_grupo').show();
          $('.modal_contenido').toggleClass('puffIn spaceOutRight');

        } else if (celValue==50) {

          $.ajax({
            url : "autos_grupos.php?grupo=50",
            type : "POST",
            data: {               
                   },    
            dataType : "JSON",
            success : function(recibido) {
              
              jqGridAutosGrupo(recibido['rows'],50);
            }
          });

          $('#modal_autos_grupo').show();
          $('.modal_contenido').toggleClass('puffIn spaceOutRight');

        } else {

        };
      }