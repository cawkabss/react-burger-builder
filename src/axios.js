import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-e76f3.firebaseio.com'
});

export default instance;