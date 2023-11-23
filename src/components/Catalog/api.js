import axios from "axios";


let fetchTrolleybusesPromise = null;

export const fetchTrolleybusesApi = async (appliedFilters) => {
    if (!fetchTrolleybusesPromise) {
        fetchTrolleybusesPromise = axios.get('http://localhost:8080/trolleybuses', {
            params: appliedFilters,
        })
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching data:', error);
                return [];
            })
            .finally(() => {
                fetchTrolleybusesPromise = null;
            });
    }

    return fetchTrolleybusesPromise;
};

let fetchTrolleybusByIdPromise = {};

export const fetchTrolleybusByIdApi = async (itemId) => {
    if (!fetchTrolleybusByIdPromise[itemId]) {
        fetchTrolleybusByIdPromise[itemId] = axios.get(`http://localhost:8080/trolleybuses/${itemId}`)
            .then(response => response.data)
            .catch(error => {
                console.error(`Error fetching trolleybus data for ID ${itemId}:`, error);
                return null;
            })
            .finally(() => {
                delete fetchTrolleybusByIdPromise[itemId];
            });
    }

    return fetchTrolleybusByIdPromise[itemId];
};
