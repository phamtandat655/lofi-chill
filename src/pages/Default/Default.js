import classNames from 'classnames/bind';
import styles from './Default.module.scss';

import { FullScreen, Option, Mixer, BgOption } from '../../assets/icons/icons';
import logo from '../../assets/image/logo.gif';

import { Link } from 'react-router-dom';
import { memo, useState } from 'react';

import TimerCounter from '../../components/TimerCounter/TimerCounter';
import Quote from '../../components/Quote/Quote';
import MixerModal from '../../components/MixerModal/MixerModal';
import ScenesModal from '../../components/ScenesModal/ScenesModal';
import OptionModal from '../../components/OptionModal/OptionModal';
import MusicControls from '../../components/MusicControls/MusicControls';
import Background from '../../components/Background/Background';

const cx = classNames.bind(styles);

function Default() {
    const [isShowQuote, setIsShowQuote] = useState(true);
    const [isOpenMixer, setIsOpenMixer] = useState(false);
    const [isOpenScenes, setIsOpenScenes] = useState(false);
    const [isOpenOption, setIsOpenOption] = useState(false);

    return (
        <div
            className={cx('wrapper')}
            onClick={(e) => {
                setIsOpenScenes(false);
                setIsOpenOption(false);
            }}
        >
            <Background />
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
                    <div className={cx('music-controls')}>
                        <MusicControls />
                    </div>
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

export default memo(Default);
