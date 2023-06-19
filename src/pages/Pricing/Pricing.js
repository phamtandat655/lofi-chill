import classNames from 'classnames/bind';
import styles from './Pricing.module.scss';

const cx = classNames.bind(styles);

function Pricing() {
    return <div className={cx('wrapper')}>Pricing</div>;
}

export default Pricing;
