import { useState } from 'react';
import { useLikePlaceContext } from '../contexts/LikeContext';

export function useLikeMarker() {
    const {likePlaces} = useLikePlaceContext()
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [likeTabs, setLikeTabs] = useState("all")

const handleLikeMarker = (newLike) => {
    if (!selectedPlace || newLike.id !== selectedPlace.id) {
        setSelectedPlace(newLike);
    }
};
const tabLikePlaces = likeTabs === "all" ? likePlaces:likePlaces.filter((filteredPlaces)=>filteredPlaces.category === likeTabs)

    return {
        handleLikeMarker,
        setSelectedPlace,
        setLikeTabs,
        selectedPlace,
        tabLikePlaces,
        likeTabs
    };
}
