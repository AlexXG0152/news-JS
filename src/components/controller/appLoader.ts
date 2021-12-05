import Loader from './loader';

interface Key {
    apiKey: string;
}

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '15b437ecd895412e884086ce49317cdd', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
