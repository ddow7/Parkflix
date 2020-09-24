// 메인 페이지

import React, {Component} from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import movie from '../image/movie/mainMovie.mp4';
import ImageList from '../component/ImageList';

// 메인 스타일
const MainStyle = styled.div`
    video{
        width : 100%;
        z-index : 0;
    }
    position : relative;
`;

// 메인 영상 상단 그림자
const ShadowTopStyle = styled.div`
    width : 100%;
    height : 100%;
    position : absolute;
    box-shadow:inset 0 30px 40px #121212;
    z-index:1;
`;

//메인 영상 하단 그림자
const ShadowBotStyle = styled.div`
    width : 100%;
    height : 100%;
    position : absolute;
    box-shadow:inset 0 -150px 100px #121212;
    z-index:1;
`;

class Main extends Component{
    render(){
        return (
            <>
                <MainStyle>
                    <ShadowTopStyle />
                    <ShadowBotStyle />
                    <video autoplay="autoplay" loop muted="muted">
                        <source src={movie} type="video/mp4" />
                    </video>
                </MainStyle>
                <ImageList numb="1" title="애기 상혁"/>
                <ImageList numb="2" title="셀카 상혁"/>
                <ImageList numb="3" title="웃겨 상혁"/>
            </>
        )
    }
}

export default Main;