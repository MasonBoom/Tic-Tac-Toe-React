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
} from './mainpage.styles';
import x from '../../assets/x.svg';
import o from '../../assets/o.svg';

const MainPage = () => {
    return (
        <MainDiv>
            <IconRow>
                <ColoredIcon src={x} alt='x' />
                <ColoredIcon src={o} alt='o' />
            </IconRow>
            <SelectionModal>
                <Header>Pick Player 1's mark</Header>
                <ButtonDiv>
                    <ModalButton>
                        <ColoredIcon src={x} alt='x' />
                    </ModalButton>
                    <ModalButton>
                        <ColoredIcon src={o} alt='o' />
                    </ModalButton>
                </ButtonDiv>
                <SubHeader>Remember: X goes first</SubHeader>
            </SelectionModal>
        </MainDiv>
    )
}

export default MainPage;
