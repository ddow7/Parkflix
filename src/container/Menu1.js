// 사진 페이지

import React, {Component} from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import ImageList from '../component/ImageList';

// 사진메뉴 스타일
const MainStyle = styled.div`
    position : relative;
`;

class Main extends Component{
    render(){
        return (
            <>
                <MainStyle>
                    Something
                </MainStyle>
                <ImageList numb="1" title="애기 상혁"/>
                <ImageList numb="2" title="셀카 상혁"/>
                <ImageList numb="3" title="웃겨 상혁"/>
            </>
        )
    }
}

export default Main;