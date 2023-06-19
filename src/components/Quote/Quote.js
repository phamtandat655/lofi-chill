// react-draggable
import React, { memo, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import classNames from 'classnames/bind';
import styles from './Quote.module.scss';
import TimerCounter from '../TimerCounter/TimerCounter';

const cx = classNames.bind(styles);

function Quote({ handleSetIsShowQuote }) {
    let date = new Date();

    const arrQuote = [
        'Not everything that is faced can be changed, but nothing can be changed until it is faced',
        'When you want to give up, remember why you started',
        'When you want to give up, remember why you started',
        'Nothing is too small to know, and nothing too big to attempt',
        'Know your limits, but never stop trying to exceed them',
    ];
    const arrDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const arrMonths = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const [timeDMY, setTimeDMY] = useState(
        ' ' +
            arrDay[date.getDay() - 1] +
            ' , ' +
            arrMonths[date.getMonth()] +
            ' ' +
            date.getDate() +
            ' , ' +
            date.getFullYear(),
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeDMY(
                ' ' +
                    arrDay[date.getDay() - 1] +
                    ' , ' +
                    arrMonths[date.getMonth()] +
                    ' ' +
                    date.getDate() +
                    ' , ' +
                    date.getFullYear(),
            );
        }, 3600000);

        return () => clearInterval(timer);
    }, [timeDMY]);

    return (
        <Draggable>
            <div className={cx('quote-wrapper')}>
                <div className={cx('timer')}>
                    <span>
                        It's
                        {timeDMY}
                    </span>
                    <span className={cx('timer-count')}>
                        <TimerCounter />
                        <span className={cx('close')} onClick={(e) => handleSetIsShowQuote(false)}>
                            _
                        </span>
                    </span>
                </div>
                <div className={cx('quote')}>"{arrQuote[Math.floor(Math.random() * 5)]}"</div>
            </div>
        </Draggable>
    );
}

export default memo(Quote);
