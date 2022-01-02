import React ,{useState, useEffect,useRef} from 'react'
import { auth, db } from '../firebase';
import SendMessage from './SendMessage';
import SignOut from './SignOut'

function Chat() {
const scroll=useRef()    
const [messages, setMessages] = useState([]);

useEffect(()=>{
db.collection('messages').orderBy('createdAt').onSnapshot( snapshot =>{
    setMessages(snapshot.docs.map(doc => doc.data()))
    
 } )
}, [])

    return (
        <div>
            <SignOut/>
        <div className="msgs">
            {messages.map(({id, text, photoURL,uid, displayName }) => (
                <div>
                
                <div key={id} className={`msg ${uid===auth.currentUser.uid? 'sent': 'received'}`}>

                  <div className='mks' style={{fontSize:'16pt' }}>

                  <img  className='foto' src={photoURL} alt=""></img>       
                   
                  </div> 

                  <div className='mss'>
                    <p className='nombre'>{displayName}</p>
                    <p className='msj'>{text}</p>
                 </div>
                    

                    
                </div>
                </div>    
            ))}
        </div>
            <SendMessage scroll={scroll}/>
            <div ref={scroll}></div>

        </div>
    )
}

export default Chat

