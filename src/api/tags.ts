// Core
import axios from 'axios';
import waait from 'waait';
import { ITagModel } from '../types/TagModel';

const requestDelay = 0;

export const tagsApi = Object.freeze({
    async getTags(): Promise<ITagModel[]> {
        const { data: tags } = await axios.get<ITagModel[]>(
            `${process.env.REACT_APP_API_URL}/tags`,
        );

        // Необходимо для симуляции задержки запроса сети и демонстрации работы спинеров.
        await waait(requestDelay);

        return tags;
    },
});
