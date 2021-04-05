import axios from "../../../cross-cutting/data-access";

export default {
    create: async (data) => {
        try {
            const response = await axios.post("/contact", data);
            return response;
        } catch (err) {
            return Promise.reject(err);
        }
    },
};