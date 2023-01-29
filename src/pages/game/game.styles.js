import styled from 'styled-components';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 700px;
  margin: 120px auto;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PlayerTurn = styled.div`
  background: #1F3641;
  box-shadow: inset 0px -4px 0px #10212A;
  border-radius: 10px;
  width: 140px;
  height: 52px;
  margin: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 30%;
  

  span {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #A8BFC9;

  }

  img {
    margin-right: 10px;
    margin-top: -2px;
  }
`;

export const RestartButton = styled.button`
  width: 52px;
  height: 52px;
  background: #A8BFC9;
  box-shadow: inset 0px -4px 0px #6B8997;
  border-radius: 10px;
  border: none;
`;
