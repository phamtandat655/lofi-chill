import classNames from 'classnames/bind';
import styles from './FormLogin.module.scss';
import logo from '../../assets/image/logo.gif';
import { useState } from 'react';
import { UseAuthContext } from '../../context/UserAuth';

import { UseOpenModal } from '../../context/OpenModalProvider';

const cx = classNames.bind(styles);

function FormLogin({ handleSetIsOpenLogin }) {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const { setIsOpenModal } = UseOpenModal();
    const { login } = UseAuthContext();

    const handleLogin = async (e) => {
        e.preventDefault();

        const regex =
            /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/i;

        if (!regex.test(emailValue)) {
            alert('Email is WRONG ! Please re-enter!');
            return;
        }
        if (passwordValue.trim().length < 6) {
            alert('Password must be at least 6 characters! Please re-enter!');
            return;
        }

        try {
            alert('Successfully signed in');
            await login(emailValue, passwordValue);
            setEmailValue('');
            setPasswordValue('');
            setIsOpenModal(false);
        } catch (error) {
            console.log(error);
        }
    };

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
                <button onClick={handleLogin}>Login</button>
                <p>
                    Don't have an account ? <span onClick={(e) => handleSetIsOpenLogin(false)}> Sign up for free!</span>
                </p>
            </form>
        </div>
    );
}

export default FormLogin;
