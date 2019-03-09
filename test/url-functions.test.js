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

    assert.equal(expected, actual);

});

test('create URL for fetch', assert =>{
    //arrange
    const expected = 
    //act
    //assert
    assert.equal(expected, actual);
});