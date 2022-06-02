// Icons
import { icons } from '../../theme/icons/tag';

export const Tip = () => {
    return (
        <article>
            <header>
                <icons.JavaScript /> <h1>Умей фильтровать лишнее</h1>
            </header>
            <main>
                <time>
                    <icons.JavaScript />
                    <div>
                        <span>
                            🚀 27.03.2021, 18:38
                        </span>
                        <span>
                            👨🏼‍🚀 Автор: Lectrum
                        </span>
                    </div>
                </time>
                <h2>Умей фильтровать лишнее</h2>
                <p>{ '[false, false, \'hello\', true, undefined].filter() — [\'hello\', true]' }</p>
            </main>
            <footer>
                <a href = '#'>📖&nbsp;Читать полностью &rarr;</a>
            </footer>
        </article>
    );
};
