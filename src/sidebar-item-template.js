export function createSideBarItem(item) {
    const template = document.createElement('template');
    const html = /*html*/
        `<div>
            <img src='www.fake.image.com'>
            <p>FIND RIVER</p> </div>
    `;
    template.innerHTML = html;
    return template.content;
}

export default function renderSidebarItems(items){
    const itemsContainer = document.getElementById('side-bar');
    items.forEach(item =>{
        const navItem = createSideBarItem(item);
        itemsContainer.appendChild(navItem);
    });
}