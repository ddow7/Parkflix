import React, {Component} from 'react';
import styled from 'styled-components';

import baby1 from '../image/baby/baby1.jpg';
import baby2 from '../image/baby/baby2.jpg';
import baby3 from '../image/baby/baby3.jpg';
import baby4 from '../image/baby/baby4.jpg';
import baby5 from '../image/baby/baby5.jpg';
import baby6 from '../image/baby/baby6.jpg';
import baby7 from '../image/baby/baby7.jpg';
import baby8 from '../image/baby/baby8.jpg';

import self1 from '../image/self/self1.jpg';
import self2 from '../image/self/self2.jpg';
import self3 from '../image/self/self3.jpg';
import self4 from '../image/self/self4.jpg';
import self5 from '../image/self/self5.jpg';
import self6 from '../image/self/self6.jpg';
import self7 from '../image/self/self7.jpg';
import self8 from '../image/self/self8.jpg';

import fun1 from '../image/fun/fun1.jpg';
import fun2 from '../image/fun/fun2.jpg';
import fun3 from '../image/fun/fun3.jpg';
import fun4 from '../image/fun/fun4.jpg';

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

//호버 스타일
const ThumbHoverStyle = styled.div`
    z-index : 4;
    position : absolute;
    width : 22vw;
    height : 22vw;
    background-color:#151515;
    display:none;
    transition: all ease 0.5s;
    opacity : 0;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0vw 0vw 1vw 0.1vw #000000;

    img{
        width : 22vw;
    }

    div{
        height : 11vw;
        overflow: hidden;
    }

    p.title{
        color : white;
        font-size : 1.5vw;
        text-align: center;
        margin-block-start: 0vw;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    p.description{
        color : white;
        font-size : 1vw;
        text-align: center;
        margin-block-start: 0vw;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    &:hover{
        transform: scale( 1.2 );
        opacity: 1;
    }
`;

//썸네일 커버 위치 div
const ThumbPosStyle = styled.div`
    z-index :3;
    position : relative;
    width : 0vw;
    border-radius: 3px;
    display: inline-flex;
`;

//썸네일 커버 div
const ThumbCoverStyle = styled.div`
    z-index :2;
    position : absolute;
    width : 22vw;
    height : 12vw;
    margin : 0.5vw;
    border-radius: 3px;
    display: inline-flex;
    &:hover{
        ${ThumbHoverStyle}{
            display:inline;
        }
    };
`;

//썸네일 스타일
const ThumbStyle = styled.div`
    z-index :2;
    position : relative;
    width : 22vw;
    height : 12vw;
    margin : 0.5vw;
    border-radius: 3px;
    display: block;
    overflow: hidden;
    img{
        position:absolute;
        width : 22vw;
        top : -50%;
    }
`;

//이미지 출력 함수
function Image({image}){
    return (
        <>
            <ThumbPosStyle>
                <ThumbCoverStyle>
                    <ThumbHoverStyle>
                        <div>
                            <img src={image.src} alt={image.name} />
                        </div>
                        <p class="title">{image.name}</p>
                        <p class="description">{image.description}</p>
                    </ThumbHoverStyle>
                </ThumbCoverStyle>
            </ThumbPosStyle>
            <ThumbStyle><img src={image.src} alt={image.name} /></ThumbStyle>
        </>
    );
}

//이미지 리스트 리턴
function ImageList({numb, title}){

    let images = [];

    const listOne=[
        {
            id:1,
            name:'웅변 상혁',
            src:baby1,
            description:"웅변하는 박상혁"
        },
        {
            id:2,
            name:'무뽑아 상혁',
            src:baby2,
            description:"무를 뽑는 박상혁"
        },
        {
            id:3,
            name:'코자 상혁',
            src:baby3,
            description:"자는것도 귀여워"
        },
        {
            id:4,
            name:'노래해 상혁',
            src:baby4,
            description:"노래도 잘해"
        },
        {
            id:5,
            name:'갱단 상혁',
            src:baby5,
            description:"빵야 빵야"
        },
        {
            id:6,
            name:'보내줘 상혁',
            src:baby6,
            description:"억울해"
        },
        {
            id:7,
            name:'찡끗 상혁',
            src:baby7,
            description:"표정 미쳐~"
        },
        {
            id:8,
            name:'유치원 상혁',
            src:baby8,
            description:"신난다"
        }
    ];

    const listTwo=[
        {
            id:1,
            name:'웃는 상혁',
            src:self1,
            description:"웃고있다"
        },
        {
            id:2,
            name:'할배옷 상혁',
            src:self2,
            description:"옷이 할배옷이다"
        },
        {
            id:3,
            name:'후디 상혁',
            src:self3,
            description:"어울리는 후드"
        },
        {
            id:4,
            name:'희번득 상혁',
            src:self4,
            description:"눈을 왜 그렇게 떠"
        },
        {
            id:5,
            name:'셔츠 상혁',
            src:self5,
            description:"섹시하다"
        },
        {
            id:6,
            name:'잠만보 상혁',
            src:self6,
            description:"닮았다"
        },
        {
            id:7,
            name:'설인 상혁',
            src:self7,
            description:"침울해"
        },
        {
            id:8,
            name:'젊은 상혁',
            src:self8,
            description:"젊다 젊어"
        }
    ];

    switch (numb) {
        case "1":
            images = listOne;
            break;
    
        default:
            images = listTwo;
            break;
    }
    
    return (
        <>
        <TitleStyle>{title}</TitleStyle>
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

export default ImageList;