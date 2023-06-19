import classNames from 'classnames/bind';
import styles from './FormRegister.module.scss';
import logo from '../../assets/image/logo.gif';
import { useState } from 'react';

const cx = classNames.bind(styles);

function FormRegister({ handleSetIsOpenLogin }) {
    const [usernameValue, setUsernameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    return (
        <div className={cx('wrapper')}>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className={cx('image-wrapper')}>
                    <img alt="logo" src={logo} />
                </div>
                <div className={cx('text-wrapper')}>
                    <h2>Nice to meet you!</h2>
                    <h3>Sign up for a free account.</h3>
                </div>
                <div className={cx('input-wrapper')}>
                    <input
                        type="text"
                        placeholder="username"
                        value={usernameValue}
                        onChange={(e) => setUsernameValue(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="email"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />
                </div>
                <button>Sign up</button>
                <p>
                    You already have an account ? <span onClick={(e) => handleSetIsOpenLogin(true)}> Login</span>
                </p>
            </form>
        </div>
    );
}

export default FormRegister;
