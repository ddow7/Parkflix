import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import movie from '../image/movie/Bee.mp4';
import one from '../image/1.jpg';

const MainStyle = styled.div`
    width : 100%;
    video{
        width : 100%;
        z-index : 0;
    }
    position : relative;
`;

const ShadowTopStyle = styled.div`
    width : 100%;
    height : 100%;
    position : absolute;
    box-shadow:inset 0 30px 40px rgba(0, 0, 0, 1);
    z-index:1;
`;

const ShadowBotStyle = styled.div`
    width : 100%;
    height : 100%;
    position : absolute;
    box-shadow:inset 0 -30px 30px rgba(0, 0, 0, 1);
    z-index:1;
`;

const ThunbListStyle = styled.div`
    width : 100%;
`;

const ThumbStyle = styled.div`
    background-color : white;
    width : 25vw;
    z-index :3;
    position : relative;
    img{
        width : 100%;
        height : auto;
    }
    display: inline-flex;
    margin : 3vw;
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
                <ThunbListStyle>
                    <ThumbStyle ><img src={one} /></ThumbStyle>
                </ThunbListStyle>
                <ThunbListStyle>
                    <ThumbStyle ><img src={one} /></ThumbStyle>
                </ThunbListStyle>
                <ThunbListStyle>
                    <ThumbStyle ><img src={one} /></ThumbStyle>
                </ThunbListStyle>
            </>
        )
    }
}

export default Main;