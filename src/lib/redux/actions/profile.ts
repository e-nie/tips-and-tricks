import { AppThunk } from '../init/store';
import { IProfile } from '../../../types/ProfileModel';
import { api } from '../../../api';
import { authActions } from './auth';
import { profileTypes } from '../types';

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


    fetchProfile: (profile: IProfile) => {
        return {
            type:    profileTypes.FETCH_PROFILE,
            payload: profile,
        };
    },

    fetchProfileAsync: (token: string): AppThunk => async (dispatch) => {
        if (!token) {
            return null;
        }

        try {
            dispatch(profileActions.startFetching());

            const profile = await api.getProfile(token);

            dispatch(profileActions.fetchProfile(profile));
        } catch (error) {
            const { message } = error as Error;
            dispatch(authActions.setError(message));
        } finally {
            dispatch(profileActions.stopFetching());
        }
    },
});
