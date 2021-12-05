export function alphabet() {
    let html = '',
        chr = '';
    for (let i = 65; i <= 90; i++) {
        chr = String.fromCharCode(i);
        html += '<a href="' + chr + '.html" class="alphabet">' + chr + '</a> ';
    }
    //console.log(html);
    return html;
}

const cars = 'Saab,Volvo,BMW,GMC,Nissan,Ford'.split(',');
let newElement: HTMLDivElement;
cars.forEach((item, idx) => {
    newElement = document.createElement('div');
    newElement.id = item;
    newElement.className = 'car';
    newElement.innerHTML = cars[idx];
    document.body.appendChild(newElement);
});
