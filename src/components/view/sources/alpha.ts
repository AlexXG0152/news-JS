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
