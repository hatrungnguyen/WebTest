import axios from 'axios';

export default axios.create({
    baseURL:'https://b06e-24-47-242-131.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true", "Access-Control-Allow-Origin": "true"}
});