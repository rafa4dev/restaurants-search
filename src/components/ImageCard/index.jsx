import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Skeleton from '../Skeleton';

const Card = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
`

const CardTitle = styled.span`
    font-familly: ${(props) => props.theme.fonts.regular};
    color: #FFFFFF;
    font-size: 16px;
`

const ImageCard = ({ photo, title }) =>  {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const imageLoaded = new Image();
        imageLoaded.src = photo;
        imageLoaded.onLoad = () => setImageLoaded(true);
    }, [photo]);

    return (
        <>
            {imageLoaded ? (
                <Card photo={photo} >
                    <CardTitle>{title}</CardTitle>
                </Card>
            ) : ( <Skeleton width="90px" height="90px" />)}
        </>
    );
};

export default ImageCard;
