import classNames from 'classnames/bind';
import style from './MixerModal.module.scss';
import { Chill, Sleepy, Jazzy, Rain } from '../../assets/icons/icons';
import React, { memo } from 'react';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_RAIN, CHANGE_SONG } from '../../actions/actions';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(style);

function MixerModal({ handleSetIsOpenMixer }) {
    const nameSong = useSelector((state) => state.nameSong);
    const rain = useSelector((state) => state.rain);
    const dispatch = useDispatch();

    const { pathname } = useLocation();

    return (
        <Draggable>
            <div className={cx('wrapper')}>
                <p className={cx('close')} onClick={(e) => handleSetIsOpenMixer(false)}>
                    _
                </p>
                <div className={cx('audio-wrapper')}>
                    <p>MUSIC</p>
                    <div>
                        <span
                            className={cx('icon', { clicked: nameSong === 'Sleepy' })}
                            onClick={(e) => dispatch(CHANGE_SONG('Sleepy'))}
                        >
                            {Sleepy}
                        </span>
                        <span
                            className={cx('icon', { clicked: nameSong === 'Jazzy' })}
                            onClick={(e) => dispatch(CHANGE_SONG('Jazzy'))}
                        >
                            {Jazzy}
                        </span>
                        <span
                            className={cx('icon', { clicked: nameSong === 'Chilly' })}
                            onClick={(e) => dispatch(CHANGE_SONG('Chilly'))}
                        >
                            {Chill}
                        </span>
                    </div>
                </div>
                {pathname === '/premium' && (
                    <div className={cx('rain-wrapper')}>
                        <p>RAIN</p>
                        <div onClick={(e) => dispatch(CHANGE_RAIN)}>
                            <span className={cx('icon', { clicked: rain === true })}>{Rain}</span>
                        </div>
                    </div>
                )}
            </div>
        </Draggable>
    );
}

export default memo(MixerModal);
