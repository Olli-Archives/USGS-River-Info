import { addRemoveSiteFromQuery, universalURLSearchParams, sliceSitesFromString } from './url-functions.js';



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
            console.log('site to add or remove', favorite.siteId);
            console.log('parameters from query', params);

            if(params.sites.includes(favorite.siteId)){
               // const slicedSites = sliceSitesFromString(params.sites);
                //console.log('****************site exists in query');
                //const newSites = slicedSites.filter(site => site !== favorite.siteId);
                //console.log('filtered', favorite.siteId, 'from sites', newSites);
                const newQuery = addRemoveSiteFromQuery('subtract', favorite.siteId, currentQuery);   
                window.location.hash = newQuery;
                console.log('new removed query isssss', newQuery);
                console.log('favorite site id', favorite.siteId);

            }
            else
            {
                console.log('********site not in query');
                const newQuery = addRemoveSiteFromQuery('add', favorite.siteId, currentQuery); 
                console.log('new  added query isssss', newQuery); 

                window.location.hash = newQuery;
            }
            //if(params.includes())


            //console.log('live data button hit');
            //const currentQuery = window.location.hash.slice(1);
            //console.log('currentQuery', currentQuery);
            //const newQuery = addRemoveSiteFromQuery('add', favorite.siteId, currentQuery);   
            //window.location.hash = newQuery;
        });
        favoritesNode.appendChild(dom);
    });
}