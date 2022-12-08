 
 /*App.js*/
import React, { useState, useEffect } from 'react';
import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
/* eslint-disable-next-line, eslint-disable no-console, no-control-regex */
function App() {
    const [ profile, setProfile ] = useState([]);
    const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });
     // eslint-disable-next-line 
    /* eslint-disable-next-line, eslint-disable no-console, no-control-regex */
    const onSuccess = (res) => {
        setProfile(res.profileObj);
        console.log('success', res);
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        setProfile(null);
    };

    return (
        <div className="center">
             
             
             
            {/* {profile ?(
               <div>  
               <img src={profile.imageUrl} className="center" alt="รูป" />
               <h3>ผู้ใช้</h3>
               <p>ชื่อ : {profile.name}</p>
               <p>อีเมล : {profile.email}</p>
               <br />
               <br />
               <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
           </div>
            ): (
              <GoogleLogin
                  clientId={clientId}
                  buttonText="Sign in with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
              />
          )
           } */}
        </div>
    );
} // eslint-disable-next-line 
export default App;