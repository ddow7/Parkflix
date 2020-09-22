import React, {Component} from 'react';
import styled from 'styled-components';

import img1 from '../image/img-1.jpg';
import img2 from '../image/img-2.jpg';
import img3 from '../image/img-3.jpg';
import img4 from '../image/img-4.jpg';
import img5 from '../image/img-5.jpg';

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
    background-color:white;
    display:none;
    transition: all ease 1s;
    &:hover{
        transform: scale( 1.2 );
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
const ThumbStyle = styled.img`
    z-index :2;
    position : relative;
    width : 22vw;
    height : 12vw;
    margin : 0.5vw;
    border-radius: 3px;
    display: inline-flex;
`;

//이미지 출력 함수
function Image({image}){
    return (
        <>
            <ThumbPosStyle>
                <ThumbCoverStyle>
                    <ThumbHoverStyle />
                </ThumbCoverStyle>
            </ThumbPosStyle>
            <ThumbStyle src={image.src} alt={image.name} />
        </>
    );
}

//이미지 리스트 리턴
function ImageList({numb, title}){

    let images = [];

    const listOne=[
        {
            id:1,
            name:'img1',
            src:img1,
            description:"첫번째 이미지"
        },
        {
            id:2,
            name:'img2',
            src:img2,
            description:"두번째 이미지"
        },
        {
            id:3,
            name:'img3',
            src:img3,
            description:"세번째 이미지"
        },
        {
            id:4,
            name:'img4',
            src:img4,
            description:"네번째 이미지"
        },
        {
            id:5,
            name:'img5',
            src:img5,
            description:"다섯번째 이미지"
        }
    ];

    const listTwo=[
        {
            id:1,
            name:'img1',
            src:img5,
            description:"첫번째 이미지"
        },
        {
            id:2,
            name:'img2',
            src:img4,
            description:"두번째 이미지"
        },
        {
            id:3,
            name:'img3',
            src:img3,
            description:"세번째 이미지"
        },
        {
            id:4,
            name:'img4',
            src:img2,
            description:"네번째 이미지"
        },
        {
            id:5,
            name:'img5',
            src:img1,
            description:"다섯번째 이미지"
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