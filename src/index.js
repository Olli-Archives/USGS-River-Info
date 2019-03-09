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

    const params = createUrlParams(query);
    const apiURL = createURL(params);
  
    fetch(apiURL)
        .then(response => response.json())
        .then(body => {
            const riversArray = body.value.timeSeries;
            createRiverTable(riversArray);
        })
        .catch(error => alert(error));
});




