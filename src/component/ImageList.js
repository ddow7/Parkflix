import React, {Component, useState, useRef} from 'react';
import styled from 'styled-components';

import ModalPortal from './ModalPortal';
import ImageModal from './ImageModal';
import {imageAll} from './ImageContainer';
import {videoAll} from './VideoContainer';

import arrowImg from '../image/icon/arrow.png';


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
    transition: all ease 0.5s;
    ${props => {
        return `margin-left : ${94.5 - (92*props.page)}vw;`
    }}
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
        width : 100%;
    }
`;

const LeftSlideButtonStyle = styled.div`
    display:flex;
    justify-content:space-around;
    align-content:center;
    z-index:4;
    width : 3vw;
    height : 13vw;
    background-color : black;
    position :absolute;
    left : 0;
    border-radius: 0px 5px 5px 0px;
    opacity : 0.6;
    &:hover{
        opacity:0.9;
        img{
            display:inline;
            filter: invert(100%) opacity(.9);
            transform:rotate(180deg);
            width:100%;
            object-fit: contain;
        }
    }

    img{
        display:none;
    }
`;

const RightSlideButtonStyle = styled.div`
    display:flex;
    justify-content:space-around;
    align-content:center;
    z-index:4;
    width : 3vw;
    height : 13vw;
    background-color : black;
    position :absolute;
    right : 0;
    border-radius: 5px 0px 0px 5px;
    opacity : 0.6;
    &:hover{
        opacity:0.9;
        img{
            display:inline;
            filter: invert(100%) opacity(.9);
            width:100%;
            object-fit: contain;
        }
    }

    img{
        display:none;
    }
`;

//이미지 출력 함수
function Image({mod, image}){

    const [modal,setModal] = useState(false);

    const openImageModal = () => {
        setModal(true);
    };

    const closeImageModal = (e) => {
        setModal(false);
    };

    return (
        <> 
            <ThumbPosStyle>
                <ThumbCoverStyle>
                    <ThumbHoverStyle onClick={openImageModal}>
                        <div>
                            <img src={image.src} alt={image.name} />
                        </div>
                        <p className="title">{image.name}</p>
                        <p className="description">{image.description}</p>
                    </ThumbHoverStyle>
                </ThumbCoverStyle>
            </ThumbPosStyle>
            <ThumbStyle><img src={image.src} alt={image.name} /></ThumbStyle>
            {modal &&(
                <ModalPortal>
                    <ImageModal onClose={closeImageModal} onImage={image} mod={mod}></ImageModal>
                </ModalPortal>
            )}
        </>
    );
}

//이미지 리스트 리턴
function ImageList({mod, numb, title}){

    let images;

    switch(mod){
        case "img":
            images = imageAll[Number(numb)-1];
            break;
        case "vid":
            images = videoAll[Number(numb)-1];
    }

    let pageMax = images.length / 4;

    const [page, setPage] = useState(1);

    const listInput = useRef();

    const leftPage = () => {
        if(page !== 1){
            setPage(page-1);
        }
    }

    const rightPage = () => {
        if(page < pageMax){
            setPage(page+1);
        };
    }
    
    return (
        <>
            <TitleStyle>{title}</TitleStyle>
            <ThumbListStyle page={page} ref={listInput}>
            <LeftSlideButtonStyle onClick={leftPage}><img src={arrowImg} /></LeftSlideButtonStyle>
            <RightSlideButtonStyle onClick={rightPage}><img src={arrowImg} /></RightSlideButtonStyle>
                {
                    images.map(image => (
                        <Image mod={mod} image={image} />
                    ))
                }
            </ThumbListStyle>
        </>
    );
}

export default ImageList;