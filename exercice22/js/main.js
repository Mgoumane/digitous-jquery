//Après avoir cliqué sur le bouton magique : changer la taille de la police de caractère à 50 pixels avec la méthode animate
$(document).ready(function(){
    $(".btn").click(function(){
        $("#text").animate({
            fontSize : "50px"
        })
    })
})