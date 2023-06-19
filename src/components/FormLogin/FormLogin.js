import classNames from 'classnames/bind';
import styles from './FormLogin.module.scss';
import logo from '../../assets/image/logo.gif';
import { useState } from 'react';

const cx = classNames.bind(styles);

function FormLogin({ handleSetIsOpenLogin }) {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    return (
        <div className={cx('wrapper')}>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className={cx('image-wrapper')}>
                    <img alt="logo" src={logo} />
                </div>
                <div className={cx('text-wrapper')}>
                    <h2>Welcome back!</h2>
                    <h3>Login to your account.</h3>
                </div>
                <div className={cx('input-wrapper')}>
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
                <button>Login</button>
                <p>
                    Don't have an account ? <span onClick={(e) => handleSetIsOpenLogin(false)}> Sign up for free!</span>
                </p>
            </form>
        </div>
    );
}

export default FormLogin;
