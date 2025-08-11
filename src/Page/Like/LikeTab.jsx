import '../../Common/Tab.scss';

export function LikeTab({setLikeTabs}) {
    return (
        <div className="tabWrap">
            <button onClick={()=>setLikeTabs("all")}>All</button>
            <button onClick={()=>setLikeTabs("Museum")}>Museum</button>
            <button onClick={()=>setLikeTabs("Park")}>Park</button>
            <button onClick={()=>setLikeTabs("Landmark")}>Landmark</button>
        </div>
    )
}
