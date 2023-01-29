import styled from 'styled-components';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 130px 700px;
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
  margin-top: -10px;
  justify-content: center;
  align-items: center;
  display: flex;

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
