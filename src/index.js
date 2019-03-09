import { handleNewSiteId } from './parameters-of-interest.js';
import { createURL, createUrlParams } from './url-functions.js';
import createRiverTable from './create-river.js';
import './parameters-of-interest.js';

//query from url
let query = '';
// call back to feed current query to check boxes
handleNewSiteId(query);







//render river data on hash change
window.addEventListener('hashchange', () => {
    query = window.location.hash.slice(1);
    console.log('hash change detected, query:', query);
    const params = createUrlParams(query);
    const apiURL = createURL(params);  
    console.log('created fetch url from new hash', apiURL);
    fetch(apiURL)
        .then(response => response.json())
        .then(body => {
            const riversArray = body.value.timeSeries;
            createRiverTable(riversArray);
            
        })
        .catch(error => console.log(error));


});

//render river elements to table


