import React from 'react'
import firebase from 'firebase/compat/app';
import {auth} from '../firebase'

function SignIn() {

    function singIn (){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>

            <h1 className="display-1" style={{color:'#FFD700', margin:'50px',marginTop:'0px', fontWeight:'bold'}}>Super-chat</h1>
            <h1 className="display-3" style={{color:'#0d6efd', margin:'80px', marginBottom:'30px'}}>¡Bienvenido!</h1>
            
            <button  className='btn btn-outline-primary' style={{ padding: '30px', fontSize: '20px', borderRadius: '5px', fontWeight: '600' }}
                    onClick={singIn}>Sign in with google</button>
        </div>
    )
}

export default SignIn

