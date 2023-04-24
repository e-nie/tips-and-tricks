import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { IPublishFormShape } from '../components/forms/types';
import { api } from '../api';
import { getToken } from '../lib/redux/selectors';

export const useCreateTip = () => {
    const client = useQueryClient();
    const token = useSelector(getToken);
    const mutation = useMutation((tip: IPublishFormShape) => {
        return api.createTip(tip, token);
    }, {
        onSettled() {
            void client.invalidateQueries('./tips');
        },
    });

    return mutation;
};
