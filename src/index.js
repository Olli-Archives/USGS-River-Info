import renderRiverLi, { getListOfSiteIds, generateRiverInfo } from '../src/create-river.js';
import { createURL, createUrlParams } from './url-functions.js';
import './search-interface.js';
import { auth } from '../firebase/firebase.js';
import createHeader from './shared/create-header.js';

createHeader();

//query from url
let query = '';



function loadList(){
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



}

//render river data on hash change
window.addEventListener('hashchange', loadList);
auth.onAuthStateChanged(() => {
    if(auth.currentUser)
    { 
        console.log('user logged in, loading list');
        loadList();
    }
});



const logNode = document.getElementById('auth');
logNode.addEventListener('click', ()=>{
    console.log(auth);
});

