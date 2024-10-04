import { SignIn, SignUp } from '@clerk/nextjs';
import React from 'react';
import "../../../globals.css";

const SignUpPage = () => {
  return (
    <main className='sign_in_page'>
        <SignUp />
    </main>
  );
}

export default SignUpPage