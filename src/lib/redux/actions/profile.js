import { api } from '../../../api';
import { profileTypes } from '../types';
import { authActions } from './auth';

export const profileActions = Object.freeze({
    startFetching: () => {
        return {
            type: profileTypes.START_FETCHING,
        };
    },

    stopFetching: () => {
        return {
            type: profileTypes.STOP_FETCHING,
        };
    },


    fetchProfile: (profile) => {
        return {
            type:    profileTypes.FETCH_PROFILE,
            payload: profile,
        };
    },

    fetchProfileAsync: (token) => async (dispatch) => {
        if (!token) {
            return null;
        }

        try {
            dispatch(profileActions.startFetching());

            const profile = await api.getProfile(token);

            dispatch(profileActions.fetchProfile(profile));
        } catch (error) {
            dispatch(authActions.setError(error.message));
        } finally {
            dispatch(profileActions.stopFetching());
        }
    },
});
