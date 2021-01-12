//Après avoir cliqué sur le bouton magique : déplacer l'image de 100 pixels vers la droite avec animate
$(document).ready(function(){
    $(".btn").click(function(){
        $("#bg").animate({
            marginLeft : "100px"
        })
    })
})