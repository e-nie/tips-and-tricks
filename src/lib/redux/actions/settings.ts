import { settingTypes } from '../types';

export const settingsActions = Object.freeze({
    setSettingsOpen: (isSettingsOpen: boolean) => {
        return {
            type:    settingTypes.SET_SETTINGS_OPEN,
            payload: isSettingsOpen,
        };
    },
});
