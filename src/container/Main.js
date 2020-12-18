// 메인 페이지
import React, {Component, useState} from 'react';
import styled from 'styled-components';

import movie from '../image/movie/movie1.mp4';
import ImageList from '../component/ImageList';

import playImg from '../image/icon/play.png';
import pauseImg from '../image/icon/pause.png';
import muteImg from '../image/icon/mute.png';
import unmuteImg from '../image/icon/unmute.png';
import {imageAll} from '../component/ImageContainer';
import {videoAll} from '../component/VideoContainer';

// 메인 스타일
const MainStyle = styled.div`
    position : relative;
    max-height : 80vh;
    overflow: hidden;
    video{
        width : 100%;
        z-index : 0;
    }
    #controller{
        position : absolute;
        top : 60%;
        left : 2vw;
        z-index : 2;
    }
    #icon{
        position : relative;
        float : left;
        width : 4vw;
        height : 4vw;
        margin-left : 2vw;
        filter: invert(100%) opacity(.8);
        &:hover{
            filter: invert(50%) opacity(.8);
        }
    }
    #vidName{
        color:white;
        font-size:3vh;
        margin : 1vh;
    }
    #vidDesc{
        color:white;
        font-size:1.5vh;
        margin : 1vh;
        opacity:0.7;
    }
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
        let isPlay = 1; //재생 상태 변수
        let isSound = 0; // 음소거 상태 변수

        let ranVid = Math.floor(Math.random()*videoAll.length); // 비디오 리스트 크기 중 랜덤한 수
        let videos = videoAll[ranVid]; // 랜덤 비디오 리스트
        ranVid = Math.floor(Math.random()*videos.length); // 비디오 크기 중 랜덤한 수
        let video = videos[ranVid]; // 랜덤 비디오

        const pauseVideo = () => { // 일시정지 상태 변화 액션
            if(isPlay){
                this.refs.vid.pause();
                this.refs.playBtn.src = playImg;
                isPlay = 0;
            }
            else{
                this.refs.vid.play();
                this.refs.playBtn.src = pauseImg;
                isPlay = 1;
            }
        };

        const soundVideo = () => { // 음소거 상태 변화 액션
            if(isSound){
                this.refs.vid.muted = true;
                this.refs.soundBtn.src = muteImg;
                isSound = 0;
            }
            else{
                this.refs.vid.muted = false;
                this.refs.soundBtn.src = unmuteImg;
                isSound = 1;
            }
        }
        return (
            <>
                <MainStyle>
                    <ShadowTopStyle />
                    <ShadowBotStyle />
                    <div id="controller">
                        <div id="vidName">{video.name}</div>
                        <div id="vidDesc">{video.description}</div>
                        <img src={pauseImg} id="icon" ref="playBtn" onClick={pauseVideo}></img>
                        <img src={muteImg} id="icon" ref="soundBtn" onClick={soundVideo}></img>
                    </div>
                    <video ref="vid" autoPlay="autoplay" loop muted="muted">
                        <source src={video.vidsrc} type="video/mp4" />
                    </video>
                </MainStyle>
                <ImageList mod="img" numb="1" />
                <ImageList mod="img" numb="2" />
                <ImageList mod="img" numb="3" />
                <ImageList mod="vid" numb="1" />
                <ImageList mod="vid" numb="2" />
            </>
        )
    }
}

export default Main;