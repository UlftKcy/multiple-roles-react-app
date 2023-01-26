import axios from "axios";

const authApi = axios.create({
    baseURL: 'https://63d274a106556a0fdd3ca5c8.mockapi.io',
    /* withCredentials: true, */
});

/* authApi.defaults.headers.common['Content-Type'] = 'application/json'; */

export const getUser = async (data) => {
    try {
        console.log(data)
        const response = await authApi.get(`/users/${data.userId}`);
        return response.data
    } catch (error) {
        throw new Error("Something is wrong", { cause: error })
    }
}

export const createUser = async (newUser) => {
    try {
        const response = await authApi.post('/users', newUser);
        return response.data;
    } catch (error) {
        throw new Error("Something is wrong!", { cause: error })
    }
}