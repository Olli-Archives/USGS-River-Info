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

export default function loadFavorites(firebaseObject){
    const favoritesNode = document.getElementById('favorites-ul');
    const dom = createFavoriteLi(firebaseObject);
    favoritesNode.appendChild(dom);

}