import { RecentTipsAside, TagsAside, TipView } from '../features/tip-by-id';
import { Nav } from '../components';

export const TipByIdPage: React.FC = () => {
    return (
        <section className = 'layout'>
            <Nav />

            <section className = 'tip-view-layout'>
                <TipView />
                <section className = 'asides'>
                    <RecentTipsAside />
                    <TagsAside />
                </section>
            </section>
        </section>
    );
};
