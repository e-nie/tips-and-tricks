// Icons
import { icons } from '../theme/icons/nav';

export const Nav = () => {
    return (
        <nav className = 'nav'>
            <h1>T и T</h1>
            <a href = '#'>
                <icons.Home /> Все темы
            </a>
            <a href = '#'>
                <icons.Tag /> По тэгам
            </a>
            <a href = '#'>
                <icons.Publish /> Опубликовать
            </a>
            <a href = '#'>
                <icons.Settings /> Настройки
            </a>
        </nav>
    );
};
