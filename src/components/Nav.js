import { useContext } from 'react';
import { icons } from '../theme/icons/nav';

// Instruments

import { Context } from '../lib/settingsContext';

export const Nav = () => {
    const [, setSettingsOpen] = useContext(Context);
    const handleClick = (event) => {
        event.preventDefault();
        setSettingsOpen(true);
    };

    return (
        <nav className = 'nav'>
            <h1 className = 'Типсы и Триксы'>T и T</h1>
            <a href = '#'>
                <icons.Home /> Все темы
            </a>
            <a href = '#'>
                <icons.Tag /> По тэгам
            </a><a href = '#'>
                <icons.Publish /> Опубликовать
            </a><a href = '#' onClick = { handleClick }>
                <icons.Settings /> Настройки
            </a><a href = '#'>
                <icons.Bolt /> Войти
            </a><a href = '#'>
                <icons.Profile /> Профиль
            </a><a href = '#'>
                <icons.Logout /> Выйти
            </a>

        </nav>
    );
};
