document.getElementById("btnAddResa").addEventListener('click', function(event){
   event.preventDefault();

    const inputDateResa = document.getElementById("date").value;
    let dateToday = Date.now();
    let dateResa = new Date(inputDateResa).getTime();

    console.log(dateToday);

    if(dateResa < dateToday){
        console.log("impossible");
    }

});