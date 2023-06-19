import classNames from 'classnames/bind';
import styles from './Navbar.scss';
import { NavLink, useLocation } from 'react-router-dom';
import config from '../../config';

const cx = classNames.bind(styles);

function Navbar() {
    const { pathname } = useLocation();

    return (
        <div className={cx('navbar-wrapper', { show: true, youtube: pathname === '/youtube' })}>
            <NavLink className={(nav) => cx('navbar-navlink', { active: nav.isActive })} to={config.routes.default}>
                Default
            </NavLink>
            <NavLink className={(nav) => cx('navbar-navlink', { active: nav.isActive })} to={config.routes.premium}>
                Premium
            </NavLink>
            <NavLink className={(nav) => cx('navbar-navlink', { active: nav.isActive })} to={config.routes.youtube}>
                Youtube
            </NavLink>
        </div>
    );
}

export default Navbar;
