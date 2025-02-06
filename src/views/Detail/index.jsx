import { useState, useEffect } from 'react';
import './index.css';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../config/firebase';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/adcart';
import { auth } from '../../config/firebase';
import { onAuthStateChanged } from "firebase/auth";
import Loader from '../../components/loader/Loading';
import { useNavigate } from 'react-router-dom';

function Detail(props) {
    const [singleProduct, setSingleProduct] = useState([]);
    const [user, setUser] = useState();
    const { adId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { price, title, description, imageURL } = singleProduct;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        getAProduct();
    }, []);

    const getAProduct = async () => {
        const singleproduct = await getSingleProduct(adId);
        setSingleProduct(singleproduct);
    }

    const addToCartBtn = () => {
        dispatch(addToCart(singleProduct));
        alert("Item Added Successfully");
        navigate('/');
    }

    return (
        <>
            {singleProduct.length === 0 ? (
                <Loader />
            ) : (
                <>
                    <br />
                    <div className='container'>
                        <div className='img-profile-div'>
                            <div className='img-div rounded'>
                                <img className='api-img border border-[#CCD5D6] rounded' src={imageURL} />
                                <div className='price-div'>
                                    <p className='font-bold'>$ {price}</p>
                                    <p>{title}</p>
                                </div>
                                <div className='description-div'>
                                    <p className='font-bold'>Description</p>
                                    <p>{description}</p>
                                </div>
                            </div>
                            {user && (
                                <div className='profile-div rounded'>
                                    <span className='img-span'>
                                        <img className='profile-img' src={user?.photoURL} /> {user.displayName}
                                    </span>
                                    <div className='chat-btn' onClick={addToCartBtn}>
                                        Add To Cart
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Detail;
