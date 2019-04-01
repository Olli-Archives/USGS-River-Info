export default function createFieldset(){
    const fieldSetContainer = document.getElementById('fieldset-container');
    const template = document.createElement('template');
    const html = /*html*/
    `
    <fieldset>
        <legend style="border: 1px white solid;margin-left: 1em; padding: 0.2em 0.8em ">Live Data</legend>
        <section id="live-data">
            <ul id="river-table"></ul>
        </section>
        <p id="empty-table-message">You have not chosen any rivers to display data for. To display data for
            any
            river with a USGS site ID,
            go to the search tab and add a river, or display rivers from your favorites.
        </p>
    </fieldset>
    `;
    template.innerHTML = html;
    fieldSetContainer.appendChild(template.content);
}


