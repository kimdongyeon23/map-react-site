import { createContext, useContext, useState, useEffect } from "react";

export const PlaceContext = createContext();

export const PlaceProvider = ({children}) => {
    const [places, setPlaces] = useState([])
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/dongyeon23/nycPlaces/refs/heads/main/nycJson')
        .then(res => res.json())
        .then(data => setPlaces(data))
        .catch(err => console.error("Failed to load places:", err));
    }, []);
    
    return (
        <PlaceContext.Provider value={{places, setPlaces}}>
            {children}
        </PlaceContext.Provider>
    )
}

export const usePlaceContext = () => useContext(PlaceContext)