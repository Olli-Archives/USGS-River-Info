import { createSideBarItem } from '../src/sidebar-item-template.js';

const test = QUnit.test;

QUnit.module('SIDEBAR-ITEM-TEMPLATE.JS');

test('create sidebar item', assert => {

    //arrange

    const fakeData =
    {
        src: 'www.fake.img.com',
        p: 'FIND RIVER'

    };

    const expected = /*html*/ `
<div>
    <img src="www.fake.image.com">
      <p>FIND RIVER</p>
 </div>
`;
    //act
    const actual = createSideBarItem(fakeData);

    //assert
    assert.htmlEqual(actual, expected);

});