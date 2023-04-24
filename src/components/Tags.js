import { useContext } from 'react';

// Helpers
import { getTagIcon } from '../helpers';
import { Context } from '../lib/selectedTagContext';

// Mock data
import icons from '../mock-data/tags.json'; // импорт названий тэгов

export const Tags = () => {
    const [selectedTagId, setSelectedTagId] = useContext(Context);
    const tagsJSX = icons.map(({ id, name }) => {
        const TagIcon = getTagIcon(name);

        const handleClick = () => {
            setSelectedTagId(id);
        };

        return (
            <span
                data-active = { setSelectedTagId === id }
                key = { id }
                className = 'tag'
                onClick = { handleClick }>

                <TagIcon />
                { name }
            </span>
        );
    });

    return (
        <div className = 'tags'>
            { tagsJSX }

        </div>
    );
};
