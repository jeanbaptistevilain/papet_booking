
$(document).ready(function() {

    alert(ajouterSalle( "Mich", "Salle 1", 45, "Grande salle" ));
});


$('#formAjoutSalle').submit(function(e){
    //e.preventDefault();

    let proprioSalle = $("#proprio_salle").val();
    let nomSalle = $('#nom_salle').val();
    let capaciteSalle = $('#capacite_salle').val();
    let descriptionSalle = $("#description_salle").val();

    ajouterSalle( proprioSalle, nomSalle, capaciteSalle, descriptionSalle );

    return false;
});