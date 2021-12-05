import News from './news/news';
import Article from './news/news';
import Source from './sources/sources';
import Sources from './sources/sources';

export interface IApiData {
    status: string,
    totalResults: Number,
    articles: Array<Article>;
    sources: Array<Source>;
}

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IApiData) :void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IApiData) :void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
