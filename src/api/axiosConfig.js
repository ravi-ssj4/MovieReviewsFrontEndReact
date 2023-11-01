import axios from 'axios';

export default axios.create({
    baseURL: 'https://9501-2401-4900-1cbc-6e87-c5d2-cc86-9d85-865f.ngrok-free.app',
    headers: {'ngrok-skip-browser-warning': 'true'} // to avoid CORS - the server is hosted via ngrok(a different domain)
});