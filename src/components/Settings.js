// Core
import cx from 'classnames';

// Instruments
import { useDispatch, useSelector } from 'react-redux';
import { settingsActions } from '../lib/redux/actions/settings';
import { getIsSettingsOpen } from '../lib/redux/selectors';

export const Settings = () => {
    const isSettingsOpen = useSelector(getIsSettingsOpen);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(settingsActions.setSettingsOpen(false));
    };

    const settingClasses = cx('settings', {
        open:   isSettingsOpen,
        closed: !isSettingsOpen,
    });

    return (
        <section className = { settingClasses }>
            <header>
                <h1>
                    Настройки
                </h1>
            </header>
            <footer>
                <button onClick = { handleClick } >
                    Закрыть
                </button>
            </footer>
        </section>
    );
};
