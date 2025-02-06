import logo from '../../Assets/logo.png';
import './index.css';
import car from '../../Assets/car-front.png';
import building from '../../Assets/building-2.png';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth, logout } from '../../config/firebase';
import { useEffect, useState } from 'react';
import { ButtonWrapper } from '../PageWrapper';
import { ShoppingBag } from 'lucide-react';

function Header() {
    const navigate = useNavigate();
    const [user, setUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            console.log("user Picture ", user.photoURL);

        });
    }, []);

    const signOut = async () => {
        await logout();
        setUser(null);
        navigate('/');
    };

    return (
        <div className='main-div'>
            <div className='container mx-auto'>
                <ul className='nav-1'>
                    <li onClick={() => navigate('/')}><img className='olx-logo-1' src={logo} /></li>
                    <li className='nav-1-lis'><img className='nav-1-car-builing' src={car} />  MOTORS</li>
                    <li className='nav-1-lis'><img className='nav-1-car-builing' src={building} /> PROPERTY</li>
                </ul>
                <ul className='nav-2'>
                    <li className='loc-tab'><select className='loc-bar'>
                        <option selected>Pakistan</option>
                        <option>India</option>
                        <option>Bangladesh</option>
                    </select></li>
                    <li className='li-widths search-tab'><input className='search-bar' placeholder='Find Cars, Mobile Phones and more...' type='search' /></li>
                    {user ? <>
                        <li className='li-widths'><span className='email'>{user.displayName}</span></li>

                    {user.photoURL !== null ? 
                        <li className="li-widths"><img src={user.photoURL} alt={user.displayName} className='profile-img' onClick={() => navigate('/editProfile')} /></li>
                        : 
                        <li className='li-widths' onClick={() => navigate('/editProfile')}><ButtonWrapper>
                        <button className="Btn">
                          <svg className="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                          <span className="icon2" />
                          <span className="tooltip">Upload</span>
                        </button>
                      </ButtonWrapper></li>}

                    <li  className='li-widths'><button className='login-btn' onClick={signOut}>Logout</button></li>
                    <li  className='li-widths ' onClick={() => navigate('/addtocart')}> <ShoppingBag /></li> </>
                    :
                    <li className='li-widths'><button className='login-btn' onClick={() => navigate('/login')}>Login</button> </li>}
                    <li  className='li-widths'><button className='sell-btn' onClick={() => navigate('/adpage')}>SELL</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
