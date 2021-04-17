import React from 'react';
import './sign-in-out.styles.scss';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-out'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUpPage;