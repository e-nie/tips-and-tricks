
// Hooks
import { Link } from 'react-router-dom';
import {  useTags } from '../hooks';

// Helpers
import { getTagIcon, fetchify } from '../helpers';
import { TipViewMode } from '../types';

type Props = {
    tipViewMode: TipViewMode
};

export const Tags: React.FC<Props> = ({ tipViewMode }) => {
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
                    role = 'listitem'
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
