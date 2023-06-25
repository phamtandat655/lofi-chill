import classNames from 'classnames/bind';
import styles from './ScenesModal.module.scss';

import cafein from '../../assets/image/cafe-in.png';
import cafeout from '../../assets/image/cafe-out.png';
import window from '../../assets/image/window.png';
import forestInside from '../../assets/image/forest_inside.png';
import forestOutside from '../../assets/image/forest_outside.png';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { CHANGE_BG } from '../../actions/actions';

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
                <div className={cx('scene')} onClick={(e) => dispatch(CHANGE_BG('outCf'))}>
                    <img alt="scene" src={cafeout} />
                </div>
                <div className={cx('scene')} onClick={(e) => dispatch(CHANGE_BG('inCf'))}>
                    <img alt="scene" src={cafein} />
                </div>
                <div className={cx('scene')} onClick={(e) => dispatch(CHANGE_BG('inWindow'))}>
                    <img alt="scene" src={window} />
                </div>
                <div className={cx('scene')} onClick={(e) => dispatch(CHANGE_BG('inForest-in'))}>
                    <img alt="scene" src={forestInside} />
                </div>
                <div className={cx('scene')} onClick={(e) => dispatch(CHANGE_BG('inForest-out'))}>
                    <img alt="scene" src={forestOutside} />
                </div>
            </div>
        );
    }
}

export default memo(ScenesModal);
