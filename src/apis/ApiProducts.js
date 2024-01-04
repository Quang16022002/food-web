import axios from 'axios';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export const getApiProducts = async () => {
    try {
        const response = await axios.get(`${serverUrl}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getApiProductsSlide = async () => {
    try {
        const response = await axios.get(`${serverUrl}/slide`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getApiBanner = async () => {
    try {
        const response = await axios.get(`${serverUrl}/banner`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getProduct = async (id) => {
    try {
        const response = await axios.get(`${serverUrl}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};
