// 사진 페이지

import React, {Component} from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import ImageList from '../component/ImageList';

// 사진메뉴 스타일
const MainStyle = styled.div`
    position : relative;
`;

class Menu2 extends Component{
    render(){
        return (
            <>
                <MainStyle>
                    <br />
                </MainStyle>
                <ImageList mod="vid" numb="1"/>
                <ImageList mod="vid" numb="2"/>
            </>
        )
    }
}

export default Menu2;