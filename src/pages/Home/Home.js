import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import HomeFooter from '../../components/HomeFooter/HomeFooter';
import { Route, Routes } from 'react-router-dom';
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';
import Pricing from '../Pricing/Pricing';
import HomeContent from '../../components/HomeContent/HomeContent';
import NotFound from '../NotFound/NotFound';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-fluid')}>
                <HomeHeader />
            </div>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Routes>
                        <Route path="" element={<HomeContent />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="FAQ" element={<FAQ />} />
                        <Route path="pricing" element={<Pricing />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
            <div className={cx('container-fluid')}>
                <HomeFooter />
            </div>
        </div>
    );
}

export default Home;
