
import { ReactElement } from 'react';

type ContentType = string | undefined | null | boolean | ReactElement[];

export const fetchify = (isFetched: boolean, content: ContentType) => {
    if (!isFetched) {
        return 'Загрузка...';
    }

    if (content) {
        return content;
    }

    return null;
};
