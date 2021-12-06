/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { createAlphabet } from './alpha';
import './sources.css';

export interface DataSource {
    id: string | null;
    name: string | null;
    description: string | null;
    url: string | null;
    category: string | null;
    language: string | null;
    country: string | null;
}

class Sources {
    draw(data: Array<DataSource>): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item): void => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
        createAlphabet();
    }
}

export default Sources;
