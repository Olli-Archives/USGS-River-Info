import { writeToQuery, writeParameterCdToQuery } from './url-functions.js';

const heightNode = document.getElementById('checkbox-height');
const tempNode = document.getElementById('checkbox-temp');
const siteInputNode = document.getElementById('site-id');
const submitSiteIdNode = document.getElementById('submit-site-id');
let currenQuery;


function updateQuery(){
    currenQuery = window.location.hash.slice(1);
}


//global variables
const pushedSiteIds = [];
let waterParams = ['00060'];
let filteredWaterParams;


//filter params
function filterWaterParams(){
    filteredWaterParams = waterParams.filter(param => param.length > 1);
}


//**** */new site id related actions****
function handleNewSiteId() {
    const allSites = pushedSiteIds.toString();
    const params = { siteId: allSites };
    const newQuery = writeToQuery(params, currenQuery);
    window.location.hash = newQuery;
}


submitSiteIdNode.addEventListener('click', event => {
    event.preventDefault();
    const siteId = siteInputNode.value;
    pushedSiteIds.push(siteId);
    handleNewSiteId();
});


/////**** */check box related actions***


heightNode.addEventListener('change', () => {
    updateQuery();
    heightNode.checked ? waterParams[1] = '00065' : waterParams[1] = '';
    filterWaterParams();

    const params = { parameterCd : filteredWaterParams.toString() };
    const newQuery = writeParameterCdToQuery(params, currenQuery);
    window.location.hash = newQuery;
});

tempNode.addEventListener('change', () => {
    updateQuery();
    tempNode.checked ? waterParams[2] = '00010' : waterParams[2] = '';
    filterWaterParams();
    const params = { parameterCd : filteredWaterParams.toString() };
    const newQuery = writeParameterCdToQuery(params, currenQuery);
    window.location.hash = newQuery;
});

