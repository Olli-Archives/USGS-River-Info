import { generateRiverInfo, getListOfSiteIds } from '../src/create-river.js';
import { fetchBody } from '../data/river.js'; ///

const test = QUnit.test;

QUnit.module('FORMAT FETCH BODY');

test('GET LIST OF SITE IDS IN FETCH ', assert => {
    //arrange
    const expected = ['14092500', '14301000'];
    //act
    const actual = getListOfSiteIds(fetchBody);
    //assert
    assert.deepEqual(actual, expected);
});

test('using site id get all variables of interest', assert =>{
    //arrange
    const siteId = '14092500';
    const expected = ['DESCHUTES RIVER NEAR MADRAS, OR', '6.3 deg C', '4430 ft3/s', '2.96 ft'];
    //act
    const actual = generateRiverInfo(fetchBody, siteId);
    //assert
    assert.deepEqual(actual, expected);
});