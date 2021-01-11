//Après avoir cliqué sur le bouton magique : faites disparaître avec la méthode hide. A quelle règle CSS correspond la méthode hide ?
$(document).ready(function(){
    $(".btn").click/*eventListener*/(function(){
        $("#text").hide();
    });
});