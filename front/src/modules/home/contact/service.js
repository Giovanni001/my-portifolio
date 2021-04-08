import axios from "../../../cross-cutting/data-access";

// eslint-disable-next-line import/no-anonymous-default-export
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