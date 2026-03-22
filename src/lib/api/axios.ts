import axios from "axios";


const api = axios.create({
    baseURL: "www.thecocktaildb.com/api/json/v1/1/",
    timeout: 5000
})