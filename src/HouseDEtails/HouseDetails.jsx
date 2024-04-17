import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { PiHouseLineThin } from "react-icons/pi";
import { FaBed } from "react-icons/fa6";
import { GiBathtub } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { LiaSitemapSolid } from "react-icons/lia";
import { FaRegSquare } from "react-icons/fa";
import { GiWoodenFence } from "react-icons/gi";
import Leaflet from "../Leaflet/Leaflet";




const HouseDetails = () => {
    const appertment = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
    const appert = appertment.find(appert => appert.id === idInt);
    console.log(appert);

    return (
        <div>



           
            <h2>job details of :{appert.price}</h2>

            <div className="card lg:card-side bg-base-100 ">
                <figure><img className="w-3/6" src={appert.img} alt="Album"/></figure>
                    <div className="card-body">
                       
                    </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="text-center font-poppins text-4xl">
                {appert.details}
            </div>
                <br />
                <br />
                <br />
                <div>
                    <h1 className="text-8xl text-center">About The Property</h1>
                    <br />
                    <br />
                    <p className="text-4xl text-center">For Sale: $ {appert.price}</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="flex justify-center gap-40 my-48">
                        <div>
                        <div className="flex gap-4">
                            <div>
                                <PiHouseLineThin className="text-5xl text-lime-700"></PiHouseLineThin>
                            </div>
                            <div>
                                <h1 className="my-3 text-2xl">Built in 2019</h1>
                            </div>
                        </div>
                        <br />
                        <div className="flex gap-4">
                            <div>
                                <FaBed className="text-5xl text-lime-700"></FaBed>
                            </div>
                            <div>
                                <h1 className="my-3 text-2xl">{appert.bedrooms} Bedrooms</h1>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="flex gap-4 ">
                            <div>
                                <GiBathtub className="text-5xl text-lime-700"></GiBathtub>
                            </div>
                            <div>
                                <h1 className="my-3 text-2xl">{appert.bathrooms} Bathrooms</h1>
                            </div>
                        </div>
                        <br />
                        <div className="flex gap-4">
                            <div>
                                <FaSwimmingPool className="text-5xl text-lime-700"></FaSwimmingPool>
                            </div>
                            <div>
                                <h1 className="my-3 text-2xl">{appert.pool} Pools</h1>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="flex gap-4">
                            <div>
                                <FaCar className="text-5xl text-lime-700"></FaCar>
                            </div>
                            <div>
                                <h1 className="my-3 text-2xl">3 Parking</h1>
                            </div>
                        </div>
                        <br />
                        <div className="flex gap-4">
                            <div>
                                <LiaSitemapSolid className="text-5xl text-lime-700"></LiaSitemapSolid>
                            </div>
                            <div>
                                <h1 className="my-3 text-2xl">{appert.sq_feet} Sq Ft</h1>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="flex gap-4">
                            <div>
                                <FaRegSquare className="text-5xl text-lime-700"></FaRegSquare>
                            </div>
                            <div>
                                <h1 className="my-3 text-2xl">1 Floor</h1>
                            </div>
                        </div>
                        <br />
                        <div className="flex gap-4">
                            <div>
                                <GiWoodenFence className="text-5xl text-lime-700"></GiWoodenFence>
                            </div>
                            <div>
                                <h1 className="my-3 text-2xl">LOT 1.6 Acres</h1>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            <div>
                <h1 className="text-center text-8xl">Amenities</h1>
                <br />
                <h1 className="text-center text-4xl">Complete List of Amenities and Features</h1>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="flex justify-center gap-36 font-poppins">
            <div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Washer and Dryer</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Air Conditioning</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Patio</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Furniture</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Hardwood Floors</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Whole house fan</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Balcony</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Surround sound</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Separate shower</h1>
                </div>
               </div>
            </div>
            <div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Fireplace</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Wi-Fi</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Surround sound</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Built-in dressing vanities</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Washer and Dryer</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Separate shower</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Fireplace</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Rainshower heads</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Wi-Fi</h1>
                </div>
               </div>
            </div>
            <div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Rainshower heads</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Solar heat</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Storm windows</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Tankless water heater</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Ramps</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Whole house fan</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Built-in dressing vanities</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Tankless water heater</h1>
                </div>
               </div>
               <div className="flex gap-2">
               <div>
                <TiTick className="text-4xl text-lime-700">
                    
                 </TiTick>
                </div>
                <div>
                    <h1 className="my-2">Air Conditioning</h1>
                </div>
               </div>
            </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
                <div className="font-poppins">
                    <h1 className="text-6xl text-center">Photo Gallery</h1>
                    <br />
                    <br />
                    <p className="text-xl text-base-400 text-center">Welcome to our Photo Gallery page, where you can <br /> explore a curated selection of stunning real estate imagery. <br /> Dive into our collection and visualize your dream home or investment property. <br /> Each photo captures the essence and unique features of our listings, <br /> providing you with a glimpse into the world of possibilities awaiting you. <br /> Whether you're a prospective buyer, seller, or just browsing, let our gallery inspire your next move in the real estate journey</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div>
                        <div>
                            <div className="justify-center mx-52">
                       
                                <div className="carousel rounded-box">
                                            <div className="carousel-item">
                                                <img src="/public/img/beautiful-tropical-beach-sea-with-umbrella-chair-around-swimming-pool (1).jpg" alt="Burger" />
                                            </div> 
                                            <div className="carousel-item">
                                                <img src="/public/img/beautiful-modern-bathroom-interior (1).jpg" alt="Burger" />
                                            </div> 
                                            <div className="carousel-item">
                                                <img src="/public/img/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv (1).jpg" alt="Burger" />
                                            </div> 
                                            <div className="carousel-item">
                                                <img src="/public/img/empty-modern-room-with-furniture (1).jpg" alt="Burger" />
                                            </div> 
                                          
                                         
                                </div>

                                <div className="carousel rounded-box">
                                            <div className="carousel-item">
                                                <img src="/public/img/2150836533 (1).jpg" alt="Burger" />
                                            </div> 
                                            <div className="carousel-item">
                                                <img src="/public/img/comfortable-modern-bedroom-with-elegant-decoration-lighting-generative-ai (1).jpg" alt="Burger" />
                                            </div> 
                                            <div className="carousel-item">
                                                <img src="/public/img/logo_make_11_06_2023_272.jpg" alt="Burger" />
                                            </div> 
                                            <div className="carousel-item">
                                                <img src="/public/img/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table (1).jpg" alt="Burger" />
                                            </div> 
                                          
                                         
                                </div>
                                
                                <div className="carousel rounded-box">
                                            <div className="carousel-item">
                                                <img src="/public/img/modern-kitchen-interior-white-colors (1).jpg" alt="Burger" />
                                            </div> 
                                            <div className="carousel-item">
                                                <img src="/public/img/ocean-travel-modern-nobody-infinity (1).jpg" alt="Burger" />
                                            </div> 
                                            <div className="carousel-item">
                                                <img src="/public/img/1266.jpg" alt="Burger" />
                                            </div> 
                                            <div className="carousel-item">
                                                <img src="/public/img/992.jpg" alt="Burger" />
                                            </div> 
                                          
                                         
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
               
            </div>



            <br />
            <br />
            <Leaflet></Leaflet>
     
          


        </div>
        
    );
};

export default HouseDetails;