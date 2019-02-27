import axios from 'axios';

export default class Service {
    static usage(payload) {
        return axios.get('http://localhost:3000/usage',payload);
    }
}
