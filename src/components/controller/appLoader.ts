import Loader from './loader';

class AppLoader extends Loader {
    apiKey: string;
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '15b437ecd895412e884086ce49317cdd', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
