import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';

import logo from '../../assets/image/logo.gif';

const cx = classNames.bind(styles);

function NotFound() {
    return (
        <div className={cx('wrapper')}>
            <img alt="logo" src={logo} />
            <div>Rất tiếc, trang này hiện không khả dụng.</div>
        </div>
    );
}

export default NotFound;
