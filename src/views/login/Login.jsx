import logo from '../../assets/logo-2.png'
import './index.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../config/firebase";
import { PageWrapper } from '../../components/PageWrapper';

export default function LoginPage() {

    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signIn = async () => {
        try {

            await login({ email, password });
            navigate('/')
        } catch (error) {
            alert(error)
        }



    }



    return (
        <PageWrapper >
          <div className='flex-div'>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div className='w-32 flex justify-center'>
                <img src={logo} alt="olx" />
              </div>
                <p className="form-title">Welcome To OLX </p>
                <div className="input-container">
                    <input type="email" placeholder="@yourmail.com" required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="submit sign-In" onClick={signIn}>
                    Sign in
                </button>
                <p className="signup-link">
                    Don't have an Account?
                    <a href = "/signup" className='underline hover:no-underline font-bold'> Sign up</a>
                </p>
            </form>
            </div>
        </PageWrapper>
    );



}

