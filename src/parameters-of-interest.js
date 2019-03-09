const flowNode = document.getElementById('checkbox-flow');
const heightNode = document.getElementById('checkbox-height');
const tempNode = document.getElementById('checkbox-temp');

flowNode.addEventListener('change', () => {
    this.change?  {Window.location.hash = 'true'}: {};
    console.log('checked');
});