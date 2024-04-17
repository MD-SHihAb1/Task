import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
const Animate = () => {
    useEffect(() => {
        AOS.init({duration: "1000"})
    }, [])
    return (
        <div>
            <div className='font-poppins'>
                <div>
                    <h1 className='text-6xl text-center '>Discover Your Dream Home with Us</h1>
                    <br />
                    <br />
                    <p className='text-center text-xl'>Explore a curated selection of houses,  apartments, and more. <br /> Whether you're looking to buy or rent, we have the perfect property to fit your lifestyle. <br /> Start your search today</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    
                </div>
            </div>
                    <div>
               <div>
                <div data-aos="fade-right">
                <div className='w-1/3 mx-40'>
                        <div>
                        <img src="/public/luxury-house-real-estate-sale-property-generative-ai.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div data-aos="fade-left">
                <div className='w-1/3 mx-[60%]'>
                    <div>
                    <img src="/public/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg" alt="" />
                    </div>
                </div>
                </div>
               </div>
               <br />
               <br />
               <br />
               <br />
               <div>
                <div  data-aos="fade-right">
                <div className='w-1/3 mx-40'>
                        <div>
                        <img src="/public/swimming-pool-resort (1).jpg" alt="" />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div data-aos="fade-left">
                <div className='w-1/3 mx-[60%]'>
                    <div>
                    <img src="/public/relax-area-resort.jpg" alt="" />
                    </div>
                </div>
                </div>
               </div>
               <br />
               <br />
               <br />
               <br />
               <div>
                <div  data-aos="fade-right">
                <div className='w-1/3 mx-40'>
                        <div>
                        <img src="/public/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div data-aos="fade-left">
                <div className='w-1/3 mx-[60%]'>
                    <div>
                    <img src="/public/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge (1).jpg" alt="" />
                    </div>
                </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Animate;