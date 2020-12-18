import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
    display: flex;
    position : absolute;
    background-color: black;
    height: 13vh;
    width : 100%;
    color : gray;
    font-size: 1.5vh;
    align-items: center;
    margin-top:10vh;
    div{
        margin-left : 2vw;
    }
`;

function Footer(){
    return (
        <FooterStyle>
            <div>
                대표 : 박상혁<br />
                사진 출처 : 박상혁<br />
                이메일 주소 : bbbug17@naver.com<br />
            </div>
        </FooterStyle>
    );
}

export default Footer;