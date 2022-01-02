import React, {useState} from 'react';
import {db, auth} from '../firebase';
import firebase from '@firebase/app-compat';


function SendMessage({scroll}) {
    const [msg, setmsg]= useState('')

    async function sendMessages(e){ 
    e.preventDefault();
    const {uid, photoURL,displayName} = auth.currentUser;
    console.log(auth.currentUser);

    await db.collection('messages').add({
        text: msg,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        displayName
    })
    setmsg('');
    scroll.current.scrollIntoView({behavior:'smooth'})

    }


    return (
        <div>
               
            <form onSubmit={sendMessages}>
                <div className="sendMsg">
                <input className="enviar" style={{ width: '78%', fontSize: '15px', fontWeight: '550', margin: '2px 0% -13px 2%', borderRadius:'5px', padding:'1em',overflowY:'scroll'}} 
                       value={msg} onChange={(e) => setmsg(e.target.value)} placeholder="Escribe tu mensaje"></input>

                <button style={{ width: '20%', fontSize: '15px', fontWeight: '550', margin: '2px 0% -13px 2%'}} 
                        className="btn btn-outline-success btn-lg" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
