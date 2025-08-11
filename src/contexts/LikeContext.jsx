import { createContext, useContext, useState } from "react";

export const LikePlaceContext = createContext();

export const LikeProvider = ({children}) => {
    const [likePlaces, setLikePlaces] = useState([])
    const [likePlace, setLikePlace] = useState(null)
    
    return (
        <LikePlaceContext.Provider value={{likePlaces, setLikePlaces, likePlace, setLikePlace}}>
            {children}
        </LikePlaceContext.Provider>
    )
}

export const useLikePlaceContext = () => useContext(LikePlaceContext)