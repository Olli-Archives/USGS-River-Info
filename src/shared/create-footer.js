const template = document.createElement('template');


export default function createFooter() {
    const html = /*html*/
    `
    <footer>
        <p id="credit">POWERED BY USGS</p>
            <div>
                <img src='../data/logo.svg'>
                <p>SteelFace Designs</p>
            </div>
    </footer>
`;

    template.innerHTML = html;

    const footerNode = document.getElementById('footer');
    footerNode.appendChild(template.content);
}