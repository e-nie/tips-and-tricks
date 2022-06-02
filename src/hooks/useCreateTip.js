import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { api } from '../api';
import { getToken } from '../lib/redux/selectors';

export const useCreateTip = () => {
    const client = useQueryClient();
    const token = useSelector(getToken);
    const mutation = useMutation((tip) => {
        return api.createTip(tip, token);
    }, {
        onSettled() {
            client.invalidateQueries('./tips');
        },
    });

    return mutation;
};
