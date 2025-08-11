import { useState } from 'react';

export function useMainMarker() {
const [selectedPlace, setSelectedPlace] = useState(null);
const [isClose, setIsClose] = useState(false);
const [modalSize, setModalSize] = useState({ width: '30%', height: '100%' });
const handleMainMarker = (place) => {
    if (!selectedPlace || place.id !== selectedPlace.id) {
    setIsClose(true);
    setSelectedPlace(place);
    setModalSize({ width: '30%' });
    }
};

return {
    selectedPlace,
    isClose,
    modalSize,
    setIsClose,
    handleMainMarker,
    setSelectedPlace
};
}
