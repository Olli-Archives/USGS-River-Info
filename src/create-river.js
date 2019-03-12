const riverTableNode = document.getElementById('river-table');


export function generateRiverInfo(body, siteId) {
    const variablesOfInterest = [];
    const arrayOfInfo = body.value.timeSeries;
    const filteredBody = arrayOfInfo.filter(array => array.sourceInfo.siteCode[0].value === siteId);
    variablesOfInterest.push(filteredBody[0].sourceInfo.siteName);
    filteredBody.forEach(object => {
        variablesOfInterest.push(`${object.values[0].value[0].value} ${object.variable.unit.unitCode}`);
    });
    return variablesOfInterest;
}

export function getListOfSiteIds(fetchBody) {
    let siteCodes = [];
    const arrayOfInfo = fetchBody.value.timeSeries;
    arrayOfInfo.forEach(riverObject => {
        siteCodes.push(riverObject.sourceInfo.siteCode[0].value);
    });
    const listOfIds = siteCodes.filter((a, b) => { 
        return siteCodes.indexOf(a) === b; });
    return listOfIds;
}

export function createRiverLiHtml(river) {
    let innerHtml = '';
    river.forEach(item => {
        innerHtml = innerHtml + `<div>${item}</div>`;
    });
    const html = `<li>${innerHtml}</li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}


export default function renderRiverLi(river, listOfSites) {
    while(riverTableNode.children.length >= listOfSites.length) {
        riverTableNode.firstElementChild.remove();
    }

    const tableItem = createRiverLiHtml(river);
    riverTableNode.appendChild(tableItem);


}



