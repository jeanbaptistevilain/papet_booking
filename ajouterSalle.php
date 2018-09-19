<?php
/**
 * @author Mickaël Debalme
 * @author Robin Simonklein
 */

if( isset( $_GET['proprioSalle'] ) && isset( $_GET['nomSalle'] ) && isset( $_GET['capaciteSalle'] ) && isset( $_GET['descriptionSalle'] )  ) {

    ajouterNouvelleSalle( $_GET['proprioSalle'], $_GET['nomSalle'], $_GET['capaciteSalle'], $_GET['descriptionSalle'] );
}
else {

    echo "Que fais tu ici ?";
}

/**
 * @param $proprioSalle
 * @param $nomSalle
 * @param $capaciteSalle
 * @param $descriptionSalle
 */

function ajouterNouvelleSalle( $proprioSalle, $nomSalle, $capaciteSalle, $descriptionSalle ) {

    if( !empty( $proprioSalle ) && !empty( $nomSalle ) && !empty( $capaciteSalle ) && !empty( $descriptionSalle ) ) {

        if( file_exists( 'data/data-test.json' ) ) {

            $current_data = file_get_contents('data/data-test.json');
            $array_data = json_decode($current_data, true);

            if( !verifierSalleExistante($array_data['rooms'], $nomSalle ) ) {

                $form_data = array(
                    'nom' => $nomSalle,
                    'description' => $descriptionSalle,
                    'max-capacity' => $capaciteSalle,
                    'proprio' => $proprioSalle

                );

                $array_data['rooms'][] = $form_data;
                $data_processed = json_encode($array_data, JSON_PRETTY_PRINT);

                // Ré-écriture avec la nouvelle salle
                if( file_put_contents( 'data/data-test.json', $data_processed ) ) {

                    echo "AJOUT_OK";
                }
                else {
                    echo "OUVERTURE_FICHIER";
                }
            }
            else {
                echo "SALLE_EXISTANTE";
            }
        }
        else {
            echo "JSON_INEXISTANT";
        }
    }
    else {
        echo "FORM_INCOMPLET";
    }
}

/**
 * @param $array
 * @param $nomSalle
 * @return bool
 */

function verifierSalleExistante( $array, $nomSalle ) {

    foreach ( $array as $a ) {

        if( $a['nom'] == $nomSalle ) {
            return true;
        }
    }

    return false;
}
