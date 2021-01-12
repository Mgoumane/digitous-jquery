//Après avoir cliqué sur le bouton magique : ajouter l'attribut class de valeur float-right sur le texte avec la méthode addClass
$(document).ready(function(){
    $(".btn").click/*eventListener*/(function(){
        $("#text").addClass("float-right")
    })
})