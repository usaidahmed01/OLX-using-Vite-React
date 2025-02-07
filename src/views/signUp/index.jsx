import { useNavigate } from "react-router-dom";
import { signup } from "../../config/firebase";
import { useState } from "react";
import './index.css';
import logo from '../../assets/logo-2.png'
import { PageWrapper } from "../../components/PageWrapper";

function SignUp() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const register = async () => {
        try {
            await signup({ fullName, email, password });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <PageWrapper>
            <div className='flex-div'>
                <form className="form" onSubmit={(e) => e.preventDefault()}>
                    <div className='w-32 flex justify-center'>
                        <img src={logo} alt="olx" />
                    </div>
                    <p className="form-title">Welcome To OLX</p>
                    <div className="input-container">
                        <input type="text" placeholder="Enter fullname" required onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <input type="email" placeholder="@yourmail.com" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <input type="password" placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="submit" onClick={register}>
                        Sign Up
                    </button>
                    <p className="signup-link">
                        Already have an account? 
                        <a href="/login" className='underline hover:no-underline font-bold'>Login</a>
                    </p>
                </form>
            </div>
        </PageWrapper>
    );
}

export default SignUp;
