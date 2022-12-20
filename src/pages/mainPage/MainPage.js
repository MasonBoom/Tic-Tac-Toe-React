import React from "react";
import {
    MainDiv,
    IconRow,
    ColoredIcon,
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
            <h1>Hello World</h1>
        </MainDiv>
    )
}

export default MainPage;
