import { SignIn, SignUp } from '@clerk/nextjs';
import React from 'react';
import "../../../globals.css";

const SignInPage = () => {
  return (
    <main className='flex items-center justify-center flex-col min-h-[100vh] w-full'>
        <SignIn />
    </main>
  );
}

export default SignInPage