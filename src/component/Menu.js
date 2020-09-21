//메뉴(리스트)

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//메뉴 스타일
const MenuStyle = styled.div`
    display: inline-block;
    padding-inline-start: 0px;
    .menu{
        padding-inline-start: 10px;
    };
    font-size : 1vw;
`;

//메뉴 리스트 스타일(각 메뉴버튼)
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