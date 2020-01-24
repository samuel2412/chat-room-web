import axios from 'axios';

const api = axios.create({
    baseURL: 'https://chat-room-4fe30.firebaseio.com/',
    //baseURL: 'http://localhost:5001/chat-room-4fe30/us-central1/app',
});

export default api;