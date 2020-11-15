import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
    background: rgba(0, 0, 0, 0.25);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index : 10;

    .content{
        background: white;
        padding: 1rem;
        width: 80vw;
        height: 80vh;

        img{
            width : auto;
            height : 100%;
        }
    }
`;

const ImageModal = ({onClose, onImage}) => {
  return (
    <Modal>
      <div className="content">
        <img src={onImage.src} />
        <button onClick={onClose}>닫기</button>
      </div>
    </Modal>
  );
};

export default ImageModal;