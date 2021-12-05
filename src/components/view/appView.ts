import News from './news/news';
import INewsArticle from './news/news';
import ISource from './sources/sources';
import Sources from './sources/sources';

export interface IApiData {
    status: string,
    totalResults: Number,
    articles: Array<INewsArticle>;
    sources: Array<INewsArticle>;
}

export class AppView {
    news: News;
    sources: INewsArticle;
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
