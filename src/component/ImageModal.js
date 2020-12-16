import React,{useState} from 'react';
import styled from 'styled-components';
import close from '../image/icon/close.png'

const Modal = styled.div`
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index : 10;
    transition: all ease 0.5s;
`;

const Content = styled.div`
    background: rgba(0, 0, 0, 0.7);
    padding: 1rem;
    display: flex;
    position : relative;
    align-items: center;
    justify-content: center;
    flex-direction : column;
    z-index : 11;
    transition: all ease 0.5s;
    border-radius: 20px 20px 20px 20px;

    #img{
      width : 0px;
      height : 0px;
      ${props => {
        if(props.isOpen){
          if(props.imgSize.height>=props.imgSize.width){
            return `
              height : ${(props.winSize.height / 4)*3}px;
              width : auto;
            `
          }
          else{
            return `
              width : ${(props.winSize.width / 4)*3}px;
              height : auto;
            `
          }
        }
      }}
    }

    #button{
      position : absolute;
      filter: invert(50%) opacity(1);
      width : 5vw;
      height : 5vh;
      right : 2vw;
      top : 2vw;
    }
`;

const ImageModal = ({onClose, onImage, mod}) => {

  const [isOpen,setIsOpen] = React.useState(true);
  const [dimentions,setDemensions] = React.useState({
    height : window.innerHeight,
    width : window.innerWidth,
  })
  const [imgSize, setImageSize] = React.useState({
    height : 0,
    width : 0,
  })
  React.useEffect(()=>{
    setImageSize({
      height : document.getElementById('img').naturalHeight,
      width : document.getElementById('img').naturalWidth,
    })
    function handleResize() {
      setDemensions({
        height:window.innerHeight,
        width:window.innerWidth,
      })
    }
    window.addEventListener('resize',handleResize)
  },[]);

  const contentClose = (e) => {
    if(e.target !== e.currentTarget){
      return;
    }
    setIsOpen(false);
    onClose();
  }

  switch(mod){
    case "img":
      return (
        <Modal onClick={contentClose}>
          <Content winSize={dimentions} imgSize={imgSize} isOpen={isOpen}>
            <img src={close} onClick={contentClose} id="button"/>
            <img src={onImage.src} id="img"/>
          </Content>
        </Modal>
      );
        break;
    case "vid":
      return (
        <Modal onClick={contentClose}>
          <Content winSize={dimentions} imgSize={imgSize} isOpen={isOpen}>
            <video autoPlay="autoplay" loop muted="muted" id="img" controls="controls">
                <source src={onImage.vidsrc} type="video/mp4" />
            </video>
          </Content>
        </Modal>
      );
        break;
  }
};

export default ImageModal;