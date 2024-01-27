import styled from "styled-components";

const ModalContainer = styled.div`
  border-radius: 10px;
  background: #31363b;
  box-shadow: 5px 5px 10px #2a2e32, -5px -5px 10px #383e44;
  max-width: 400px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 4rem;
`;
const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h4 {
    font-size: 1.8rem;
    color: #f96d00;
    margin-top: 3rem;
    font-weight: 500;
  }
`;
const ModalCircle = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  & > svg {
    font-size: 6rem;
    z-index: 10;
    color: #f96d00;
    position: relative;
    background-clip: text;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: inset 5px 5px 10px #2a2e32, inset -5px -5px 10px #383e44;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 50%;
    border-image: conic-gradient(rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%)
      1;
    border-image-slice: 1;
    animation: rotate 5s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export { ModalContainer, ModalContent, ModalCircle };
