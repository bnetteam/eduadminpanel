import React, { useRef } from 'react';
import { firestore } from '../firebase';
import { addDoc, collection } from '@firebase/firestore';

export default function Home() {

    const username = useRef();
    const userpass = useRef();

    const ref = collection(firestore, "accounts");


    const handleSave = async(e) => {
        e.preventDefault();

        let data = {
            username: username.current.value,
            userpass: userpass.current.value
        }
        
        try {
            addDoc(ref, data);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className='home'>
            <form onSubmit={handleSave}>
                <div className="uk-margin">
                    <div className="uk-inline">
                        <span className="uk-form-icon" uk-icon="icon: user"></span>
                        <input className="uk-input" type="text" ref={username} aria-label="Not clickable icon" />
                    </div>
                </div>

                <div className="uk-margin">
                    <div className="uk-inline">
                        <span className="uk-form-icon" uk-icon="icon: lock"></span>
                        <input className="uk-input" type="password" ref={userpass} aria-label="Not clickable icon" />
                    </div>
                </div>
                <p uk-margin>
                    <button className="uk-button uk-button-primary">Submit</button>
                </p>
            </form>
        </div>
    )
}