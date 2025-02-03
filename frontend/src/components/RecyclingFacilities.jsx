
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const RecyclingFacilities = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    setError("Geolocation not supported or permission denied");
                }
            );
        } else {
            setError("Geolocation is not supported by this browser");
        }
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Recycling Facilities</h1>
            <p className="mb-6 text-gray-600">
                Locate nearby recycling centers to properly dispose of waste.
            </p>
            {error && <p className="text-red-500">{error}</p>}
            {location ? (
                <MapContainer
                    center={[location.lat, location.lng]}
                    zoom={13}
                    className="h-96 w-full rounded-lg shadow-lg"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[location.lat, location.lng]}>
                        <Popup>Your Location</Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <p>Fetching location...</p>
            )}
        </div>
    );
};

export default RecyclingFacilities;
