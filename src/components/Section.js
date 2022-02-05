import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = (props) => {
  console.log(props.id[-1]);
  return (
    <Wrap bgImg={props.backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ItemText>
      </Fade>
      
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{props.leftBtnText}</LeftButton>
            {props.rightBtnText && (
              <RightButton>{props.rightBtnText}</RightButton>
            )}
          </ButtonGroup>
        </Fade>
        {props.id !== props.id[-1] && (
          <DownArrow src="./images/down-arrow.svg" />
        )}
      </Buttons>

      
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`

  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 2.5rem;
  width: 16rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.5rem;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 0.75rem;
  cursor: pointer;
  margin: 1rem;
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.65;
  color: #000;
`;

const DownArrow = styled.img`
  height: 2.5rem;
  animation: animateDown infinite 1.5s;
  margin-left: 16rem;
  @media (max-width: 768px) {
    margin-left: 8rem;
  }
`;

const Buttons = styled.div``;
