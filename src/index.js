import renderRiverLi, { getListOfSiteIds, generateRiverInfo } from '../src/create-river.js';
import { createURL, createUrlParams } from './url-functions.js';
import './search-interface.js';
import { auth } from '../firebase/firebase.js';

//query from url
let query = '';


//render river data on hash change
window.addEventListener('hashchange', () => {
    query = window.location.hash.slice(1);
    const params = createUrlParams(query);
    const apiURL = createURL(params);
    fetch(apiURL)
        .then(response => response.json())
        .then(body => {
            const listOfSites = getListOfSiteIds(body);
            listOfSites.forEach(siteId => {  
                //relocate riverIfno         
                const riverInfo = generateRiverInfo(body, siteId);  
                renderRiverLi(riverInfo, listOfSites);
            });      
        })
        .catch(error => console.log(error));
});


const logNode = document.getElementById('auth');
logNode.addEventListener('click', ()=>{
    console.log(auth);
});

