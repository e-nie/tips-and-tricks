// Core
import { useQuery } from 'react-query';

// Instruments
import { api } from '../api';

export const useTips = () => {
    const query = useQuery('tips', api.getTips);
    const { data, isFetched } = query;

    return {
        data: Array.isArray(data?.data) ? data?.data : [],
        isFetched,
    };
};
