// Core
import axios from 'axios';
import waait from 'waait';

const requestDelay = 1000;

export const tipsApi = Object.freeze({
    async getTips() {
        const { data: tips } = await axios.get(
            `${process.env.REACT_APP_API_URL}/tips`,
        );

        await waait(requestDelay);

        return tips;
    },
    async getTipById(id) {
        const { data: tipById } = await axios.get(
            `${process.env.REACT_APP_API_URL}/tips/${id}`,
        );

        await waait(requestDelay);

        return tipById;
    },
    async createTip(tip, token) {
        const config = {};
        if (token) {
            config.headers = {
                authorization: `Bearer ${token}`,
            };
        }
        const { data: newTip } = await axios.post(
            `${process.env.REACT_APP_API_URL}/tips`,
            tip,
            config,
        );

        await waait(requestDelay);

        return newTip;
    },
});
