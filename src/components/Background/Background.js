import classNames from 'classnames/bind';
import styles from './Background.module.scss';

import { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
    inside,
    insideRain,
    insideNight,
    insideNightRain,
    outside,
    outsideRain,
    outsideNight,
    outsideNightRain,
} from '../../assets/backgrounds/premium/premiumBg';
import window from '../../assets/home/inside-day.gif';
import windowRain from '../../assets/home/inside-day-rain.gif';

import { UseGif } from '../../context/GlobalGifProvider';

const cx = classNames.bind(styles);

function Background() {
    const { pathname } = useLocation();
    const { gif } = UseGif();
    const [bg, setBg] = useState(outside);

    const rain = useSelector((state) => state.rain);
    const inSide = useSelector((state) => state.inSide);
    const night = useSelector((state) => state.night);

    useEffect(() => {
        if (inSide === 'inWindow') {
            if (rain === true) {
                setBg(windowRain);
            } else {
                setBg(window);
            }
        } else {
            if (inSide === false) {
                if (rain === false) {
                    if (night === false) {
                        setBg(outside);
                    } else {
                        setBg(outsideNight);
                    }
                } else {
                    if (night === false) {
                        setBg(outsideRain);
                    } else {
                        setBg(outsideNightRain);
                    }
                }
            } else {
                if (rain === false) {
                    if (night === false) {
                        setBg(inside);
                    } else {
                        setBg(insideNight);
                    }
                } else {
                    if (night === false) {
                        setBg(insideRain);
                    } else {
                        setBg(insideNightRain);
                    }
                }
            }
        }
    }, [rain, inSide, night]);

    if (pathname === '/default') {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('gif-wrapper')}>
                    <img alt="gif" src={gif} />
                </div>
            </div>
        );
    } else {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('gif-wrapper')}>
                    <img alt="gif" src={bg} />
                </div>
            </div>
        );
    }
}

export default memo(Background);
