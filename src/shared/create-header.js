

import { auth } from '../../firebase/firebase.js';

export function createAuthHeaderComponent(user) {
    const template = document.createElement('template');
    const html = `
    <div class="profile">
        <span>Welcome ${user.user}</span>
        <button>Sign Out</button>
    </div>
    `;
    template.innerHTML = html;
    return template.content;
}

export function createNoUserHeader() {
    const template = document.createElement('template');
    const html = /*html*/`
    <header>
        <img>
        <h1>My River Info</h1>
    </header>
    `;
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function createHeader(options) {
    const dom = createNoUserHeader();
    const header = dom.querySelector('header');
    headerContainer.appendChild(dom);

}
