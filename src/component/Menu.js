import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuStyle = styled.div`
    display: inline-block;
    padding-inline-start: 0px;
    .menu{
        padding-inline-start: 10px;
    };
    font-size : 1vw;
`;

const ListStyle = styled.li`
    list-style:none;
    display: inline-block;
    margin-right:30px;
    a{
        color:white;
        text-decoration: none;
    }
    a:hover{
        color:gray;
    }
`;

function Menu(){
    return (
    <MenuStyle>
        <ul className="menu">
            <ListStyle>
                <Link to="/">홈</Link>
            </ListStyle>
            <ListStyle>
                <Link to="/menu">TV프로그램</Link>
            </ListStyle>
            <ListStyle>
                <Link to="/menu">영화</Link>
            </ListStyle>
            <ListStyle>
                <Link to="/menu">최신 콘텐츠</Link>
            </ListStyle>
            <ListStyle>
                <Link to="/menu">내가 찜한 콘텐츠</Link>
            </ListStyle>
        </ul>
    </MenuStyle>
    );
}

export default Menu;