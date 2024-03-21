import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/product/getAll';
const REST_API_BASE_URL2 = 'http://localhost:8080/product/save';

export const listProduct = () => axios.get(REST_API_BASE_URL);

export const createProduct = (product) => axios.post(REST_API_BASE_URL2,product)
