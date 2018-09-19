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

                    echo "La liste des salles a été mise à jour.";
                }
                else {
                    echo "Il y a eu un problème pendant l'ouverture du fichier.";
                }
            }
            else {
                echo "Une salle portant ce nom existe déjà.";
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
