import classNames from 'classnames/bind';
import styles from './FormRegister.module.scss';
import logo from '../../assets/image/logo.gif';

import { useState } from 'react';
import { UseAuthContext } from '../../context/UserAuth';
import { UseOpenModal } from '../../context/OpenModalProvider';

const cx = classNames.bind(styles);

function FormRegister({ handleSetIsOpenLogin }) {
    const [usernameValue, setUsernameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const { setIsOpenModal } = UseOpenModal();
    const { signup } = UseAuthContext();

    const handleRegister = async (e) => {
        e.preventDefault();

        const regex =
            /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/i;

        if (!regex.test(emailValue)) {
            alert('Email is WRONG ! Please re-enter!');
            return;
        }
        if (usernameValue.trim().length < 3) {
            alert('Name must be at least 3 characters! Please re-enter!');
            return;
        }
        if (passwordValue.trim().length < 6) {
            alert('Password must be at least 6 characters! Please re-enter!');
            return;
        }

        try {
            alert('Successfully signed up');
            await signup(emailValue, passwordValue, usernameValue);
            setUsernameValue('');
            setEmailValue('');
            setPasswordValue('');
            setIsOpenModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <form>
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
                <button onClick={handleRegister}>Sign up</button>
                <p>
                    You already have an account ? <span onClick={(e) => handleSetIsOpenLogin(true)}> Login</span>
                </p>
            </form>
        </div>
    );
}

export default FormRegister;
