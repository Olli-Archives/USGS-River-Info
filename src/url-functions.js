export function createQuery(params, currentQuery) {
    const query = new URLSearchParams(currentQuery);
    query.set('format', 'json');
    query.set('sites', params.siteID);
    query.set('parameterCd', '00060,00065');
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