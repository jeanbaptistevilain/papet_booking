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


function searchHandler(){
    const dateValue      = date.value;
    const timeStartValue = timeStart.value;
    const timeEndValue   = timeEnd.value;
    const minSpaceValue  = minSpace.value;
    resultList.innerHTML = '';
    let rooms = null;

    $.get("data/data-test.json", {}, function (data) {
        rooms = data.rooms;
        
        if (!rooms){
            return;
        }

        let formatedRooms = rooms;

        if (minSpaceValue) {
            formatedRooms = rooms.filter(function(room){
                return room.maxCapacity >= minSpaceValue;
            })
        }

        formatedRooms.map(function(room){
            addRow(room);
        })
    })
}