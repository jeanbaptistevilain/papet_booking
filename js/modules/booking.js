if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    window.$ = require('../jquery.min');
    window._ = require('../underscore.min');
}

//Traitement spécial pour avoir la liste des salles remontées dans n'importe quel champs de formulaire
var rooms = null;

function getRooms(path) {
    var path = path || "";
    $.ajax( {
        "url":  path + "/data/data-test.json",
        "success" : function (data) {
            rooms = data.rooms;
            _.each(data.rooms, function (value, key) {
                $('select[data-rooms]').append($("<option>", {value : key, text: value.nom}))
            });
        },
        "error": function (data) {
            console.log(data);
        },
        "failure": function (data) {
            console.log(data);
        },
        "async": false
    });
    return rooms != null;
}


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.getRooms = getRooms;
}
else
    getRooms();
