import {
    Hero, Nav, Settings, TipList,
} from '../components';


export const AllTopicsPage = () => {
    return (
        <>
            <Settings />
            <section className = 'layout'>
                <Nav />
                <Hero />
                <TipList />
            </section>
        </>
    );
};
