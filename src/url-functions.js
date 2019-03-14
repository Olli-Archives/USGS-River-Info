export function writeToQuery(params, currentQuery) {
    const query = new URLSearchParams(currentQuery);
    query.set('format', 'json');
    query.set('sites', params.siteId ? params.siteId : '');
    query.set('parameterCd', params.parameterCd ? params.parameterCd : '00060');
    query.set('siteType', 'ST');
    query.set('siteStatus', 'all');
    return query.toString();
}

export function createURL(params) {
    const URL_BASE = 'https://waterservices.usgs.gov/nwis/iv/?';
    const ApiURL = new URL(URL_BASE);
    ApiURL.searchParams.set('format', 'json');
    ApiURL.searchParams.set('sites', params.siteId);
    ApiURL.searchParams.set('parameterCd', params.parameterCd);
    ApiURL.searchParams.set('siteType', 'ST');
    ApiURL.searchParams.set('siteStatus', 'all');
    return ApiURL.toString();
}

export function createUrlParams(query) {
    const UrlParams = new URLSearchParams(query);
    const siteId = UrlParams.get('sites');
    const parameterCd = UrlParams.get('parameterCd');
    const params =
    {
        parameterCd: parameterCd,
        siteId: siteId
    }; 
    return params;
}

export function writeParameterCdToQuery(params, currentQuery) {
    const query = new URLSearchParams(currentQuery);
    query.set('parameterCd', params.parameterCd ? params.parameterCd : '00060');
    return query.toString();
}

export function sliceSitesFromString(sites) {
    const numberOfSites = Math.ceil(sites.length / 9);
    let startIndex = [];
    let endIndex = [];

    let slicedSites = [];
    for(let i = 0; i < numberOfSites; i++) {
        startIndex = (i * 9);
        endIndex = ((i * 9) + 8);
        slicedSites.push(sites.slice(startIndex, endIndex));
    }
    return slicedSites;
}

export function addRemoveSiteFromQuery(option, siteId, query) {
    const currentUrlParams = createUrlParams(query);

    let listOfSites = [];
    if(option === 'add') {

        listOfSites.push(currentUrlParams.siteId);
        listOfSites.push(siteId);
        const newParams = {
            parameterCd: currentUrlParams.parameterCd,
            siteId: listOfSites
        };
        const newQuery = writeToQuery(newParams, query);
        return newQuery;
    }
    else if(option === 'subtract') {
        //check if site id exists in current query
        const currentSites = currentUrlParams.siteId;
        const includes = currentSites.includes(siteId);
        if(includes) {
            const slicedSites = sliceSitesFromString(currentSites);
            const newSites = slicedSites.filter(site => site !== siteId.toString());
            const newParams = {
                parameterCd: currentUrlParams.parameterCd,
                siteId: newSites.toString()
            };
            const newQuery = writeToQuery(newParams, query);
            return newQuery;
        }
        else {
            console.log('site to be subtraced doesnt exist');
        }}}