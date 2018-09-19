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

/*
<div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
 */
function createBookingList(bookings) {
    var $list = $("#mybooking");
    _.each(bookings, (v, k)=> {
        if(_.has(rooms, v.room)) {
            var date = new Date(v.from * 1000);
            var room = rooms[v.room];
            var $card = $('<div class="card">')
                .append($("<h5>", {text: room.nom + " (" + date.toDateString() + ")", "class": "card-header"}))
                .append($("<div>", {class : 'card-body'}).append($("<p>", {text: room.description, "class": "card-text"}))
                    .append($("<p>", {text: "", "class": "card-text"}))
               );
            $list.append($card);
        }
    });
}


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.getBookings = getBookings;
}
else
    getBookings();
