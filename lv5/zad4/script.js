$(document).ready(function() {
    
    $('#zelenaButton').click(function() {
        $('ul:first').addClass('zelena');
      });
      abra=false;
      $('#abrakadabraButton').click(function() {
        
        if(abra==false){
            setTimeout(function() {
                $('#slika1').fadeOut('fast');
            }, 1000);

            setTimeout(function() {
            $('#slika2').fadeOut('slow');
            }, 2000);

            setTimeout(function() {
            $('#slika3').fadeOut('slow');
            }, 3000);
            abra=!abra;
        }
        else {
            setTimeout(function() {
                $('#slika1').fadeIn('fast');
            }, 1000);

            setTimeout(function() {
                $('#slika2').fadeIn('slow');
            }, 2000);
    
            setTimeout(function() {
                $('#slika3').fadeIn('slow');
            }, 3000);
            abra=!abra;
        }
      });

    $("#slika1").on('click', function() {
      $(this).remove();
    });

    $("#slika1").hover(
        function() {
          $(this).css('border', '2px solid black'); // Add a black border when hovered
        },
        function() {
          $(this).css('border', 'none');
        }
    );

    $("#slika2").on('click', function() {
        $(this).remove();
    });

    $("#slika2").hover(
        function() {
          $(this).css('border', '2px solid black'); // Add a black border when hovered
        },
        function() {
          $(this).css('border', 'none');
        }
    );

    $("#slika3").on('click', function() {
        $(this).remove();
    });

    $("#slika3").hover(
        function() {
          $(this).css('border', '2px solid black'); // Add a black border when hovered
        },
        function() {
          $(this).css('border', 'none');
        }
    );
  });