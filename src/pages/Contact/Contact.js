import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Contact() {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [reasonValue, setReasonValue] = useState('');
    const [messageValue, setMessageValue] = useState('');

    const handleClickSend = (e) => {};

    return (
        <div className={cx('wrapper')}>
            <h3>Contact us</h3>
            <form>
                <input
                    type="text"
                    placeholder="Your name*"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Your email*"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Why are you contacting us*"
                    value={reasonValue}
                    onChange={(e) => setReasonValue(e.target.value)}
                />
                <textarea
                    type="text"
                    placeholder="Message"
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}
                />
                <button onClick={handleClickSend}>Send</button>
            </form>
        </div>
    );
}

export default Contact;
