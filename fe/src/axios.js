import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api-chat.zayzay.site'
});

export default  instance;