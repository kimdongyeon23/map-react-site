import styled from 'styled-components';

export default function Card({ place }) {
    if (!place) return null;

    return (
    <CardWrapper>
        <Title>{place.name_en}</Title>
        <Category>{place.category}</Category>
        <Address>{place.address}</Address>
    </CardWrapper>
    )
}

const CardWrapper = styled.div`
    width: 18%;
    border: 1px solid #ddd;
    border-radius: 16px;
    padding: 16px;
    margin: 8px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;
const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
`;
const Category = styled.p`
    font-size: 14px;
    color: #555;
    margin-bottom: 4px;
`;
const Address = styled.p`
    font-size: 13px;
    color: #777;
`;