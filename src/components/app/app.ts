import AppController from '../controller/controller';
import { AppView, IApiData } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this.controller.getNews(e, (data: IApiData) => this.view.drawNews(data)));
        this.controller.getSources((data: IApiData) => this.view.drawSources(data));
    }
}

export default App;
