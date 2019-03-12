import { createRiverLiHtml } from '../src/create-river.js';
const test = QUnit.test;
import river from '../data/river.js';


QUnit.module('create a river for table');


test('create a template for river', assert => {

    //arrange
    const expected =
        /*html*/ `
    <li>
        <div>DESCHUTES RIVER NEAR MADRAS, OR</div>
        <div>Flow (CFS):</div>
        <div>1370</div>
    </li>
    `;
    //act
    const actual = createRiverLiHtml(river);
    
    //assert
    assert.htmlEqual(actual, expected);
});

