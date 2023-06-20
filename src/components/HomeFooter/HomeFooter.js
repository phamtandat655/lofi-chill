import classNames from 'classnames/bind';
import styles from './HomeFooter.module.scss';

import logo from '../../assets/image/logo.gif';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function HomeFooter() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo-wrapper')}>
                <Link to="/home/">
                    <img className={cx('image')} alt="logo" src={logo} style={{ width: '200px' }} />
                </Link>
                <span>Copyright © 2023 Lofi.co</span>
            </div>
            <div className={cx('menu-wrapper')}>
                <ul>
                    <li>
                        <Link to="/home/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/home/pricing">Pricing</Link>
                    </li>
                </ul>
                <a href="mailto:phamtandat655@gmail.com">phamtandat655@gmail.com</a>
            </div>
        </div>
    );
}

export default HomeFooter;
