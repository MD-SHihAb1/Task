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
        <div>
            <h1>hiiii{apertment.length}</h1>
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