import { useEffect, useState } from "react";
import House from "../House/House";


const Apertment = () => {

    const [apertment, setApertment] = useState([]);

    const [dataLength, setDataLength] = useState(6);

    useEffect(()=>{
        fetch('/public/Apertment.json')
            .then(res => res.json())
            .then(data => setApertment(data));
    }, [])


    return (
        <div className="font-poppins">
           <div className="my-32">
           <h1 className="text-6xl text-center">Charming Family Home for Sale</h1>
           <br />
           <br />
           <p className="text-xl text-center">Discover this beautifully designed 3-bedroom home, offering spacious living areas, a modern kitchen, and a serene backyard garden.  Located in a sought-after neighborhood, it's the perfect place to call home. Don't miss this opportunity</p>
           </div>
           <br />
           <br />
           <br />
           <br />
            <br />
            <div className="grid grid-cols-2 gap-16">
                {
                    apertment.slice(0, dataLength).map(apertment => <House key={Apertment.id} appertment={apertment}></House>)
                }
            </div>
           <div className="justify-center text-center my-20">
           <div className={dataLength === apertment.length && 'hidden'}>
            <button  
            onClick={() => setDataLength(apertment.length)}
            className="btn btn-active btn-primary ">View Property</button>
            </div>
           </div>
        </div>
    );
};

export default Apertment;