// Components
import { ToastContainer, Slide } from 'react-toastify';
import {
    Navigate, Outlet, Route, Routes,
} from 'react-router-dom';
import { Settings } from './components';
import {
    AllTopicsPage, TopicByTagPage, TipByIdPage, PublishPage, LoginPage, SignUpPage,
} from './pages';
import { useErrorMessage } from './hooks/useErrorMessage';
import { useProfile } from './hooks/useProfile';

export const App = () => {
    useErrorMessage();
    useProfile();

    return (
        <>
            <ToastContainer newestOnTop transition = { Slide } />;
            <Settings />

            <Routes>
                <Route path = '/all-topics' element = { <Outlet /> }>
                    <Route path = '/' element = { <AllTopicsPage /> } />
                    <Route path = ':id' element = { <TipByIdPage /> } />
                </Route>

                <Route path = '/topic-by-tag' element = { <Outlet /> }>
                    <Route path = '/' element = { <TopicByTagPage /> } />
                    <Route path = ':id' element = { <TipByIdPage /> } />
                </Route>

                <Route path = '/publish' element = { <PublishPage /> } />
                <Route path = '/login' element = { <LoginPage /> } />
                <Route path = '/signup' element = { <SignUpPage /> } />

                <Route
                    path = '*'
                    element = { <Navigate to = '/all-topics' replace /> } />
            </Routes>
        </>
    );
};
