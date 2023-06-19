import './ButtonSwitchDayNight.scss';
import { Day, Night } from '../../assets/icons/icons';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_NIGHT } from '../../actions/actions';

function ButtonSwitchDayNight() {
    const dispatch = useDispatch();
    const night = useSelector((state) => state.night);

    return (
        <div className="toggle-switch">
            <label className="switch-label">
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={!night}
                    onChange={(e) => {
                        dispatch(CHANGE_NIGHT);
                    }}
                />
                <span className="slider"></span>
            </label>
            {night === false ? <div className="icon day">{Day}</div> : <div className="icon night">{Night}</div>}
        </div>
    );
}

export default memo(ButtonSwitchDayNight);
