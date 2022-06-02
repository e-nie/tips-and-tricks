import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { toastsOptions } from '../constants/toastOptions';
import { profileActions } from '../lib/redux/actions/profile';
import { getProfileState, getToken } from '../lib/redux/selectors';

export const useProfile = () => {
    const [isWelcomeMessageShown, setWelcomeMessageShown] = useState(false);
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();

    const storageToken = useSelector(getToken);
    const profileState = useSelector(getProfileState);

    const { isFetching, name } = profileState;

    useEffect(() => {
        dispatch(profileActions.fetchProfileAsync(token || storageToken));
    }, [storageToken]);


    useEffect(() => {
        if (!isFetching && name && !isWelcomeMessageShown) {
            toast.info(`Добро пожаловать ${name}`, toastsOptions);
            setWelcomeMessageShown(true);
        }
    }, [profileState, storageToken]);
};
