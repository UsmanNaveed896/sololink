import React, { useCallback, useState } from 'react';
import { LoginSocialGoogle } from 'reactjs-social-login';
import {

    GoogleLoginButton,
   
  } from 'react-social-login-buttons';

  const REDIRECT_URI =
  'https://sololink-accf3.firebaseapp.com';
const YourComponent = () => {
    const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState();

  const onLoginStart = useCallback(() => {
    alert('login start');
  }, []);

  console.log(provider,"provider")
  console.log(profile,"profile")

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider('');
    alert('logout success');
  }, []);

  const onLogout = useCallback(() => {}, []);
    
      const clientId = '761837354129-cjk8fgdd8mhnr847bgtj2qssqq8jb7o9.apps.googleusercontent.com';
  return (
    <div>
     <LoginSocialGoogle
          client_id={clientId || ''}
          onLoginStart={onLoginStart}
          redirect_uri={REDIRECT_URI}
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={err => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
  </div>
  );
};

export default YourComponent;