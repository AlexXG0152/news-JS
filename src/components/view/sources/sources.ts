import './sources.css';

export interface ISource {
    readonly id: string | null;
    readonly name: string | null;
    readonly description: string | null;
    readonly url: string | null;
    readonly category: string | null;
    readonly language: string | null;
    readonly country: string | null;
}

class Sources {
    draw(data: Array<ISource>): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item): void => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            
            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
