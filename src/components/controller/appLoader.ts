import Loader from './loader';

class AppLoader extends Loader {
    apiKey: string;
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '0e6720f9c18542a7b8226621498f81c5', // получите свой ключ https://newsapi.org/ 15b437ecd895412e884086ce49317cdd
        });
    }
}

export default AppLoader;
