if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    window.$ = require('../jquery.min');
    window._ = require('../underscore.min');
}

//Traitement spécial pour avoir la liste des salles remontées dans n'importe quel champs de formulaire
var bookings = null;

function getBookings(path) {
    var path = path || "";
    $.ajax( {
        "url":  path + "/data/data-test.json",
        "success" : function (data) {
            bookings = data.bookings;
            createBookingList(bookings);
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

function createBookingList(bookings) {
    _.each(bookings, (v, k)=> {
        if(_.has(rooms, v.room)) {
            var room = rooms[v.room];
            console.log(v, room);
        }
    });
}


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.getBookings = getBookings;
}
else
    getBookings();
