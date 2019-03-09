const test = QUnit.test;

QUnit.module('CREATE API QUERY');



test('MAKE # for url from new params', assert => {
    //takes current # and updates variables if need be
    function createQuery(params, currentQuery) {
        const query = new URLSearchParams(currentQuery);
        query.set('format', 'json');
        query.set('sites', params.siteID);
        query.set('parameterCd', '00060,00065');
        query.set('siteType', 'ST');
        query.set('siteStatus', 'all');
        return query.toString();
    }

    //arrange
    const params = {
        siteID: 14301000,
        parameterCd: '00060,00065'
    };
    const expected = 'format=json&sites=14301000&parameterCd=00060%2C00065&siteType=ST&siteStatus=all';
    const currentQuery = 'format=json&sites=14401000&parameterCd=00061%2C00065&siteType=ST&siteStatus=all';
    //act/
    const actual = createQuery(params, currentQuery);
    //assert

    assert.equal(actual, expected);

});

//URL for fetch is used to get back info from the USGS API
test('MAKE URL for fetch', assert => {
    function createURL(query, params) {
        const URL_BASE = 'https://waterservices.usgs.gov/nwis/iv/?';
        const ApiURL = new URL(URL_BASE);
        ApiURL.searchParams.set('format', 'json');
        ApiURL.searchParams.set('sites', params.siteId);
        ApiURL.searchParams.set('parameterCd', params.parameterCd);
        ApiURL.searchParams.set('siteType', 'ST');
        ApiURL.searchParams.set('siteStatus', 'all');
        return ApiURL.toString();
    }

    //arrange
    const expected = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=14301000&parameterCd=00060%2C00065&siteType=ST&siteStatus=all';
    const query = 'format=json&sites=14301000&parameterCd=00060%2C00065&siteType=ST&siteStatus=all';
    const params =
    {
        parameterCd: '00060,00065',
        siteId: 14301000
    };
    //act
    const actual = createURL(query, params);
    //assert
    assert.equal(actual, expected);
});

test('READ PARAMS from url #', assert => {

    function createUrlParams(query) {
        const UrlParams = new URLSearchParams(query);
        const siteId = UrlParams.get('sites');
        const parameterCd = UrlParams.get('parameterCd');
        const params =
        {
            parameterCd: parameterCd,
            siteId: parseInt(siteId)
        };
        return params;

    }

    //arrange
    const query = 'format=json&sites=14301000&parameterCd=00060%2C00065&siteType=ST&siteStatus=all';
    const expected =
    {
        parameterCd: '00060,00065',
        siteId: 14301000
    };

    //act
    const actual = createUrlParams(query);
    //assert
    assert.deepEqual(actual, expected);
});