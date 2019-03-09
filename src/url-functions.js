export function siteIdToQuery(params, currentQuery) {
    console.log('params', params);
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

export function createUrlParams(query) {
    console.log('query passed from hash change', query);
    const UrlParams = new URLSearchParams(query);
    const siteId = UrlParams.get('sites');
    const parameterCd = UrlParams.get('parameterCd');
    const params =
    {
        parameterCd: parameterCd,
        siteId: siteId
    };
    console.log('search params created', params);
    return params;
}

