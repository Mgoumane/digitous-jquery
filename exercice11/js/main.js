//Après avoir cliqué sur le bouton magique : changer la couleur du carré en rouge avec la méthode css
$(document).ready(function(){
    $(".btn").click/*eventListener*/(function(){
        $("#square").css("background-color","red")
    })
})