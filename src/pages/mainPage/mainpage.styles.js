import styled from 'styled-components';

export const MainDiv = styled.div`
  margin: auto;
  margin-top: 30vh;
  width: 460px;
  height: 471px;
`;

export const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  &.gamePage {
    justify-content: flex-start;
  }
`;

export const ColoredIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const SelectionModal = styled.div`
  background-color: #1F3641;
  box-shadow: inset 0px -8px 0px #10212A;
  border-radius: 15px;
  width: 100%;
  height: 191px;
  margin-top: 40px;
  padding-top: 24px;
`;

export const Header = styled.h3`
  color: #A8BFC9;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const ButtonDiv = styled.div`
  background-color: #1A2A33;
  height: 70px;
  width: 80%;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 24px;
  display: flex; 
  flex-direction: row;
`;

export const SubHeader = styled.h3`
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.875px;
  color: #A8BFC9;
  text-transform: uppercase;
`;

export const ModalButton = styled.button`
  height: 54px;
  width: 49%;
  margin: 8px;
  margin-left: 8px;
  background-color: #1A2A33;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &.clicked {
    background-color: #A8A8A8;
  }
`;

export const OIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 10px solid #A8A8A8;
  background: transparent;
  margin: auto;

  &.clicked {
    border: 10px solid #1A2A33;
  }
`;

export const XIcon = styled.div`
  width: 10px;
  height: 40px;
  border-radius: 5%;
  background-color: #A8A8A8;
  margin: auto;
  rotate: 45deg;

  &.clicked {
    background-color: #1A2A33; 
  }

  &.reverse {
    rotate: -90deg;
  }
`;

export const NewGameButton = styled.button`
  background: #F2B137;
  box-shadow: inset 0px -8px 0px #CC8B13;
  width: 100%;
  border-radius: 15px;
  height: 70px;
  margin-bottom: 20px;
  margin-top: 40px;
  text-transform: uppercase;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 1.25px;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0px 0px 0px #CC8B13;
  }
`;
