// Core
import axios from 'axios';
import waait from 'waait';

const requestDelay = 1000;

export const authApi = Object.freeze({
    async signUp(user) {
        const { data: newUser } = await axios.post(
            `${process.env.REACT_APP_API_URL}/auth/registration`,
            user,
        );

        await waait(requestDelay);

        return newUser;
    },
    async login(credentials) {
        const { email, password } = credentials;
        const { data } = await axios.get(
            `${process.env.REACT_APP_API_URL}/auth/login`,
            {
                headers: {
                    Authorization: `Basic ${window.btoa(`${email}:${password}`)}`,
                },
            },
        );

        await waait(requestDelay);

        return data;
    },
});
