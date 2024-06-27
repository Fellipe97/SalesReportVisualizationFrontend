import axios from 'axios'

const BASEAPI = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:3001';

const useApi = {
    getAllReport: async () => {
        try {
            const res = await axios.get(`${BASEAPI}/getAllReport`);
            return res.data;
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            return { error: 'Erro ao realizar login.' }
        }
    },
}

export default () => useApi
