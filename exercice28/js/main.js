//Après avoir cliqué sur le bouton magique : afficher dans la console, le texte dans l'input avec la méthode val
$(document).ready(function(){
    $(".btn").click(function(){
        console.log($("input").val())
    });
});

// Je veux récuperer le contenu de mon imput et l'afficher dans la console