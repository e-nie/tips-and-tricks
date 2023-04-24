// Core
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Hooks
import { useTipById } from '../../hooks';

// Helpers
import { fetchify, formatDate, getTagIcon } from '../../helpers';

export const TipView = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { data: tipToView, isFetchedAfterMount } = useTipById(params.id);
    const TagIcon = getTagIcon(tipToView?.tag?.name);

    useEffect(() => {
        if (!tipToView && isFetchedAfterMount) {
            navigate('..', { replace: true });
        }
    }, [tipToView, isFetchedAfterMount]);

    const goBack = () => {
        navigate('..');
    };

    return (
        <>
            <article>
                <header>
                    <TagIcon />
                    { fetchify(false, tipToView?.title) }
                </header>
                <main>
                    <time>
                        <TagIcon />
                        <div>
                            <span>🚀 { fetchify(false, formatDate(tipToView?.created)) }</span>
                            <span>👨🏼‍🚀 { fetchify(false, tipToView?.author) }</span>
                        </div>
                    </time>
                </main>

                <footer>
                    <a onClick = { goBack }>&larr;&nbsp;Назад</a>
                </footer>
            </article>

            <main>{ fetchify(false, tipToView?.body) }</main>
        </>
    );
};
