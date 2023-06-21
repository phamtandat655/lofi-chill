import classNames from 'classnames/bind';
import styles from './ScenesModal.module.scss';

import cafein from '../../assets/image/cafe-in.png';
import cafeout from '../../assets/image/cafe-out.png';
import window from '../../assets/image/window.png';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { CHANGE_INSIDE } from '../../actions/actions';

import {
    Coffee1Pic,
    BathroomBGPic,
    Train1Pic,
    Winter1Pic,
    Forest1Pic,
    Ramen1Pic,
} from '../../assets/backgrounds/default/pictureOfGif/pictureOfGif';
import { useLocation } from 'react-router-dom';
import { UseGif } from '../../context/GlobalGifProvider';

const cx = classNames.bind(styles);

function ScenesModal() {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { setGif } = UseGif();

    if (pathname === '/default') {
        return (
            <div className={cx('wrapper', 'default')}>
                <div className={cx('scene')} onClick={(e) => setGif('Forest1')}>
                    <img alt="scene" src={Forest1Pic} />
                </div>
                <div className={cx('scene')} onClick={(e) => setGif('Coffee1')}>
                    <img alt="scene" src={Coffee1Pic} />
                </div>
                <div className={cx('scene')} onClick={(e) => setGif('BathroomBG')}>
                    <img alt="scene" src={BathroomBGPic} />
                </div>
                <div className={cx('scene')} onClick={(e) => setGif('Ramen1')}>
                    <img alt="scene" src={Ramen1Pic} />
                </div>
                <div className={cx('scene')} onClick={(e) => setGif('Train1')}>
                    <img alt="scene" src={Train1Pic} />
                </div>
                <div className={cx('scene')} onClick={(e) => setGif('Winter1')}>
                    <img alt="scene" src={Winter1Pic} />
                </div>
            </div>
        );
    } else {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('scene')} onClick={(e) => dispatch(CHANGE_INSIDE('out'))}>
                    <img alt="scene" src={cafeout} />
                </div>
                <div className={cx('scene')} onClick={(e) => dispatch(CHANGE_INSIDE('in'))}>
                    <img alt="scene" src={cafein} />
                </div>
                <div className={cx('scene')} onClick={(e) => dispatch(CHANGE_INSIDE('inWindow'))}>
                    <img alt="scene" src={window} />
                </div>
            </div>
        );
    }
}

export default memo(ScenesModal);
