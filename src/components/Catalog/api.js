import axios from "axios";

export const fetchTrolleybusesApi = async (appliedFilters) => {
    try {
        const response = await axios.get('http://localhost:8080/trolleybuses', {
            params: appliedFilters,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export const fetchTrolleybusByIdApi = async (itemId) => {
    try {
        const response = await axios.get(`http://localhost:8080/trolleybuses/${itemId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching trolleybus data:', error);
        return null;
    }
};
