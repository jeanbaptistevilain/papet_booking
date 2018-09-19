const inputSubmit = document.getElementById("submit");
const date = document.getElementById("filter-date");
const timeStart = document.getElementById("filter-time-start");
const timeEnd = document.getElementById("filter-time-end");
const minSpace = document.getElementById("filter-minimum-space");
const resultList = document.getElementById("result-list");


if(inputSubmit){
    inputSubmit.addEventListener("click", function(event){
        event.preventDefault();
        searchHandler();
    })
}

document.addEventListener('DOMContentLoaded', function(){
    searchHandler()
}, false);


/**
 *
 * @param value
 * @returns {string}
 */
function addRow (value){
    let content = `<tr>
                        <td>${value.nom}</td>
                        <td>${value.description}</td>
                        <td>${value.maxCapacity}</td>
                        <td>${value.proprio}</td>
                    <tr>`;

    resultList.insertAdjacentHTML("beforeend", content);
}

/**
 *
 */
function searchHandler(){
    resultList.innerHTML = '';
    let rooms            = null;
    let bookings         = null;
    const dateValue      = date.value;
    const timeStartValue = formatedDate(dateValue, timeStart.value);
    const timeEndValue   = formatedDate(dateValue, timeEnd.value);
    const minSpaceValue  = minSpace.value;

    $.get("data/data-test.json", {}, function (data) {
        rooms    = data.rooms;
        bookings = data.bookings;
        if (!rooms){
            return;
        }
        let formatedRooms = rooms;

        formatedRooms = filterSpace(minSpaceValue, rooms);
        filterByTime(timeStartValue, timeEndValue, rooms, bookings);

        formatedRooms.map(function(room){
            addRow(room);
        })
    })
}

/**
 *
 * @param date
 * @param time
 * @returns {*}
 */
function formatedDate(date, time){
    if (!date || !time){
        return;
    }

    return new Date(date + ' ' + time);
}

/**
 *
 * @param minSpaceValue
 * @param rooms
 * @returns {*}
 */
function filterSpace(minSpaceValue, rooms){
    if (!minSpaceValue) {
        return rooms;
    }

    return rooms.filter(function(room){
        return room.maxCapacity >= minSpaceValue;
    })
}


/**
 *
 * @param timeStart
 * @param timeEnd
 * @param rooms
 * @param bookings
 */
function filterByTime(timeStart, timeEnd, rooms, bookings) {
    if (!timeStart || !timeEnd || !rooms || !bookings) {
        return;
    }

    bookings.map(function(booking) {
        let bookingStartDate = new Date(booking.from * 1000);
        let bookingEndDate   = new Date(booking.to * 1000);

        if (
            (timeStart.getTime() < bookingStartDate.getTime() && timeEnd.getTime() > bookingStartDate.getTime())
            ||
            (timeStart.getTime() < bookingEndDate.getTime() && timeEnd.getTime() > bookingEndDate.getTime())
        ) {
            rooms.splice(booking.room, 1);
        }
    })
}