import classNames from 'classnames/bind';
import styles from './OptionModal.module.scss';
import { UseOpenModal } from '../../context/OpenModalProvider';
import { useNavigate } from 'react-router-dom';
import { UseAuthContext } from '../../context/UserAuth';

const cx = classNames.bind(styles);

function OptionModal() {
    const { setIsOpenModal } = UseOpenModal();
    const nav = useNavigate();
    const { user, logout } = UseAuthContext();

    return (
        <div className={cx('wrapper')}>
            {user !== null && user.email ? (
                <div
                    className={cx('option')}
                    onClick={(e) => {
                        logout();
                        nav('/default');
                    }}
                >
                    Logout
                </div>
            ) : (
                <div
                    className={cx('option')}
                    onClick={(e) => {
                        setIsOpenModal(true);
                    }}
                >
                    Login
                </div>
            )}
            <div className={cx('option')} onClick={(e) => nav('/home/pricing')}>
                Buy premium
            </div>
        </div>
    );
}

export default OptionModal;
