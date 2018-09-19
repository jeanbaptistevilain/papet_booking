/**
 *
 */



function ajouterSalle( proprioSalle, nomSalle, capaciteSalle, descriptionSalle ) {

    if( verifierValiditeSalle( proprioSalle, nomSalle, capaciteSalle, descriptionSalle ) ) {

        let status = false;

        $.when(

            $.ajax({
                type: "GET",
                url: "ajouterSalle.php",
                data: {
                    proprioSalle: proprioSalle,
                    nomSalle: nomSalle,
                    capaciteSalle: capaciteSalle,
                    descriptionSalle: descriptionSalle
                },
                success: function (data) {
                    console.log(data);

                    if( data === "FORM_INCOMPLET" ) {
                        console.log("Les données du formulaire sont incomplètes.");
                        status = false;
                    }
                    else if( data === "JSON_INEXISTANT" ) {
                        console.log("Le fichier json n'existe pas.");
                        status = false;
                    }
                    else if( data === "SALLE_EXISTANTE" ) {
                        console.log("Une salle portant ce nom existe déjà.");
                        status = false;
                    }
                    else if( data === "OUVERTURE_FICHIER" ) {
                        console.log("Il y a eu un problème pendant l'ouverture du fichier.");
                        status = false;
                    }
                    else if( data === "AJOUT_OK" ) {
                        console.log("La liste des salles a été mise à jour.");
                        status = true;
                    }
                    else {
                        console.log(data);
                        status = false;
                    }
                },
                error: function (data) {
                    console.error(data);
                    status = false;
                }
            })

        ).then(function() {
            return status;
        })


    }
    else {
        return false;
    }
}


function verifierValiditeSalle( proprio, nom, capacite, description ) {

    if( $.type( proprio ) === "string" && $.type( nom ) === "string" && $.isNumeric(capacite) && $.type( description ) === "string" ) {

        if( capacite >= 0 ) {
            return true;
        }
        else {
            return "La capacité de la salle doit être supérieure à 0.";
        }
    }
    else {
        return "Les types des variables sont incorrects.";
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    window.$ = require('./jquery.min');
    module.exports.ajouterSalle = ajouterSalle;
    module.exports.verifierValiditeSalle = verifierValiditeSalle;
}

