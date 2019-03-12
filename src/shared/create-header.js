

export function createAuthHeaderComponent(user){
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