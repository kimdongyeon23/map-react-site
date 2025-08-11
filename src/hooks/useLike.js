import { useContext } from "react";
import { LikePlaceContext } from "../contexts/LikeContext";

export const useLike = ()=>{
    const { likePlaces, setLikePlaces } = useContext(LikePlaceContext);
    const handleLikeToggle = (clickedPlace) => {
        const isExist = likePlaces.some((prevLikedPlace)=>prevLikedPlace.id === clickedPlace.id)
        if(!isExist) {
            setLikePlaces(prev => [...prev, clickedPlace])
        }else {
            setLikePlaces(likePlaces.filter(prev=>prev.id !== clickedPlace.id))
        }
    }
    return { handleLikeToggle }
}