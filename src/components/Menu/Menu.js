import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Option } from '../../assets/icons/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Menu() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('option')} onClick={(e) => setIsOpenMenu(!isOpenMenu)}>
                {Option}
            </div>
            <ul className={cx({ show: isOpenMenu })}>
                <li>
                    <Link to="/home/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/home/pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/default">
                        <button>Go to app</button>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
