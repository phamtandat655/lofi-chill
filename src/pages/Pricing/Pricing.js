import classNames from 'classnames/bind';
import styles from './Pricing.module.scss';

import { apple, harvard, netflix, queen, twitter, yale, um } from '../../assets/iconInPremiumPage/iconPremiumPage';

const cx = classNames.bind(styles);

function Pricing() {
    const handleClickGoPremium = (e) => {};

    const checkedSvg = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            className="mdl-js"
        >
            <path
                d="M16.8114 10.4376C16.1864 13.5626 13.8302 16.5051 10.5239 17.1626C8.91143 17.4837 7.2387 17.2879 5.74394 16.603C4.24918 15.9182 3.00859 14.7792 2.19881 13.3483C1.38902 11.9174 1.05134 10.2674 1.23383 8.6334C1.41631 6.99938 2.10968 5.46459 3.21519 4.24756C5.48269 1.75006 9.31144 1.06256 12.4364 2.31256"
                stroke="#F3A952"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.1875 9.1875L9.3125 12.3125L16.8125 4.1875"
                stroke="#F3A952"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    return (
        <div className={cx('wrapper')}>
            <div className={cx('pricing-wrapper')}>
                <div className={cx('pricing-top')}>
                    <p>
                        $2<span>/forever</span>
                    </p>
                    <button onClick={handleClickGoPremium}>Go premium</button>
                </div>
                <div className={cx('pricing-benefit')}>
                    <p>
                        {checkedSvg}
                        <span className={cx('cl-prm')}> 40+</span> scenes {'('}updated monthly{')'}
                    </p>
                    <p>
                        {checkedSvg}
                        <span className={cx('cl-prm')}> 10+</span> sounds
                    </p>
                    <p>{checkedSvg} 1% donation for mental health</p>
                    <p>{checkedSvg} Wallpaper download</p>
                    <p>{checkedSvg} Templates</p>
                    <p>{checkedSvg} Insights</p>
                    <p>{checkedSvg} Priority support</p>
                </div>
            </div>
            <div className={cx('used')}>
                <p>
                    Used by <span className={cx('cl-prm')}>developers</span> at
                </p>
                <div className={cx('img-wrapper')}>
                    <img alt="icon" src={apple} />
                    <img alt="icon" src={twitter} />
                    <img alt="icon" src={netflix} />
                    <img alt="icon" src={harvard} />
                    <img alt="icon" src={um} />
                    <img alt="icon" src={yale} />
                    <img alt="icon" src={queen} />
                </div>
            </div>
        </div>
    );
}

export default Pricing;
