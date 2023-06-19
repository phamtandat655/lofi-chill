import classNames from 'classnames/bind';
import styles from './MusicControls.module.scss';
import { memo, useEffect, useRef, useState } from 'react';
import { Pause, Play, Volume } from '../../assets/icons/icons';
import { Chill, Jazzy, Sleepy } from '../../assets/sounds/sound';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function MusicControls() {
    const [isPause, setIsPause] = useState(true);
    const [isOpenVolumeSetting, setIsOpenVolumeSetting] = useState(false);
    const [volume, setVolume] = useState(50);

    const nameSong = useSelector((state) => state.nameSong);
    const muteAll = useSelector((state) => state.muteAll);
    const audioRef = useRef();

    useEffect(() => {
        if (audioRef && audioRef.current) {
            if (muteAll === true) {
                audioRef.current.volume = 0.0;
            }
            if (muteAll === false) {
                audioRef.current.volume = volume / 100;
            }
        }
    }, [muteAll, volume]);

    const getSong = (nameSong) => {
        switch (nameSong) {
            case 'Chilly':
                return Chill;
            case 'Jazzy':
                return Jazzy;
            case 'Sleepy':
                return Sleepy;
            default:
                return;
        }
    };

    const togglePlayAudio = () => {
        if (isPause === false) {
            audioRef.current.volume = volume / 100;
            audioRef.current.pause();
            setIsPause(true);
        } else {
            audioRef.current.volume = volume / 100;
            audioRef.current.play();
            setIsPause(false);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <span className={cx('pause')} onClick={(e) => togglePlayAudio()}>
                {isPause === true ? Play : Pause}
            </span>
            <span
                className={cx('volume', { openVolume: isOpenVolumeSetting })}
                onClick={(e) => setIsOpenVolumeSetting(!isOpenVolumeSetting)}
            >
                {Volume}
            </span>

            <div className={cx('range-volume', { hide: !isOpenVolumeSetting })}>
                <input
                    type="range"
                    min="0"
                    max="100"
                    onChange={(e) => {
                        setVolume(e.target.value);
                        // audioRef.current.volume = e.target.value / 100;

                        if (audioRef && audioRef.current && audioRef.current.volume) {
                            if (e.target.value < 1) {
                                // neu volume ve 0 thi dung lai
                                audioRef.current.pause();

                                // dang chay thi chuyen ve trang thai dung`
                                if (isPause === false) {
                                    setIsPause(true);
                                }
                            } else {
                                audioRef.current.volume = e.target.value / 100;
                                audioRef.current.play();
                                // dang dung` thi chuyen ve trang thai chay
                                if (isPause === true) {
                                    setIsPause(false);
                                }
                            }
                        }
                    }}
                    value={volume}
                />
                <p>{volume}</p>
            </div>
            {nameSong &&
                (isPause === false ? (
                    <audio ref={audioRef} src={getSong(nameSong)} autoPlay loop />
                ) : (
                    <audio ref={audioRef} src={getSong(nameSong)} loop />
                ))}
        </div>
    );
}

export default memo(MusicControls);
