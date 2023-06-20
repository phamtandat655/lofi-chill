import { memo, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './WebFunction.module.scss';

import insideDay from '../../assets/home/inside-day.gif';
import insideDayRain from '../../assets/home/inside-day-rain.gif';

import { RainSound } from '../../assets/sounds/sound';

const cx = classNames.bind(styles);

function WebFunction({ title, note, img, gif, reverse }) {
    const [isRain, setIsRain] = useState(false);
    const [volume, setVolume] = useState(30);

    const audioRef = useRef();

    useEffect(() => {
        if (audioRef && audioRef.current) {
            if (isRain === true) {
                audioRef.current.play();
                audioRef.current.volume = 0.3;
            } else {
                audioRef.current.pause();
                audioRef.current.volume = 0.3;
            }
        }
    }, [isRain]);

    return (
        <div className={cx('wrapper', { reverse: reverse })}>
            <div className={cx('text-wrapper')}>
                <p>{title}</p>
                <p>{note}</p>
            </div>
            <div className={cx('image-wrapper', { 'inside-day-gif': gif })}>
                {gif === true ? (
                    <div className={cx('rain-wrapper')}>
                        <img src={insideDay} className={cx({ hide: isRain === true })} alt="the-perfect-playlist" />
                        <img
                            src={insideDayRain}
                            className={cx({ hide: isRain === false })}
                            alt="the-perfect-playlist"
                        />
                        <div
                            className={cx('circle', { clicked: isRain })}
                            onClick={(e) => {
                                setIsRain(!isRain);
                                setVolume(30);
                            }}
                        ></div>
                        <div className={cx('arrow')}></div>
                        <audio ref={audioRef} src={RainSound} hidden loop />
                        <div className={cx('range-volume', { hide: !isRain })}>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                onChange={(e) => {
                                    setVolume(e.target.value);
                                    audioRef.current.volume = e.target.value / 100;
                                }}
                                value={volume}
                            />
                        </div>
                    </div>
                ) : (
                    <img src={img} alt="the-perfect-playlist" />
                )}
            </div>
        </div>
    );
}

export default memo(WebFunction);
