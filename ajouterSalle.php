<?php
/**
 * @author Mickaël Debalme
 * @author Robin Simonklein
 */

if( isset( $_GET['proprioSalle'] ) && isset( $_GET['nomSalle'] ) && isset( $_GET['capaciteSalle'] ) && isset( $_GET['descriptionSalle'] )  ) {

    $proprioSalle = $_GET['proprioSalle'];
    $nomSalle = $_GET['nomSalle'];
    $capaciteSalle = $_GET['capaciteSalle'];
    $descriptionSalle = $_GET['descriptionSalle'];

    if( !empty( $proprioSalle ) && !empty( $nomSalle ) && !empty( $capaciteSalle ) && !empty( $descriptionSalle ) ) {

        if( file_exists( 'data/data-test.json' ) ) {

            $current_data = file_get_contents('data/data-test.json');
            $array_data = json_decode($current_data, true);
            $form_data = array(
                'nom' => $nomSalle,
                'description' => $descriptionSalle,
                'max-capacity' => $capaciteSalle,
                'proprio' => $proprioSalle

            );

            //print_r($array_data);
            $array_data['rooms'][] = $form_data;
            $data_processed = json_encode($array_data, JSON_PRETTY_PRINT);

            if( file_put_contents( 'data/data-test.json', $data_processed ) ) {

                echo "La liste des salles a été mise à jour.";
            }
            else {
                echo "Il y a eu un problème pendant l'ouverture du fichier.";
            }
        }
        else {
            echo "Le fichier json n'existe pas.";
        }
    }
    else {
        echo "Les données du formulaire sont incomplètes.";
    }
}
else {
    echo "Que fais tu ici ?";
}