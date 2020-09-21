// 헤더(로고, 메뉴 포함)

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Menu from '../component/Menu';

import logo from '../image/logo.png';

//헤더 전체 스타일
const HeaderStyle = styled.div`
    display: inline-flex;
    align-items: center;
    position : fixed;
    z-index:3;
`;

//로고 스타일
const LogoStyle = styled.img`
    margin: 10px;
    width: 150px;
`;

function Header(){
    return (
        <HeaderStyle>
            <Link to='/'><LogoStyle src={logo} /></Link>  { /* 로고 */ }
            <Menu />  { /* 메뉴 */ }
        </HeaderStyle>
    );
}

export default Header;