import { addRemoveSiteFromQuery, universalURLSearchParams } from './url-functions.js';



export function createFavoriteLi(firebaseObject){
    const html = /*html*/`
    <li>
        <button class="live-data-btn">GET LIVE DATA</button>
        <span>${firebaseObject.locationName}</span>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}


export default function loadFavorites(firebaseFavorites)
{
    const favoritesNode = document.getElementById('favorites-ul');


    while(favoritesNode.children.length > 0){
        favoritesNode.firstChild.remove();
    }

    const favorites = Object.values(firebaseFavorites);
    favorites.forEach(favorite =>{
          
        const dom = createFavoriteLi(favorite);
        const buttonNode = dom.querySelector('.live-data-btn');
        buttonNode.addEventListener('click', ()=>{
            const currentQuery = window.location.hash.slice(1);
            const params = universalURLSearchParams(['sites', 'parameterCd'], currentQuery);

            if(params.sites.includes(favorite.siteId)){
                const riverTableNode = document.getElementById('river-table');
                if(riverTableNode.children.length > 1)
                {
                    addRemoveSiteFromQuery('subtract', favorite.siteId, currentQuery);   
                }
                else if(riverTableNode.children.length > 0)
                {
                    riverTableNode.removeChild(riverTableNode.firstChild);  
                }
            }
            else
            {
                console.log('side id not in system,adding to query params are2@@:::', favorite.siteId, currentQuery);
                addRemoveSiteFromQuery('add', favorite.siteId, currentQuery); 
            }
        });
        favoritesNode.appendChild(dom);
    });
}