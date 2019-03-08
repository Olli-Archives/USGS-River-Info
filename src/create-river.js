const riverTableNode = document.getElementById('river-table');

export function createRiver(river){
    const template = document.createElement('template');
    const html = /*html*/
    `
     <tr>
        <th>River:</th>
        <th>${river.value.timeSeries[0].sourceInfo.siteName}</th>
        <th>Flow (CFS):</th>
        <th>${river.value.timeSeries[0].values[0].value[0].value}</th>
    </tr>
    `;
    template.innerHTML = html;
    return template.content;
}

export default function createRiverTable(rivers){
    rivers.forEach(river=>{
        const tableItem = createRiver(river);
        riverTableNode.appendChild(tableItem);
        
    });
}