export function createFavoriteLi(firebaseObject){
    const html = /*html*/`
    <li>
        <span>${firebaseObject.locationName}</span>
        <button>GET LIVE DATA</button>
        <button>REMOVE FROM FAVORITES</button>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadFavorites(firebaseFavorites)
{
    const favoritesNode = document.getElementById('favorites-ul');
    const favorites = Object.values(firebaseFavorites);
    favorites.forEach(favorite =>{
        console.log('favorite', favorite);
        const dom = createFavoriteLi(favorite);
        favoritesNode.appendChild(dom);
    });
}