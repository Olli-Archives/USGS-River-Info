const riverTableNode = document.getElementById('river-table');



export function createRiver(river) {
    console.log('passed in river in test,', river);
    const template = document.createElement('template');
    const html = /*html*/
        `
     <tr>
        <th>River:</th>
        <th>${river.sourceInfo.siteName ? river.sourceInfo.siteName : null}</th>
        <th>${river.variable.variableName}:</th>
        <th>${river.values[0].value[0].value}</th>
    </tr>
    `;
    template.innerHTML = html;
    return template.content;
}

export default function createRiverTable(rivers) {
    while(riverTableNode.children.length > 0){
        riverTableNode.firstElementChild.remove();
    }
    rivers.forEach(river => {
        const tableItem = createRiver(river);
        riverTableNode.appendChild(tableItem);

    });
}



