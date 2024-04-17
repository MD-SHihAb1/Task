import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import osm from "./Provider";

const Leaflet = () => {

    const [center, setCenter] = useState({ lat: 23.6850 , lng: 90.3563 });
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();

    return (
        <div>
            <div>
                <MapContainer 
                    center={center}
                    zoom={ZOOM_LEVEL}
                    ref={mapRef}
                >
                    <TileLayer url={osm.maptiler.url} attribution={osm.maptilerm.attribution}></TileLayer>
                </MapContainer>
            </div>
        </div>
    );
};

export default Leaflet;
