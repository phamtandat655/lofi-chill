import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { useState } from 'react';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const cx = classNames.bind(styles);

function Contact() {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [reasonValue, setReasonValue] = useState('');
    const [messageValue, setMessageValue] = useState('');

    const handleClickSend = async (e) => {
        e.preventDefault();

        const regex =
            /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/i;

        if (!regex.test(emailValue)) {
            alert('Email is WRONG ! Please re-enter!');
            return;
        }
        if (nameValue.trim().length < 3) {
            alert('Name must be at least 3 characters! Please re-enter!');
            return;
        }
        if (reasonValue.trim().length < 10) {
            alert('Reason must be at least 10 characters! Please re-enter!');
            return;
        }
        if (messageValue.trim().length < 10) {
            alert('Message must be at least 10 characters! Please re-enter!');
            return;
        }

        try {
            alert('Successfully send');
            await addDoc(collection(db, 'contacts'), {
                name: nameValue,
                email: emailValue,
                reason: reasonValue,
                message: messageValue,
            });
            setEmailValue('');
            setNameValue('');
            setMessageValue('');
            setReasonValue('');
        } catch (error) {
            console.log(error);
        }
    };

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
