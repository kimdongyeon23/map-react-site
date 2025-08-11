import { useState } from "react";
import { MainTab } from "./MainTab";
import { MapWithModal } from "../../Common/MapModal/MapWithModal";
import { usePlaceContext } from "../../contexts/PlaceContext";
import { useLikeMarker } from "../../hooks/useLikeMarker";

export function MainPage() {
    const [mainTabs, setMainTabs] = useState("all")
    const { places } = usePlaceContext();
    const { tabLikePlaces, handleLikeMarker } = useLikeMarker();
    const tabMainPlaces = mainTabs === "all" ? places:places.filter((filteredPlaces)=>filteredPlaces.category === mainTabs)

    return (
        <div className="mainContainer">
            <MainTab setMainTabs={setMainTabs}/>
            <MapWithModal tabMainPlaces={tabMainPlaces} tabLikePlaces={tabLikePlaces} handleLikeMarker={handleLikeMarker}/>
        </div>
    )
}