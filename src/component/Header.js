import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Menu from '../component/Menu';

import logo from '../image/logo.png'

const HeaderStyle = styled.div`
    display: inline-flex;
    align-items: center;
`;

const LogoStyle = styled.img`
    margin: 10px;
    width: 150px;
`;

function Header(){
    return (
        <HeaderStyle>
            <Link to='/'><LogoStyle src={logo} /></Link>
            <Menu />
        </HeaderStyle>
    );
}

export default Header;