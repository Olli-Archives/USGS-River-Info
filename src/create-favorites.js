import { addRemoveSiteFromQuery, universalURLSearchParams } from './url-functions.js';

let params;
let currentQuery;
const favoritesNode = document.getElementById('favorites-ul');

function updateParams() {
    currentQuery = window.location.hash.slice(1);
    params = universalURLSearchParams(['sites', 'parameterCd'], currentQuery);
}

export function createFavoriteLi(firebaseObject) {

    const html = /*html*/`
    <li>
        <button id=${firebaseObject.siteId} class="live-data-btn">LIVE DATA</button>
        <span>${firebaseObject.locationName}</span>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadFavorites(firebaseFavorites) {


    while (favoritesNode.children.length > 0) {
        favoritesNode.firstChild.remove();
    }

    const favorites = Object.values(firebaseFavorites);

    favorites.forEach(favorite => {
        updateParams();

        const dom = createFavoriteLi(favorite);
        const buttonNode = dom.querySelector('.live-data-btn');
        buttonNode.addEventListener('click', () => {
            updateParams();



            if (params && params.sites && params.sites.includes(favorite.siteId)) {
                const riverTableNode = document.getElementById('river-table');
                if (riverTableNode.children.length > 1) {
                    addRemoveSiteFromQuery('subtract', favorite.siteId, currentQuery);
                 
                }
                else if (riverTableNode.children.length > 0) {
                    riverTableNode.removeChild(riverTableNode.firstChild);
                    addRemoveSiteFromQuery('subtract', favorite.siteId, currentQuery);
                    const button = document.getElementById(favorite.siteId);
                    button.classList.remove('live');
                    console.log(riverTableNode.children.length);
                    const liveContainer = document.getElementById('live-container');
                    console.log('adding hidden');
                    liveContainer.classList.add('hidden');
                    }
                }
            
            else {
                addRemoveSiteFromQuery('add', favorite.siteId, currentQuery);
            }
        });
        favoritesNode.appendChild(dom);
        if (params.sites.includes(favorite.siteId)) {
            const button = document.getElementById(favorite.siteId);
            button.classList.add('live');
        }
    });
}


