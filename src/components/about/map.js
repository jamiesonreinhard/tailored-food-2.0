// components/MapComponent.js
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';  // Required for Mapbox to work correctly
import { entrepreneurProjects, consultingProjects } from '@/data/projects';


const MapComponent = () => {

    const mapContainerRef = useRef(null);
    const map = useRef(null);
    const combinedProjects = [...entrepreneurProjects, ...consultingProjects];


    useEffect(() => {

        if (map.current) return;  // If map is already initialized, return early

        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

        // Initialize the map
        map.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [0, 0],  // Adjust to your desired initial location
            zoom: 3
        });

        // Create the pins based on the provided data
        map.current.on('load', () => {
            combinedProjects.forEach(project => {
                const el = document.createElement('div');
                el.className = 'marker';
                new mapboxgl.Marker(el)
                    .setLngLat([project.longitude, project.latitude])
                    .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(project.location))
                    .addTo(map.current);
            });
        })
    }, []);

    return (
        <div className="w-full h-full relative">
            <div className="map-container w-full h-full" ref={mapContainerRef}></div>
            <style jsx>{`
                .marker {
                    background-color: black;
                    width: 60px;
                    height: 60px; // <-- Adjusted height here
                    border-radius: 50%;
                    cursor: pointer;
                }
                `}
            </style>
        </div>
    );
};

export default MapComponent;
