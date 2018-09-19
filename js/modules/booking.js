//Traitement spécial pour avoir la liste des salles remontées dans n'importe quel champs de formulaire
var rooms = null;
$.get("data/data-test.json", {}, function (data) {
    rooms = data.rooms;
    _.each(data.rooms, function (value, key) {
        $('select[data-rooms]').append($("<option>", {value : key, text: value.nom}))
    });
});