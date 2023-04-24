// Core
import { render } from 'react-dom';

// Components
import { App } from './App';

// Instruments
import './theme/main.scss';

// Context providers
import { SelectedTagProvider, SettingsProvider } from './lib';

render(
    <SettingsProvider>
        <SelectedTagProvider>
            <App />
        </SelectedTagProvider>
    </SettingsProvider>,
    document.getElementById('root'),
);

