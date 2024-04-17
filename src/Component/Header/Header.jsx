import { VscThreeBars } from "react-icons/vsc";
import { MdMyLocation } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { GiHouse, GiSpookyHouse, GiFamilyHouse } from "react-icons/gi";
import { BsFillHouseDoorFill } from "react-icons/bs"; // Importing from the correct package

const Header = () => {
    return (
        <div>
            <div className="card image-full">
                <figure><img src="/public/banner.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className="text-center text-6xl font-poppins">BEST PLACE TO FIND AND EXPLORE <br /> THAT ALL YOU NEED</h1>
                    <br />
                    <br />
                    <p className="text-center text-2xl font-poppins">Find Best Place, Restaurant, Hotel, Real State and many more things in just One click</p>
                    <br />
                    <br />
                    <h1 className="bg-white h-20 text-2xl text-black w-3/4 animate__animated animate__lightSpeedInRight animate__delay-1s">
                        <div className="flex gap-96">
                            <div className="">
                                <div className="flex my-5 mx-8 rounded-3xl">
                                    <div>
                                        <h1 className="text-2xl mr-2 font-poppins">What?</h1>
                                    </div>
                                    <div className="bg-white text-xl mr-10 font-poppins">
                                        <input type="text" name="" placeholder="Ex: Place, Restaurant, Food" id="" />
                                    </div>
                                    <VscThreeBars className="text-4xl mr-56"></VscThreeBars>
                                    <hr />
                                    <div>
                                        <h1 className="text-2xl mr-2 font-poppins">Location</h1>
                                    </div>
                                    <div className="bg-white text-xl font-poppins">
                                        <input type="text" name="" placeholder="Ex: London, New York" id="" />
                                    </div>
                                    <MdMyLocation className="text-4xl mr-4"></MdMyLocation>
                                </div>
                            </div>
                            <div className="my-2">
                                <button className="btn btn-error w-40 h-16 text-white font-poppins">
                                    Search
                                    <IoSearch></IoSearch>
                                </button>
                            </div>
                        </div>
                    </h1>
                    <div className="bg-slate-200 w-44 my-80">
                        <h1></h1>
                    </div>
                    <br />
                    <div className="card-actions justify-center gap-12 -my-48 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4">
                        <div className="card w-96 bg-base-200 text-neutral-content hover:bg-red-400">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"><GiSpookyHouse className="text-6xl text-black hover:scale-105"></GiSpookyHouse></h2>
                                <p className="text-3xl text-black font-semibold font-poppins">Apartment</p>
                                <p className="text-xl text-base-700 font-semibold font-poppins">280 Listed</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-200 text-neutral-content hover:bg-red-400">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"><GiHouse className="text-6xl text-black hover:scale-105"></GiHouse></h2>
                                <p className="text-3xl text-black font-semibold font-poppins">House</p>
                                <p className="text-xl text-base-700 font-semibold font-poppins">150 Listed</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-200 text-neutral-content hover:bg-red-400">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"><BsFillHouseDoorFill className="text-6xl text-black hover:scale-105"></BsFillHouseDoorFill></h2> {/* Using the correct imported icon */}
                                <p className="text-3xl text-black font-semibold font-poppins">Hotels</p>
                                <p className="text-xl text-base-700 font-semibold font-poppins">380 Listed</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-200 text-neutral-content hover:bg-red-400">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"><GiFamilyHouse className="text-6xl text-black hover:scale-105"></GiFamilyHouse></h2>
                                <p className="text-3xl text-black font-semibold font-poppins">Mansion</p>
                                <p className="text-xl text-base-700 font-semibold font-poppins">250 Listed</p>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Header;
