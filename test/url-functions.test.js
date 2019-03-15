import { writeToQuery, createURL, createUrlParams, universalURLSearchParams } from '../src/url-functions.js';



const test = QUnit.test;
QUnit.module('URL-UNCTIONS.TEST.JS');
test('SITE ID TO #', assert => {
    //takes current # and updates variables if need be
    

    //arrange
    const params = {
        siteId: '14301000',
        parameterCd: '00060,00065'
    };
    const expected = 'format=json&sites=14301000&parameterCd=00060%2C00065&siteType=ST&siteStatus=all';
    const currentQuery = 'format=json&sites=14401000&parameterCd=00061%2C00065&siteType=ST&siteStatus=all';
    //act/
    const actual = writeToQuery(params, currentQuery);
    //assert

    assert.equal(actual, expected);

});

//URL for fetch is used to get back info from the USGS API
test('MAKE URL for fetch from params', assert => {

    //arrange
    const expected = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=14301000&parameterCd=00060%2C00065&siteType=ST&siteStatus=all';
    const params =
    {
        parameterCd: '00060,00065',
        siteId: 14301000
    };
    //act
    const actual = createURL(params);
    //assert
    assert.equal(actual, expected);
});

test('CREATE PARAMS from url #', assert => {


    //arrange
    const query = 'format=json&sites=14301000&parameterCd=00060%2C00065&siteType=ST&siteStatus=all';
    const expected =
    {
        parameterCd: '00060,00065',
        siteId: '14301000'
    };

    //act
    const actual = createUrlParams(query);
    //assert
    assert.deepEqual(actual, expected);
});

test('create universal URLSearchParams, get format', assert => {
   
    //arrange
    const variablesOfInterest = ['format', 'sites'];
    const query = 'format=json&sites=14301000&parameterCd=00060%2C00065&siteType=ST&siteStatus=all';
    const expected = { format: 'json', sites: '14301000' };
    //act
    const actual = universalURLSearchParams(variablesOfInterest, query);
    //assert
    assert.deepEqual(actual, expected);
});