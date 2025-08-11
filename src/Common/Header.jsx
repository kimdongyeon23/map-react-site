import '../App.scss'
import { Link } from "react-router-dom"
import styled from 'styled-components';

export function Header() {
    return (
        <HeaderWrap>
            <Nav>
                <HeaderLink to="/" className="header-link">Main</HeaderLink>
                <HeaderLink to="/search" className="header-link">검색</HeaderLink>
                <HeaderLink to="/like" className="header-link">Like</HeaderLink>
            </Nav>
        </HeaderWrap>
    )
}

const HeaderWrap = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: end;
    align-items: center;
    background: white;
    top: 0;
    left: 0;
    position: fixed;
    box-shadow: 0 1px 5px rgba(0,0,0,0.1);
    z-index: 1000;
    padding: 0 30px;
`
const Nav = styled.nav`
    display: flex;
`
const HeaderLink = styled(Link)`
    display: block;
    padding: 0 20px; 
`