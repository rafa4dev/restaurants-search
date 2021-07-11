import React from 'react';
import styled, { keyframes} from 'styled-components';

const KeyFrameLoading = keyframes`
    0%{
        opacity: 0.5;
    }
    100%{
        opacity: 1;
    }
`;

const LoagingSkeleton = styled.div`
    background-color: gray;
    border-radius: 6px;
    margin-bottom: 10px;
    min-width: ${(props) => props.width};
    height: ${(props) => props.height};
    animation: ${KeyFrameLoading} 500ms infinite alternate;
`

const assignSkeleton = ({ width, height}) => <LoagingSkeleton width={width} height={height} />

export default assignSkeleton;