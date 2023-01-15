import React, { useState } from "react";
import {
    MainDiv,
    IconRow,
    ColoredIcon,
    SelectionModal,
    Header,
    ButtonDiv,
    SubHeader,
    ModalButton,
    OIcon,
    XIcon,
    NewGameButton,
} from './mainpage.styles';
import x from '../../assets/x.svg';
import o from '../../assets/o.svg';

const MainPage = () => {
    const [xClicked, setXClicked] = useState(false)
    const [oClicked, setOClicked] = useState(false)

    const handleXClick = () => {
        setXClicked(true);
        setOClicked(false);
    }

    const handleOClick = () => {
        setOClicked(true);
        setXClicked(false);
    }

    return (
        <MainDiv>
            <IconRow>
                <ColoredIcon src={x} alt='x' />
                <ColoredIcon src={o} alt='o' />
            </IconRow>
            <SelectionModal>
                <Header>Pick Player 1's mark</Header>
                <ButtonDiv>
                    <ModalButton onClick={handleXClick} className={xClicked === true ? 'clicked' : ''}>
                        <XIcon className={xClicked === true ? 'clicked' : ''}>
                            <XIcon className={xClicked === true ? 'clicked reverse' : 'reverse'}/>
                        </XIcon>
                    </ModalButton>
                    <ModalButton onClick={handleOClick} className={oClicked === true ? 'clicked' : ''}>
                        <OIcon className={oClicked === true ? 'clicked' : ''} />
                    </ModalButton>
                </ButtonDiv>
                <SubHeader>Remember: X goes first</SubHeader>
            </SelectionModal>
            <NewGameButton>New Game (VS CPU)</NewGameButton>
            <NewGameButton className='vsPlayer'>New Game (VS CPU)</NewGameButton>
        </MainDiv>
    )
}

export default MainPage;
