import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: "http://127.0.0.1:3333",
    headers: {
      'Content-Type': 'application/json'
    }
});

const service = {
    getAllProdutos: async () => {
        return await axiosConfig.get('/produto');
    },
    getAllVendedores: async () => {
        return await axiosConfig.get('/vendedor');
    }
};

export default service;