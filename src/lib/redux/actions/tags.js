import { tagTypes } from '../types';

export const tagActions = Object.freeze({
    setSelectedTagId: (selectedTagId) => {
        return {
            type:    tagTypes.SET_SELECTED_TAG_ID,
            payload: selectedTagId,
        };
    },
});
