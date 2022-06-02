import { useQuery } from 'react-query';
import { api } from '../api';

export const useTipById = (id) => {
    const { data, isFetchedAfterMount } = useQuery(
        ['tips', id],
        () => api.getTipById(id),
    );

    return {
        isFetchedAfterMount,
        data: data || {},
    };
};
