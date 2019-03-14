import renderRiverLi, { getListOfSiteIds, generateRiverInfo } from '../src/create-river.js';
import { createURL, createUrlParams } from './url-functions.js';
import './search-interface.js';
import { auth, favoritesByUserRef } from '../firebase/firebase.js';
import createHeader from './shared/create-header.js';
import loadFavorites from './create-favorites.js';

createHeader();

//query from url
let query = null;

function loadList() {
    query = window.location.hash.slice(1);
    const params = createUrlParams(query);
    const apiURL = createURL(params);

    if (!query) {
        return;
    }

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
    loadList();

    const userId = auth.currentUser.uid;
    const userFavoritesRef = favoritesByUserRef.child(userId);
    userFavoritesRef.once('value')
        .then(snapshot => {
            const value = Object.values(snapshot.val());
            console.log('load favorites director', value);
            loadFavorites(value);

        });
});


const logNode = document.getElementById('auth');
logNode.addEventListener('click', () => {
    console.log(auth);
});

