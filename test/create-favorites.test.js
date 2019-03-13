const test = QUnit.test;

QUnit.module('CREATE-FAVORITES.TEST.JS');

test('create li for fav. river', assert => {

    function createFavoriteLi(firebaseObject){
        const html = /*html*/`
        <li>
            <span>${firebaseObject.locationName}</span>
            <button>GET LIVE DATA</button>
            <button>REMOVE FROM FAVORITES</button>
        </li>
        `;
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content;
    }

    //arrange
    const firebaseObject = {
        locationName: 'DESCHUTES RIVER NEAR MADRAS, OR',
        siteId: '14092500'
    };
    const expected = /*html*/`
<li>
    <span>DESCHUTES RIVER NEAR MADRAS, OR</span>
    <button>GET LIVE DATA</button>
    <button>REMOVE FROM FAVORITES</button>
 </li>`;
    //act
    const actual = createFavoriteLi(firebaseObject);
    //assert
    assert.htmlEqual(actual, expected);

});