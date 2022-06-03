import { useQuery } from 'react-query';
import { ITipModel } from '../types/TipModel';
import { api } from '../api';

export const useTipById = (id: string) => {
    const { data, isFetchedAfterMount } = useQuery<ITipModel>(
        ['tips', id],
        () => api.getTipById(id),
    );

    return {
        isFetchedAfterMount,
        data,
    };
};
