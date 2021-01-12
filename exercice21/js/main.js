//Après avoir cliqué sur le bouton magique : animer la largeur du carré à 500 pixels avec la méthode animate
$(document).ready(function(){
    $(".btn").click(function(){
        $("#square").animate({
            width: "500px"
        })
    })
})