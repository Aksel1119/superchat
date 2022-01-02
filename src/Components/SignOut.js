import React from 'react'
import { auth } from '../firebase'

function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <button className='btn btn-outline-danger' 
            style={{ padding: '20px', fontSize: '15px', borderRadius: '5px', fontWeight: '600', margin:'5px'}}
                    onClick={()=> auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut
