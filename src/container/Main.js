// 메인 페이지

import React, {Component} from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import movie from '../image/movie/Bee.mp4';
import img1 from '../image/img-1.jpg';
import img2 from '../image/img-2.jpg';
import img3 from '../image/img-3.jpg';
import img4 from '../image/img-4.jpg';
import img5 from '../image/img-5.jpg';

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
    box-shadow:inset 0 30px 40px rgba(0, 0, 0, 1);
    z-index:1;
`;

//메인 영상 하단 그림자
const ShadowBotStyle = styled.div`
    width : 100%;
    height : 100%;
    position : absolute;
    box-shadow:inset 0 -50px 40px rgba(0, 0, 0, 1);
    z-index:1;
`;

//썸네일 리스트 제목 스타일
const TitleStyle = styled.p`
    color : white;
    font-size : 1.5vw;
    margin-block-start: 5vw;
    margin-block-end: 0.5vw;
    margin-inline-start: 3vw;
    margin-inline-end: 0px;
`;

//썸네일 리스트 스타일
const ThumbListStyle = styled.div`
    display: inline-flex;
    margin-left : 2.5vw;
`;

//썸네일 스타일
const ThumbStyle = styled.div`
    z-index :2;
    position : relative;
    img{
        width : 22vw;
        margin : 0.5vw;
        border-radius: 3px;
    }
    display: inline-flex;
`;

//이미지 출력 함수
function Image({image}){
    return (
        <ThumbStyle ><img src={image.src} /></ThumbStyle>
    );
}

//이미지 리스트 리턴
function ImageList(){
    const images=[
        {
            id:1,
            name:'img1',
            src:img1
        },
        {
            id:2,
            name:'img2',
            src:img2
        },
        {
            id:3,
            name:'img3',
            src:img3
        },
        {
            id:4,
            name:'img4',
            src:img4
        },
        {
            id:5,
            name:'img5',
            src:img5
        }
    ];
    return (
        <>
            <ThumbListStyle>
                {
                    images.map(image => (
                        <Image image={image} />
                    ))
                }
            </ThumbListStyle>
        </>
    );
}

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
                <TitleStyle>제목이 들어갑니다.</TitleStyle>
                <ImageList />
                <TitleStyle>제목이 들어갑니다.</TitleStyle>
                <ImageList />
                <TitleStyle>제목이 들어갑니다.</TitleStyle>
                <ImageList />
            </>
        )
    }
}

export default Main;