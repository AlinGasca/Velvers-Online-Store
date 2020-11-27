import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../fierebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handelSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handelChange = event => {
        const {value, name } = event.target;
        this.setState({ [name]: value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handelSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="email"
                        handelChange={this.handelChange}
                        required 
                    />
                    <FormInput 
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="password"
                        handelChange={this.handelChange}
                        required

                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;