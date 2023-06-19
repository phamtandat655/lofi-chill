import classNames from 'classnames/bind';
import styles from './OptionModal.module.scss';
import { UseOpenModal } from '../../context/OpenModalProvider';

const cx = classNames.bind(styles);

function OptionModal() {
    const { setIsOpenModal } = UseOpenModal();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('option')} onClick={(e) => setIsOpenModal(true)}>
                Login / Logout
            </div>
            <div className={cx('option')}>Buy PREMIUM</div>
        </div>
    );
}

export default OptionModal;
