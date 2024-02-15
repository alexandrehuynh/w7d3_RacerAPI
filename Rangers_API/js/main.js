// Split the functionality into multiple functions to show control flow & using asynchronous programming

// get the data from the api call
const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data)
    return response.data
}


// Create an object/dictionary to hold our DOM elements
const DOMElements = {
    'rangersList' : '.rangers-list' // accessing rangers-list from index.html
}

// create a function to make an HTML variable and interject into our html DOM (aka display our data)
const createList = (id, name, color, season, coin) => {
    const html = `<div id=${id} class='card mt-3 mb-3 style="width: 18rem;">
    <ul class='list-group list-group-flush' id=${name}>
    <li class='list-group-item'>${name}</li>
    <li class='list-group-item'>${color}</li>
    <li class='list-group-item'>${season}</li>
    <li class='list-group-item'>${coin}</li>
    </ul>
    </div>
    `
     // searching the DOM for class of .rangers-list and then inserting our html into that div
    document.querySelector(DOMElements['rangersList']).insertAdjacentHTML('beforeend',html)
}
// Create a function to "load" the data from the API
const loadData = async () => {
    const rangers = await getData()

    // We want to loop through rangers list of dictionaries and call the createList function for each dictionary. Need to match
    // the parameters of (id, name, color, season, coin) with arguments coming from the dictionaries
    // same as saying 'for ranger in rangers'
    rangers.forEach(ranger => {
        // const coin = ranger['power-coin'] ? ranger['power-coin'] : ranger['morp-coin']
        createList(ranger.id, ranger.name, ranger.color, ranger.season, ranger['power-coin'] || ranger['morp-coin']);
    });
}
// function to clear our data
const clearData = () => {
    document.querySelector(DOMElements['rangersList']).innerHTML = ""
}