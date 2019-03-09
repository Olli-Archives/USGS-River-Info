import { siteIdToQuery } from './url-functions.js';

const flowNode = document.getElementById('checkbox-flow');
const heightNode = document.getElementById('checkbox-height');
const tempNode = document.getElementById('checkbox-temp');
const siteInputNode = document.getElementById('site-id');
const submitSiteIdNode = document.getElementById('submit-site-id');


//global variables
const pushedSiteIds = [];
//**** */new site id related actions****
export function handleNewSiteId(currentQuery) {
    const allSites = pushedSiteIds.toString();
    const params = { siteID: allSites };
    const query = siteIdToQuery(params, currentQuery);
    window.location.hash = query;
}


submitSiteIdNode.addEventListener('click', event => {
    event.preventDefault();
    const siteId = siteInputNode.value;
    pushedSiteIds.push(siteId);
    handleNewSiteId();
});


/////**** */check box related actions***
flowNode.addEventListener('change', () => {
    const checked = flowNode.checked;
    console.log('flow status', checked);
});

heightNode.addEventListener('change', () => {
    const checked = heightNode.checked;
    console.log('height status', checked);
});

tempNode.addEventListener('change', () => {
    const checked = tempNode.checked;
    console.log('height status', checked);
});

