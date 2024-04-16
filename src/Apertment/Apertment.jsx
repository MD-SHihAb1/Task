import { useEffect, useState } from "react";
import House from "../House/House";


const Apertment = () => {

    const [apertment, setApertment] = useState([]);

    useEffect(()=>{
        fetch('/public/Apertment.json')
            .then(res => res.json())
            .then(data => setApertment(data));
    }, [])


    return (
        <div>
            <h1>hiiii{apertment.length}</h1>
            <div>
                {
                    apertment.map(apertment => <House key={Apertment.id} appertment={apertment}></House>)
                }
            </div>
        </div>
    );
};

export default Apertment;