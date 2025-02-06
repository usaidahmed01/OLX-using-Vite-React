import './index.css';
import Card from '../../components/card';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getADs } from '../../config/firebase';
import banner1 from '../../Assets/banner-1.png';
import img1 from '../../Assets/image-1.png';
import img2 from '../../Assets/image-2.png';
import img3 from '../../Assets/image-3.png';
import img4 from '../../Assets/img-4.png';
import img5 from '../../Assets/img-5.png';
import img6 from '../../Assets/img-6.png';
import img7 from '../../Assets/img-7.png';
import img8 from '../../Assets/img-8.png';
import img9 from '../../Assets/img-9.png';
import img10 from '../../Assets/img-10.png';
import img11 from '../../Assets/img-11.png';
import img12 from '../../Assets/img-12.png';
import img13 from '../../Assets/img-13.png';
import img14 from '../../Assets/img-14.png';
import Loader from '../../components/loader/Loading';

function Home() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsfromAPI();
    }, []);

    const getProductsfromAPI = async () => {
        const ads = await getADs();
        setProducts(ads);
    };

    if (!products.length) {
        return <Loader />;
    }

    return (
        <>
            <div>
                <ul className='nav-3'>
                    <li className='nav-3-li1'>All categories</li>
                    <li className='nav-3-lis'>Mobile Phones</li>
                    <li className='nav-3-lis'>Cars</li>
                    <li className='nav-3-lis'>Motorcycles</li>
                    <li className='nav-3-lis'>Houses</li>
                    <li className='nav-3-lis'>Video-Audios</li>
                    <li className='nav-3-lis'>Tablets</li>
                    <li className='nav-3-lis'>Land & Plots</li>
                </ul>
            </div>
            <div className='allcat container'>
                <div className='w-32'>
                    <img className='imges' src={img1} alt='Mobiles' />
                    <br />
                    Mobiles
                </div>
                <div className='w-32'>
                    <img className='imges' src={img2} alt='Vehicles' />
                    <br />
                    Vehicles
                </div>
                <div className='w-32'>
                    <img className='imges' src={img3} alt='Property For Sale' />
                    <br />
                    Property For Sale
                </div>
                <div className='w-32'>
                    <img className='imges' src={img4} alt='Property For Rent' />
                    <br />
                    Property For Rent
                </div>
                <div className='w-32'>
                    <img className='imges' src={img5} alt='Electronics & Home Appliances' />
                    <br />
                    Electronics & Home Appliances
                </div>
                <div className='w-32'>
                    <img className='imges' src={img6} alt='Bikes' />
                    <br />
                    Bikes
                </div>
                <div className='w-32'>
                    <img className='imges' src={img7} alt='Business Industrial & Agriculture' />
                    <br />
                    Business Industrial & Agriculture
                </div>
                <div className='w-32'>
                    <img className='imges' src={img8} alt='Services' />
                    <br />
                    Services
                </div>
                <div className='w-32'>
                    <img className='imges' src={img9} alt='Jobs' />
                    <br />
                    Jobs
                </div>
                <div className='w-32'>
                    <img className='imges' src={img10} alt='Animals' />
                    <br />
                    Animals
                </div>
                <div className='w-32'>
                    <img className='imges' src={img11} alt='Furniture & Home Decor' />
                    <br />
                    Furniture & Home Decor
                </div>
                <div className='w-32'>
                    <img className='imges' src={img12} alt='Fashion & Beauty' />
                    <br />
                    Fashion & Beauty
                </div>
                <div className='w-32'>
                    <img className='imges' src={img13} alt='Books, Sports & Hobbies' />
                    <br />
                    Books, Sports & Hobbies
                </div>
                <div className='w-32'>
                    <img className='imges' src={img14} alt='Kids' />
                    <br />
                    Kids
                </div>
            </div>
            <br />
            <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {products.map((item, index) => (
                    <div onClick={() => { navigate(`/detail/${item.id}`) }} key={index}>
                        <Card item={item} />
                    </div>
                ))}
            </div>
            <div className='margin-top'>
                <img src={banner1} className='w-full wforM' alt='Banner' />
                <hr />
            </div>
        </>
    );
}

export default Home;
