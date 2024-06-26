import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Link } from 'react-router-dom';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => {
        const {signInDetails: {loginId}} = user;

        return (
          <main>
            <h1 style={{ color: 'violet' }}>Welcome {loginId}!</h1>
            <Link to="/qrcode">Goto QRCode</Link>
            <hr></hr>
            <button onClick={signOut}>Sign out</button>
          </main>
        )
      } 
      }
    </Authenticator>
  );
}