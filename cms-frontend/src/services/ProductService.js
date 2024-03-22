import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/product/getAll';
const REST_API_BASE_URL2 = 'http://localhost:8080/product/save';
const REST_API_BASE_URL3 = 'http://localhost:8080/product/getById';
const REST_API_BASE_URL4 = 'http://localhost:8080/product/update';

export const listProduct = () => axios.get(REST_API_BASE_URL);

export const createProduct = (product) => axios.post(REST_API_BASE_URL2,product)

export const getProduct = (productId) => axios.get(REST_API_BASE_URL3+'/'+productId)

export const updateProduct = (productId,product) => axios.patch(REST_API_BASE_URL4+'/'+productId,product)
