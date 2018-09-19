/**
 *
 */

$('#formAjoutSalle').submit(function(e){
    //e.preventDefault();

    let proprioSalle = $("#proprio_salle").val();
    let nomSalle = $('#nom_salle').val();
    let capaciteSalle = $('#capacite_salle').val();
    let descriptionSalle = $("#description_salle").val();

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
        },
        error: function (data) {
            console.error(data);
        }
    });

    return false;
});
