$(document).ready(function() {
    $(".draggable").draggable({
        
    });

    $(".draggable").on("dragstop", function(event, ui) {
        var $kocka = $(this);
        var kockaId = $kocka.attr("id");
        var kockaPosition = $kocka.position();

        var $ciljCrveno = $("#crveno");
        var $ciljCrno = $("#crno");

        if (kockaId === "kocka1" && isKockaInCilj(kockaPosition, $ciljCrveno)) {
            
        } else if (kockaId === "kocka2" && isKockaInCilj(kockaPosition, $ciljCrno)) {
            
        } else {
            resetirajKocku($kocka);
        }
    });

    function isKockaInCilj(kockaPosition, ciljElement) {
        var kockaCenterX = kockaPosition.left + 50;
        var kockaCenterY = kockaPosition.top + 50;
        var ciljPosition = ciljElement.position();
        var ciljCenterX = ciljPosition.left + 60;
        var ciljCenterY = ciljPosition.top + 60;

        var distance = Math.sqrt(
            Math.pow(kockaCenterX - ciljCenterX, 2) + Math.pow(kockaCenterY - ciljCenterY, 2)
        );

    return distance <= 60;
    }

    function resetirajKocku($kocka) {
        $kocka.css({
            left: 0,
            top: 0
        });
    }
});