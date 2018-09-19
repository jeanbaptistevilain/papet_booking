/*const $ = require('../jquery.min');
const _ = require('../underscore.min');*/


//Traitement spécial pour avoir la liste des salles remontées dans n'importe quel champs de formulaire
var rooms = null;

function getRooms(path) {
    var path =  "";
    $.ajax( {
        "url":  path + "/data/data-test.json",
        "success" : function (data) {
            console.log(1);
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

    console.log(2);
    return rooms != null;
}

getRooms();


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    /*module.exports.$ = $;
    module.exports._ = _;*/
    module.exports.getRooms = getRooms;
}
