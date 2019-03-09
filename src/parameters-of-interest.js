import 

const flowNode = document.getElementById('checkbox-flow');
const heightNode = document.getElementById('checkbox-height');
const tempNode = document.getElementById('checkbox-temp');

flowNode.addEventListener('change', () => {
    const checked = flowNode.checked;
    console.log('flow status', checked);
});

heightNode.addEventListener('change', ()=>{
    const checked = heightNode.checked;
    console.log('height status', checked);
});

tempNode.addEventListener('change', ()=>{
    const checked = tempNode.checked;
    console.log('height status', checked);
});