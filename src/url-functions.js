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