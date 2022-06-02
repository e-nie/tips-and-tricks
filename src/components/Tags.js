
// Hooks
import { Link } from 'react-router-dom';
import {  useTags } from '../hooks';

// Helpers
import { getTagIcon, fetchify } from '../helpers';

export const Tags = ({ tipViewMode }) => {
    const {
        data, isFetched, setSelectedTagId, selectedTagId,
    } = useTags();

    const tagsJSX = Array.isArray(data) && data.map(({ id, name }) => {
        const TagIcon = getTagIcon(name);

        const handleClick = () => {
            setSelectedTagId(id);
        };

        return (
            <Link key = { id } to = { '/topic-by-tag' }>
                <span
                    data-active = { selectedTagId === id || tipViewMode === 'all-topics' }
                    className = 'tag'
                    onClick = { handleClick }>
                    <TagIcon />
                    { name }
                </span>
            </Link>
        );
    });

    return (
        <div className = 'tags'>
            { fetchify(isFetched, tagsJSX) }
        </div>
    );
};
