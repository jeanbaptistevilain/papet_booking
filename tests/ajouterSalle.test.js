const AjouterSalle = require("../js/ajouterSalle.js");

test('Validité des attributs de la salle', () => {
    expect( AjouterSalle.verifierValiditeSalle( "Mich", "Salle 1", 45, "Grande salle" ) ).toBe(true);
});

/*
test('Ajout de la salle', () => {
    expect( AjouterSalle.ajouterSalle( "Mich", "Salle 1", 45, "Grande salle" ) ).toBe(true);
});
*/
