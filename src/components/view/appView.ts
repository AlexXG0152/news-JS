import News from './news/news';
import { DataNews } from './news/news';
import Sources from './sources/sources';
import { DataSource } from './sources/sources';

export interface IApiData {
    status?: string;
    totalResults?: number;
    articles?: Array<DataNews>;
    sources?: Array<DataSource>;
}

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IApiData): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IApiData): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
