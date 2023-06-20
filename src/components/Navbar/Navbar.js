import classNames from 'classnames/bind';
import styles from './Navbar.scss';
import { NavLink, useLocation } from 'react-router-dom';
import config from '../../config';
import { UseAuthContext } from '../../context/UserAuth';
import { db } from '../../firebase';
import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';

const cx = classNames.bind(styles);

function Navbar() {
    const { pathname } = useLocation();
    const { user } = UseAuthContext();
    const [isPremium, setIsPremium] = useState(false);

    useEffect(() => {
        if (user?.email) {
            onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
                setIsPremium(doc.data().premium);
            });
        } else {
            setIsPremium(false);
        }
    }, [user]);

    const crownSvg = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="12"
            viewBox="0 0 25 16"
            width="14"
            className="mdl-js"
        >
            <path
                d="m23.8066 2.93598c-.2386-.16898-.5573-.17242-.7987-.01036l-4.0539 2.67112c-.1558.10415-.2648.26621-.3007.45035-.0372.18343.0014.37449.1063.53038.2331.34761.3558.75313.3558 1.17315 0 1.16831-.9504 2.11871-2.1187 2.11871s-2.1187-.9504-2.1187-2.11871c0-.68693.3394-1.33455.9063-1.73319.3186-.22346.3958-.66349.1724-.9828l-3.3257-4.751182c-.262-.3779306-.8938-.3779306-1.1559 0l-3.32562 4.751222c-.22345.31932-.14619.75935.17242.9828.56692.39865.90624 1.04627.90624 1.7332 0 1.1683-.95041 2.11871-2.11871 2.11871s-2.11871-.95041-2.11871-2.11871c0-.42002.12275-.82554.3559-1.17315.10485-.15589.14346-.34691.10622-.53039-.03588-.18413-.14483-.34624-.30072-.45034l-4.05389-2.67113c-.242754-.16205-.560043-.15862-.798656.01036-.2386138.16828-.348975.46555-.2786339.74833l2.8717899 11.29975c.08828.3559.43311.5938.80139.5256 5.54781-.9242 11.17008-.9242 16.71788 0 .0387.0068.0787.0096.1159.0096.3187 0 .6055-.2166.6856-.5352l2.8718-11.29975c.0703-.28282-.04-.5801-.2787-.74837z"
                fill="#f3a952"
            />
        </svg>
    );

    return (
        <div className={cx('navbar-wrapper', { show: true, youtube: pathname === '/youtube' })}>
            <NavLink className={(nav) => cx('navbar-navlink', { active: nav.isActive })} to={config.routes.default}>
                Default
            </NavLink>
            <NavLink
                className={(nav) => cx('navbar-navlink', { active: nav.isActive })}
                to={isPremium === true ? config.routes.premium : '/home/pricing'}
            >
                {crownSvg} Premium
            </NavLink>
            <NavLink className={(nav) => cx('navbar-navlink', { active: nav.isActive })} to={config.routes.youtube}>
                Youtube
            </NavLink>
        </div>
    );
}

export default Navbar;
