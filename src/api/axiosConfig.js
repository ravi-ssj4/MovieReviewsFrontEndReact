import axios from 'axios';

export default axios.create({
    baseURL: 'https://eed9-2401-4900-1cbd-7a33-386d-46c8-4971-c7ac.ngrok-free.app',
    headers: {'ngrok-skip-browser-warning': 'true'} // to avoid CORS - the server is hosted via ngrok(a different domain)
});