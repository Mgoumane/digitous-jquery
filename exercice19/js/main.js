//On ne peut pas écrire dans l'input. Après avoir cliquer sur le bouton magique, rendre l'input éditable
$(document).ready(function(){
    $(".btn").click/*eventListener*/(function(){
        $("input").removeAttr("disabled");
    });
});