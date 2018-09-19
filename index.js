function sum(a, b) {
    return a + b;
}

function loadData() {
    let client = new XMLHttpRequest();
    client.open('GET', 'data/data.json');
    client.onreadystatechange = function() {
        console.log(client.responseText);
    };
    client.send();
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.sum = sum;
    module.exports.loadData = loadData;
}