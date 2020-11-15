// 메인 페이지
import React, {Component, useState} from 'react';
import styled from 'styled-components';

import movie from '../image/movie/mainMovie.mp4';
import ImageList from '../component/ImageList';

import playImg from '../image/icon/play.png';
import pauseImg from '../image/icon/pause.png';
import muteImg from '../image/icon/mute.png';
import unmuteImg from '../image/icon/unmute.png';

// 메인 스타일
const MainStyle = styled.div`
    video{
        width : 100%;
        z-index : 0;
    }
    position : relative;
    #controller{
        position : absolute;
        top : 70%;
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

let isPlay = 1;
let isSound = 0;

class Main extends Component{

    pauseVideo = () => {
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

    soundVideo = () => {
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

    render(){
        return (
            <>
                <MainStyle>
                    <ShadowTopStyle />
                    <ShadowBotStyle />
                    <div id="controller">
                        <img src={pauseImg} id="icon" ref="playBtn" onClick={this.pauseVideo}></img>
                        <img src={muteImg} id="icon" ref="soundBtn" onClick={this.soundVideo}></img>
                    </div>
                    <video ref="vid" autoplay="autoplay" loop muted="muted">
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