import { useLike } from '../../hooks/useLike';
import styled, { css } from 'styled-components'

export function MapModal({ selectedPlace, setSelectedPlace, setIsClose, modalSize }) {
    const closeModal = () => {
        setIsClose(false)
        setSelectedPlace(null)
    }
    const { handleLikeToggle } = useLike();
    return (
        <ModalWrapper style={modalSize}>
            <PlaceName>{selectedPlace.name_en}</PlaceName>
            <PlaceCategory>{selectedPlace.category}</PlaceCategory>
            <PlaceAddress>{selectedPlace.address}</PlaceAddress>
            <LikeButton onClick={() => {handleLikeToggle(selectedPlace)}}>like</LikeButton>
            <CloseButton onClick={closeModal}>닫기</CloseButton>
        </ModalWrapper>
    )
}
const ModalWrapper = styled.div`
    width: calc(100vw/3);
    background: #fff;
    padding: 16px 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
`;
const PlaceName = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
`;
const PlaceCategory = styled.div`
    font-size: 14px;
    color: #888;
    margin-bottom: 5px;
`;
const PlaceAddress = styled.div`
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;
`;
const commonButtonStyle = css`
    padding: 10px 25px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight : 500;
`;
const CloseButton = styled.button`
    ${commonButtonStyle}
    background: #fff;
    color: #333;
    border: 1px solid #d9d9d9
    `;
const LikeButton = styled.button`
    ${commonButtonStyle}
    background: #02075d;
    color: #fff;
    margin-right: 10px;
`;
