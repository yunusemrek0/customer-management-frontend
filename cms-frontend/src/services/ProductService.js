import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/product/getAll';

export const listProduct = () => axios.get(REST_API_BASE_URL);
