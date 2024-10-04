import { SignIn, SignUp } from '@clerk/nextjs';
import React from 'react';
import "../../../globals.css";

const SignInPage = () => {
  return (
    <main className='sign_in_page'>
        <SignIn />
    </main>
  );
}

export default SignInPage