import CardList from "../../Common/Card/CardList";
import { LikeTab } from "./LikeTab";
import { MapWithModal } from "../../Common/MapModal/MapWithModal";
import { useLikeMarker } from "../../hooks/useLikeMarker";

export function LikePage({place}) {
    const { handleLikeMarker, setLikeTabs, tabLikePlaces=[] } = useLikeMarker();

    return(
        <div className="mainContainer">
            <LikeTab setLikeTabs={setLikeTabs}/>
            <MapWithModal tabLikePlaces={tabLikePlaces} handleLikeMarker={handleLikeMarker}/>
            <CardList place={place} tabLikePlaces={tabLikePlaces}/>
        </div>
    )
}