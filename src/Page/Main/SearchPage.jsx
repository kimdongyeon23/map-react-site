import { useState } from "react";
import { usePlaceContext } from "../../contexts/PlaceContext";
import CardList from "../../Common/Card/CardList";
import styled from "styled-components";

export function SearchPage() {
    const { places } = usePlaceContext();
    const [inputValue, setInputValue] = useState('');
    const [searchPlaces, setSearchPlaces] = useState([]);
    const [isEmptyResult, setIsEmptyResult] = useState(false);

    function isExist() {
        if(inputValue.trim() === ''){
            setSearchPlaces([]);
            setIsEmptyResult(true);
            return;        
        }
        const matchedPlaces = places.filter(place=>place.name_en.toLowerCase().includes(inputValue.toLowerCase()))
        setSearchPlaces(matchedPlaces)
        setInputValue('')
        setIsEmptyResult(matchedPlaces.length === 0);
    }

    return (
        <div className="mainContainer">
            <SearchBar>
                <SearchInput
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="검색어를 입력하세요"
                />
                <SearchButton onClick={isExist}>검색</SearchButton>
            </SearchBar>
            {isEmptyResult && (<NoResultText>검색 결과가 없습니다.</NoResultText>)}
            <CardList searchPlaces={searchPlaces} />
        </div>
    );
}

const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    margin: 100px 0 40px 0;
`
const SearchInput = styled.input`
    padding: 1rem 1.5rem;
    font-size: 1.25rem;
    border: 2px solid #ccc;
    border-radius: 0.5rem;
    width: 50%;
    max-width: 680px;
    outline: none;

    &:focus {
        border-color: #949494;
    }
`
const SearchButton = styled.button`
    padding: 1rem 2rem;
    font-size: 1.25rem;
    background-color: #02075d;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
`
const NoResultText = styled.p`
    color: #999;
    font-size: 25px;
    font-weight: 500;
    text-align: center;
`