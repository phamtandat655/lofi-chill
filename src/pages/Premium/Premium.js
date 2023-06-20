import classNames from 'classnames/bind';
import styles from './Premium.module.scss';
import { MuteAll, FullScreen, Option, Mixer, BgOption } from '../../assets/icons/icons';
import logo from '../../assets/image/logo.gif';
import { RainSound } from '../../assets/sounds/sound';

import { Link } from 'react-router-dom';
import { Suspense, lazy, memo, useEffect, useRef, useState } from 'react';

import TimerCounter from '../../components/TimerCounter/TimerCounter';
import ButtonSwitchDayNight from '../../components/ButtonSwitchDayNight/ButtonSwitchDayNight';
import Quote from '../../components/Quote/Quote';
import MixerModal from '../../components/MixerModal/MixerModal';
import ScenesModal from '../../components/ScenesModal/ScenesModal';
import OptionModal from '../../components/OptionModal/OptionModal';
import MusicControls from '../../components/MusicControls/MusicControls';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_MUTEALL, CHANGE_RAIN } from '../../actions/actions';
import Loader from '../../components/Loader/Loader';
const Background = lazy(() => import('../../components/Background/Background'));

const cx = classNames.bind(styles);

function Premium() {
    const [isShowQuote, setIsShowQuote] = useState(true);
    const [isOpenMixer, setIsOpenMixer] = useState(false);
    const [isOpenScenes, setIsOpenScenes] = useState(false);
    const [isOpenOption, setIsOpenOption] = useState(false);
    const [volume, setVolume] = useState(50);

    const rainSoundRef = useRef();

    const dispatch = useDispatch();
    const muteAll = useSelector((state) => state.muteAll);
    const rain = useSelector((state) => state.rain);
    const inSide = useSelector((state) => state.inSide);

    useEffect(() => {
        if (rainSoundRef && rainSoundRef.current) {
            if (muteAll === true) {
                rainSoundRef.current.volume = 0.0;
            }
            if (muteAll === false) {
                rainSoundRef.current.volume = volume / 100;
            }
        }
    }, [muteAll, volume]);

    useEffect(() => {
        if (rain === false) {
            // neu dung thi chuyen volume mac dinh la 50%
            rainSoundRef.current.volume = 0.5;
            rainSoundRef.current.pause();
        } else {
            rainSoundRef.current.volume = volume / 100;
            rainSoundRef.current.play();
        }
    }, [rain, volume]);

    return (
        <div
            className={cx('wrapper')}
            onClick={(e) => {
                setIsOpenScenes(false);
                setIsOpenOption(false);
            }}
        >
            <Suspense fallback={<Loader />}>
                <Background />
            </Suspense>
            <div
                className={cx('cityrain')}
                data="Rain"
                onClick={(e) => {
                    dispatch(CHANGE_RAIN);
                    if (rainSoundRef && rainSoundRef.current && rainSoundRef.current.volume) {
                        setVolume(50);
                    }
                }}
            >
                <div className={cx('circle')}></div>
                <div
                    className={cx('range-volume')}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <input
                        type="range"
                        min="0"
                        max="100"
                        onChange={(e) => {
                            setVolume(e.target.value);
                            if (rainSoundRef && rainSoundRef.current && rainSoundRef.current.volume) {
                                if (e.target.value < 1) {
                                    rainSoundRef.current.pause();
                                } else {
                                    if (rain === true) {
                                        rainSoundRef.current.volume = e.target.value / 100;
                                        rainSoundRef.current.play();
                                    }
                                }
                            }
                        }}
                        value={rain ? volume : 50}
                    />
                    <p>{rain ? volume : 50}</p>
                </div>
                <audio ref={rainSoundRef} src={RainSound} loop />
            </div>
            <div className={cx('header')}>
                <div className={cx('logo-wrapper', { showLogo: true })}>
                    <Link to="/home">
                        <img alt="logo-gif" src={logo} />
                    </Link>
                </div>
                <div className={cx('header-right')}>
                    <div className={cx('timerCounter')} onClick={(e) => setIsShowQuote(!isShowQuote)}>
                        <TimerCounter />
                    </div>
                    {inSide !== 'inWindow' && (
                        <div className={cx('noBg')}>
                            <ButtonSwitchDayNight />
                        </div>
                    )}
                    <div className={cx('music-controls')}>
                        <MusicControls />
                    </div>
                    <span
                        className={cx('muteAll', { clicked: muteAll === true })}
                        onClick={(e) => dispatch(CHANGE_MUTEALL)}
                    >
                        {MuteAll}
                    </span>
                    <span
                        className={cx('fullscreen')}
                        onClick={() => {
                            if (!document.fullscreenElement) {
                                let el = document.documentElement,
                                    rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;
                                rfs.call(el);
                            } else {
                                if (document.exitFullscreen) {
                                    document.exitFullscreen();
                                } else if (document.mozCancelFullScreen) {
                                    document.mozCancelFullScreen();
                                } else if (document.webkitExitFullscreen) {
                                    document.webkitExitFullscreen();
                                }
                            }
                        }}
                    >
                        {FullScreen}
                    </span>
                    <span
                        className={cx('option')}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpenOption(!isOpenOption);
                        }}
                    >
                        {Option}
                        {isOpenOption && <OptionModal />}
                    </span>
                </div>
            </div>
            <div className={cx('sidebar')}>
                <div className={cx('sidebar-item')} data="Mixer" onClick={(e) => setIsOpenMixer(!isOpenMixer)}>
                    {Mixer}
                </div>
                <div
                    className={cx('sidebar-item')}
                    data="Scenes"
                    onClick={(e) => {
                        setIsOpenScenes(!isOpenScenes);
                        e.stopPropagation();
                    }}
                >
                    {BgOption}
                </div>
                {isOpenScenes && <ScenesModal />}
                {isOpenMixer && <MixerModal handleSetIsOpenMixer={setIsOpenMixer} />}
            </div>

            {isShowQuote && <Quote handleSetIsShowQuote={setIsShowQuote} />}
        </div>
    );
}

export default memo(Premium);
