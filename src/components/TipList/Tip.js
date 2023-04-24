// Helpers
import { getTagIcon } from '../../helpers';


// icons
import { icons } from '../../theme/icons/tag';

export const Tip = (props) => {
    // console.log(props);
    const {
        title, created, author, preview, tag,
    } = props;

    const TagIcon  = getTagIcon(tag.name);

    return (
        <article>
            <header>
                <TagIcon /> <h1>{ title }</h1>
            </header>
            <main>
                <time>
                    <TagIcon />
                    <div>
                        <span> 🚀  { created }</span>
                        <span> 👨🏼 Автор: { author }</span>
                    </div>
                </time>
                <h2>{ title }</h2>
                <p>{ preview }</p>
            </main>
            <footer>
                <a href = '#'>📖  &nbsp;Читать полностью &rarr;</a>
            </footer>
        </article>
    );
};
