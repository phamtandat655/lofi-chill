import classNames from 'classnames/bind';
import styles from './NavbarLayout.module.scss';
import Navbar from '../../components/Navbar/Navbar';

const cx = classNames.bind(styles);

function NavbarLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default NavbarLayout;
