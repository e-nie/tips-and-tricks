// Types
import { AnyAction } from 'redux';
import { settingTypes } from '../types';

const initialState = {
    isSettingsOpen: false,
};

export const settingsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case settingTypes.SET_SETTINGS_OPEN: {
            return {
                ...state,
                isSettingsOpen: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
