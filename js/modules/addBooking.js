document.getElementById("btnAddResa").addEventListener('click', function(event){
   event.preventDefault();

});

function isNotConflict(date, from, to){

    let dateToday = Date.now();
    let beginDate = new Date(date + ' ' + from).getTime();
    let toDate = new Date(date + ' ' + to).getTime();

    return (beginDate > dateToday && beginDate < toDate );
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.isNotConflict = isNotConflict;
}