import { createRiver } from '../src/create-river.js';
const test = QUnit.test;
import river from '../data/river.js';


QUnit.module('create a river for table');


test('create a template for river', assert => {

    //arrange
    const expected =
        /*html*/ `
    <tr>
        <th>River:</th>
        <th>DESCHUTES RIVER NEAR MADRAS, OR</th>
        <th>Flow (CFS):</th>
        <th>1370</th>
    </tr>
    `;
    //act
    const actual = createRiver(river);
    
    //assert
    assert.htmlEqual(actual, expected);
});

