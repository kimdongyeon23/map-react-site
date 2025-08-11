import { useMainMarker } from "../../hooks/useMainMarker";
import { MapModal } from "./MapModal";
import { MapView } from "./MapView";
import { useState } from 'react'
import styled from 'styled-components';

export function MapWithModal({ tabMainPlaces, handleLikeMarker, tabLikePlaces}) {

    const [mapSize] = useState({width:'100%',  height: '100%'})
    const {
        selectedPlace,
        isClose,
        modalSize,
        setIsClose,
        handleMainMarker,
        setSelectedPlace
    } = useMainMarker();

    return (
        <Container>
            <MapView
                mapSize={mapSize}
                handleMainMarker={handleMainMarker}
                tabMainPlaces={tabMainPlaces}
                isClose={isClose}
                setIsClose={setIsClose}
                tabLikePlaces={tabLikePlaces}
                handleLikeMarker={handleLikeMarker}
            />
            {isClose === true && (
            <MapModal
                selectedPlace={selectedPlace} 
                setSelectedPlace={setSelectedPlace}
                setIsClose={setIsClose}
                modalSize={modalSize}
            />
            )}
        </Container>
    )
}

const Container = styled.div`
display: flex;
width: 100vw;
height: 30vw;
`;