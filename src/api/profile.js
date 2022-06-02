// Core
import axios from 'axios';
import waait from 'waait';

const requestDelay = 1000;

export const profileApi = Object.freeze({
    async getProfile(token) {
        const { data: profile } = await axios.get(
            `${process.env.REACT_APP_API_URL}/auth/profile`,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            },
        );

        await waait(requestDelay);

        return profile;
    },
});
