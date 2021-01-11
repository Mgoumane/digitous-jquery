//Le texte Konexio! est dans le code HTML mais invisible à l'oeil de l'utilisateur. Après avoir cliqué sur le bouton magique : faites le apparaître avec la méthode show. A quelle règle CSS correspond la méthode show ?
$(document).ready(function(){
    $(".btn").click/*eventListener*/(function(){
        $("#text").show();
    });
});