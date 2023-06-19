import classNames from 'classnames/bind';
import styles from './Youtube.module.scss';
import { memo, useState } from 'react';

const cx = classNames.bind(styles);

function Youtube() {
    const [idIframe, setIdFrame] = useState('sD1z3PYo4OE');
    const [inputValue, setInputValue] = useState('');

    const handleClickButton = (e) => {
        let urlOfVideoYoutube = inputValue.split('=')[1];

        // neu da xem 1 thoi gian thi tren id se co them "...&t=..." => bo tgian chi lay id
        if (urlOfVideoYoutube.includes('&')) {
            urlOfVideoYoutube = urlOfVideoYoutube.split('&')[0];
        }

        setIdFrame(urlOfVideoYoutube);
        setInputValue('');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('input-wrapper')}>
                <input
                    type="text"
                    placeholder="Link youtube..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleClickButton}>Mở</button>
            </div>
            <iframe
                className={cx('iframe')}
                // width="560"
                // height="315"
                src={`https://www.youtube.com/embed/${idIframe}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default memo(Youtube);
