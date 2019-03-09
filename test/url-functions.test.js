const test = QUnit.test;

QUnit.module('CREATE API QUERY');


function createURL(params){
    const query = new URLSearchParams;
    query.set('format', 'json');
    query.set('sites', params.siteID);
    query.set('parameterCd', '00060,00065');
    query.set('siteType', 'ST');
    query.set('siteStatus', 'all');
    return query.toString();
}

test('create query from params', assert => {
    //arrange
    const params = {
        siteID: 14301000
    };
    const expected = 'format=json&sites=14301000&parameterCd=00060%2C00065&siteType=ST&siteStatus=all';
    //act/
    const actual = createURL(params);
    //assert

    assert.equal(actual, expected);

});

test('create URL for fetch', assert =>{

    function createURL(query, params){
        const URL_BASE = 'https://waterservices.usgs.gov/nwis/iv/?';
        const ApiURL = new URL(URL_BASE);
        ApiURL.searchParams.set('format', 'json');
        ApiURL.searchParams.set('sites', params.siteID);
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
        siteID: 14301000
    };
    //act
    const actual = createURL(query, params);
    //assert
    assert.equal(actual, expected);
});