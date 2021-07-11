import styled from 'styled-components';
import Slider from "react-slick";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const Container  = styled.aside`
    background-color: ${props => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    padding: 16px;

    img{
        margin: 15px;
    }
`;

export const Map = styled.div`
    background-color: red;
    width: 300px;
`;

export const Carousel = styled(Slider)`
    .slick-slider {
        margin-right: 30px;
    }
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height:29px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ModalTitle = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-familly: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.fonts.text};
    text-transform: none;
    line-height: 29px;
    font-size: 24px;
    font-weight: bold;
`;

export const ModalContent = styled.p`
    margin-bottom: 10px;
    font-familly: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.fonts.text};
    font-weight: normal;
    line-height: 19px;
    font-size: 16px;
`