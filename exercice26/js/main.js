//Après avoir cliqué sur le bouton magique : ajouter la classe Bootstrap is-invalid à l'input
$(document).ready(function(){
    $(".btn").click(function(){
        $("input").addClass("is-invalid")
    })
})