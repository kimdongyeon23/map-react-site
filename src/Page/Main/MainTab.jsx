import '../../Common/Tab.scss';

export function MainTab({setMainTabs}) {
    return (
        <div className="tabWrap">
            <button onClick={()=>setMainTabs("all")}>All</button>
            <button onClick={()=>setMainTabs("Museum")}>Museum</button>
            <button onClick={()=>setMainTabs("Park")}>Park</button>
            <button onClick={()=>setMainTabs("Landmark")}>Landmark</button>
        </div>
    )
}