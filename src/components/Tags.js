// Helpers
import { getTagIcon } from '../helpers';

// Mock
import icons from '../mock-data/tags.json';

export const Tags = () => {
    const tagsJSX = icons.map(({ id, name }) => {
        const TagIcon = getTagIcon(name);

        return (
            <span
                data-active = { true }
                key = { id }
                className = 'tag'>
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
