import { useQuery } from 'react-query';
import { ITipModel } from '../types/TipModel';
// Core

// Instruments
import { api } from '../api';

export const useTips = () => {
    const query = useQuery<ITipModel[]>('tips', api.getTips);
    const { data, isFetched } = query;

    return {
        data: Array.isArray(data) ? data : [],
        isFetched,
    };
};
