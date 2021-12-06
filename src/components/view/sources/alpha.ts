/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
export function alphabet(): string {
    let html = '',
        chr = '';
    for (let i = 65; i <= 90; i++) {
        chr = String.fromCharCode(i);
        html += `<button id="${chr}" class="alphabet">${chr}</button>`;
    }
    return html;
}

export function createAlphabet(): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#alphabetItemTemp') as HTMLTemplateElement;
    let chr = '';
    for (let i = 65; i <= 90; i++) {
        chr = String.fromCharCode(i);
        const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
        sourceClone.querySelector('.alphabet__item-name').textContent = chr;
        sourceClone.querySelector('.alphabet__item').setAttribute('alphabet-source-id', chr);
        fragment.append(sourceClone);
    }
    document.querySelector('.alphabet').append(fragment);
}
