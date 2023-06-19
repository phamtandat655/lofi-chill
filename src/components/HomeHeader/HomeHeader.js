import classNames from 'classnames/bind';
import styles from './HomeHeader.module.scss';

import logo from '../../assets/image/logo.gif';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function HomeHeader() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo-wrapper')}>
                <Link to="/home/">
                    <img className={cx('image')} alt="logo" src={logo} style={{ width: '200px' }} />
                </Link>
            </div>
            <div className={cx('menu-wrapper')}>
                <Menu />
            </div>
        </div>
    );
}

export default HomeHeader;
