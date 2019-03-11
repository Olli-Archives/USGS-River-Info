import { createURL, createUrlParams } from './url-functions.js';
import createRiverTable from './create-river.js';
import './search-interface.js';


//query from url
let query = '';


//render river data on hash change
window.addEventListener('hashchange', () => {
    query = window.location.hash.slice(1);
    const params = createUrlParams(query);
    const apiURL = createURL(params);
    console.log('apiURL', apiURL);
    fetch(apiURL)
        .then(response => response.json())
        .then(body => {
            const riversArray = body.value.timeSeries;
            console.log('riversArray', riversArray);
            createRiverTable(riversArray);
        })
        .catch(error => console.log(error));
});



