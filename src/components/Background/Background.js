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
    forestInsideSun,
    forestInsideRain,
    forestOutsideRain,
    forestOutsideSun,
} from '../../assets/backgrounds/premium/premiumBg';
import window from '../../assets/home/inside-day.gif';
import windowRain from '../../assets/home/inside-day-rain.gif';

import { Coffee1, Forest1, BathroomBG, Ramen1, Train1, Winter1 } from '../../assets/backgrounds/default/defaultBg';

import { UseGif } from '../../context/GlobalGifProvider';

const cx = classNames.bind(styles);

function Background() {
    const { pathname } = useLocation();
    const { gif } = UseGif();
    const [bg, setBg] = useState('outside');

    const rain = useSelector((state) => state.rain);
    const background = useSelector((state) => state.bg);
    const night = useSelector((state) => state.night);

    useEffect(() => {
        if (background === 'inWindow') {
            if (rain === true) {
                setBg('windowRain');
            } else {
                setBg('window');
            }
        } else if (background === 'inCf' || background === 'outCf') {
            if (background === 'outCf') {
                if (rain === false) {
                    if (night === false) {
                        setBg('outside');
                    } else {
                        setBg('outsideNight');
                    }
                } else {
                    if (night === false) {
                        setBg('outsideRain');
                    } else {
                        setBg('outsideNightRain');
                    }
                }
            } else {
                if (rain === false) {
                    if (night === false) {
                        setBg('inside');
                    } else {
                        setBg('insideNight');
                    }
                } else {
                    if (night === false) {
                        setBg('insideRain');
                    } else {
                        setBg('insideNightRain');
                    }
                }
            }
        } else if (background === 'inForest-in' || background === 'inForest-out') {
            if (background === 'inForest-out') {
                if (rain === false) {
                    setBg('forestOutsideSun');
                } else {
                    setBg('forestOutsideRain');
                }
            } else {
                if (rain === false) {
                    setBg('forestInsideSun');
                } else {
                    setBg('forestInsideRain');
                }
            }
        }
    }, [rain, background, night]);

    if (pathname === '/default') {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('gif-wrapper')}>
                    <img alt="gif" src={Coffee1} className={cx({ show: gif === 'Coffee1' })} />
                    <img alt="gif" src={Forest1} className={cx({ show: gif === 'Forest1' })} />
                    <img alt="gif" src={BathroomBG} className={cx({ show: gif === 'BathroomBG' })} />
                    <img alt="gif" src={Ramen1} className={cx({ show: gif === 'Ramen1' })} />
                    <img alt="gif" src={Train1} className={cx({ show: gif === 'Train1' })} />
                    <img alt="gif" src={Winter1} className={cx({ show: gif === 'Winter1' })} />
                </div>
            </div>
        );
    } else {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('gif-wrapper')}>
                    <img alt="gif" src={outside} className={cx({ show: bg === 'outside' })} />
                    <img alt="gif" src={outsideRain} className={cx({ show: bg === 'outsideRain' })} />
                    <img alt="gif" src={outsideNight} className={cx({ show: bg === 'outsideNight' })} />
                    <img alt="gif" src={outsideNightRain} className={cx({ show: bg === 'outsideNightRain' })} />
                    <img alt="gif" src={inside} className={cx({ show: bg === 'inside' })} />
                    <img alt="gif" src={insideRain} className={cx({ show: bg === 'insideRain' })} />
                    <img alt="gif" src={insideNight} className={cx({ show: bg === 'insideNight' })} />
                    <img alt="gif" src={insideNightRain} className={cx({ show: bg === 'insideNightRain' })} />
                    <img alt="gif" src={window} className={cx({ show: bg === 'window' })} />
                    <img alt="gif" src={windowRain} className={cx({ show: bg === 'windowRain' })} />
                    <img alt="gif" src={forestInsideSun} className={cx({ show: bg === 'forestInsideSun' })} />
                    <img alt="gif" src={forestInsideRain} className={cx({ show: bg === 'forestInsideRain' })} />
                    <img alt="gif" src={forestOutsideSun} className={cx({ show: bg === 'forestOutsideSun' })} />
                    <img alt="gif" src={forestOutsideRain} className={cx({ show: bg === 'forestOutsideRain' })} />
                </div>
            </div>
        );
    }
}

export default memo(Background);
