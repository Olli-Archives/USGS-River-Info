import { fetchBody } from '../data/river.js'; ///

const test = QUnit.test;


QUnit.module('FORMAT FETCH BODY');

test('GET LIST OF SITE IDS IN FETCH ', assert => {
    function getListOfSiteIds(fetchBody) {
        let siteCodes = [];
        const arrayOfInfo = fetchBody.value.timeSeries;
        arrayOfInfo.forEach(riverObject => {
            siteCodes.push(riverObject.sourceInfo.siteCode[0].value);
        });
        const listOfIds = siteCodes.filter((a, b) => siteCodes.indexOf(a) === b);
        return listOfIds;
    }

    //arrange
    const expected = ['14092500', '14301000'];


    //act
    const actual = getListOfSiteIds(fetchBody);



    //assert
    assert.deepEqual(actual, expected);
});

test('using site id get all variables of interest', assert =>{

    function fetchValues(body){
        const variablesOfInterest = [];

        const arrayOfInfo = body.value.timeSeries;
        const filteredBody = arrayOfInfo.filter(array => array.sourceInfo.siteCode[0].value === siteId);
        filteredBody.forEach(object =>{
            variablesOfInterest.push(`${object.values[0].value[0].value} ${object.variable.unit.unitCode}`);
        });
        return variablesOfInterest;
    }


    //arrange
    const siteId = '14092500';
    const expected = ['6.3 deg C', '4430 ft3/s', '2.96 ft'];
    //act
    const actual = fetchValues(fetchBody);
    //assert
    assert.deepEqual(actual, expected);
});