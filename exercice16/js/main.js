//Après avoir cliqué sur le bouton magique : ajouter le texte Konexio! dans la boîte rouge avec la méthode html
$(document).ready(function(){
    $(".btn").click/*eventListener*/(function(){
        $("#text").html("<p>Konexio</p>")
    })
})