import React, { useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import osm from "./Provider";
import "leaflet/dist/leaflet.css";

const Leaflet = () => {
    const [center, setCenter] = useState({ lat: 23.6850 , lng: 90.3563 });
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();
    const position = [23.6850, 90.3563];

    return (
        <div>
                    <div className='text-center font-poppins'>
                         <h1 className='text-6xl'>
                            Explore Properties Near You
                        </h1>
                        <br />
                        <br />
                        <p className='text-2xl'>Discover a wide range of properties available for sale or rent in your desired location. <br /> Use our interactive map to find your dream home today</p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
            <div>
                <MapContainer
                    center={center}
                    zoom={ZOOM_LEVEL}
                    ref={mapRef}
                    style={{ height: "400px", width: "100%" }}
                >
                    <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}></TileLayer>

                    <Marker position={position}>
                                <Popup>
                                    There is the  <br /> Prity House.
                                </Popup>
                   </Marker>

                </MapContainer>
            </div>
        </div>
    );
};

export default Leaflet;
