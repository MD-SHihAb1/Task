import { FaHouseChimney } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdEventAvailable } from "react-icons/md";

const House = ({appertment}) => {

    const {img, details, sq_feet, hospital_distance, school_distance, supershop_distance, location, price, id, available} = appertment;

    return (
        <div className=" ">
           <div className="card lg:card-side bg-base-100 shadow-xl font-poppins grid grid-cols-2 mx-16 my-16">
                 <figure><img src={img} alt="Album"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">$ {price} USD</h2>
                            <p>
                                <div className="flex gap-2">
                                    <div>
                                    <FaHouseChimney className="text-xl"></FaHouseChimney>
                                    </div>
                                    <div>
                                        {sq_feet} SQ
                                    </div>
                                    
                                </div>
                                
                                
                            </p>
                           
                                <div className="flex gap-2"> 
                                    <div>
                                        <IoLocation className="text-2xl"></IoLocation>
                                    </div>
                                    <div>
                                        {location}
                                    </div>
                                   
                                </div>
                                <div className="flex gap-2">
                                <div>
                                    <MdEventAvailable className="text-2xl"> </MdEventAvailable>
                                </div>
                                <div>
                                Available: {available}
                                </div>
                                </div>
                            
                            <div className="card-actions justify-end">
                                <Link to={`/house/${id}`}>
                                         <button className="btn btn-primary">Details</button>
                                </Link>
                            </div>
                        </div>
            </div>
        </div>
    );
};

export default House;