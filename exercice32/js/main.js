//Après avoir cliqué sur le bouton magique : avec la méthode ajax charger le JSON de la France pour afficher dans la console le nom du pays et sa capitale. Le lien pour y arriver est le suivant : JSON France

$(document).ready(function(){
    $(".btn").click(function(){
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/france',
            success: function(data, statuts, response) {
                console.log(response.statusCode)
            }
        });
    })
})

