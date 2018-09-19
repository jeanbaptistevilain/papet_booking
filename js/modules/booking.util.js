if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    window.$ = require('../jquery.min');
    window._ = require('../underscore.min');
}

//Traitement spécial pour avoir la liste des salles remontées dans n'importe quel champs de formulaire
var rooms = null;

function getAvailables(date, hour, path) {
    var availables = [];
    var path = path || "";
    var timestamp = (new Date(date + " " + hour).getTime() / 1000);
    $.ajax( {
        "url":  path + "/data/data-test.json",
        "success" : function (data) {
            _.each(data.rooms, function (v, room_id) {
                var has_booking = _.filter(data.bookings, (x) => {
                    return x.room == room_id && timestamp < x.from && timestamp > x.to;
                });
                if(_.size(has_booking) == 0)
                    availables.push(room_id);
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
    return availables;
}


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.getAvailables = getAvailables;
}
