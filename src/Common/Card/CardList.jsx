import Card from "./Card";
import styled from 'styled-components';

export default function CardList({searchPlaces=[], tabLikePlaces=[]}) {
    return (
        <CardWrap>
            {tabLikePlaces.map(place => 
            (<Card key={place.id}
                place={place}
            />))}
            {searchPlaces.map(place => 
            (<Card key={place.id}
                place={place}
                searchPlaces={searchPlaces}
            />))}
        </CardWrap>
    )
}

const CardWrap = styled.div`
    width: 90%;
    margin: 0 auto;
    display : flex;
    flex-wrap : wrap;
`;