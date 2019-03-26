export function createSideBarItem(item) {
    const template = document.createElement('template');
    const html = /*html*/
        `<div>
            <img src=${item.src}>
            <p>${item.p}</p> </div>
    `;
    template.innerHTML = html;
    return template.content;
}

export default function renderSidebarItems(items) {
    const itemsContainer = document.getElementById('side-bar');
    const itemIds = [];
    const data = document.getElementById('live-data');

    items.forEach(item => {
        itemIds.push(item.section);


        const navItem = createSideBarItem(item);
        const div = navItem.querySelector('div');
        div.addEventListener('click', () => {
            const section = document.getElementById(item.section);
            if(section.className === 'hidden') {
                section.classList.remove('hidden');
                const otherIds = itemIds.filter(id => id !== item.section);
                otherIds.forEach(id => {
                    console.log('filteted id', id);
                    const section = document.getElementById(id);
                    section.classList.add('hidden');
                    data.classList.add('hidden');
       
                });
            }
            else {
                section.classList.add('hidden');
                data.classList.remove('hidden');
            }
        });
        itemsContainer.appendChild(navItem);
    });

 
}