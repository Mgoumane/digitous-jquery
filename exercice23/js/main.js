//Après avoir cliqué sur le bouton magique : mettre le carré en bas à droite de la boîte blanche avec la méthode animate. Pensez que l'on peut mettre plusieurs clés et valeurs dans un objet JavaScript en les séparant par une virgule
$(document).ready(function(){
    $(".btn").click(function(){
        $("#square").animate({
            marginTop : "150px",
            marginLeft : "500px"
        })
    })
})