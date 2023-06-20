import classNames from 'classnames/bind';
import styles from './HomeContent.module.scss';
import { TypeAnimation } from 'react-type-animation';

import { Link } from 'react-router-dom';
import WebFunction from '../WebFunction/WebFunction';
import perfectPlaylistImg from '../../assets/home/perfect-playlist-illustration-desktop-3x.png';
import HomeSlider from '../HomeSlider/HomeSlider';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function HomeContent() {
    const [figures, setFigures] = useState(0);

    useEffect(() => {
        let speed = 500;
        let from = 0;
        let to = 150000;
        let step = to / speed;

        const counter = setInterval(() => {
            from += step;
            if (from > to) {
                clearInterval(counter);
                setFigures(to);
            } else {
                setFigures(Math.ceil(from));
            }
        }, 5);

        return () => clearInterval(counter);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('background-img')}>
                <div className={cx('text-write')}>Your calm, digital environment to</div>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'relax',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'focus',
                        1000,
                        'work',
                        1000,
                        'study',
                        1000,
                    ]}
                    wrapper="span"
                    speed={0}
                    className={cx('text-write', 'text-sec')}
                    style={{ fontSize: '5rem', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>
            <div className={cx('web-review-wrapper')}>
                <div className={cx('web-review')}>
                    <div className={cx('bg-browser')}></div>
                    <div className={cx('slider')}></div>
                </div>
            </div>
            <div className={cx('Notice')}>Bringing calm productivity to over {figures} users every month</div>
            <div className={cx('web-function')}>
                <WebFunction
                    img={perfectPlaylistImg}
                    title="The Perfect Playlist"
                    note="Hit play and get into the zone instantly. No ads. No distracting lyrics."
                />
                <WebFunction
                    gif
                    title="Sounds to cut out the noise"
                    note="Each scene comes with adjustable soundscapes like rain, waves or birds."
                    reverse
                />
            </div>
            <div className={cx('web-slider')}>
                <div className={cx('slider-text-wrapper')}>
                    <p>Craft your focus environment</p>
                    <p>
                        Would you rather get it done in the cafe, or escape to the beach? lofi.co gives you both and a
                        lot more.
                    </p>
                </div>
                <div className={cx('slider-wrapper')}>
                    <HomeSlider />
                </div>
            </div>
            <div className={cx('start')}>
                <Link to="/home/pricing">
                    <button className={cx('pricing-btn')}>See pricing</button>
                </Link>
                <p>Or</p>
                <Link to="/default">
                    <button className={cx('start-btn')}>Get started for free!</button>
                </Link>
            </div>
        </div>
    );
}

export default HomeContent;
