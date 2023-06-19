import classNames from 'classnames/bind';
import styles from './FAQ.module.scss';

const cx = classNames.bind(styles);

function FAQ() {
    return <div className={cx('wrapper')}>FAQ</div>;
}

export default FAQ;
