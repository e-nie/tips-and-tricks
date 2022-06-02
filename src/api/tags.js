// Core
import axios from 'axios';
import waait from 'waait';

const requestDelay = 1000;

export const tagsApi = Object.freeze({
    async getTags() {
        const { data: tags } = await axios.get(
            `${process.env.REACT_APP_API_URL}/tags`,
        );

        // Необходимо для симуляции задержки запроса сети и демонстрации работы спинеров.
        await waait(requestDelay);

        return tags;
    },
});
