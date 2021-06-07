import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
function ThumbnailContainer(props) {
    const {
        imageUri,
        handleMovePageDown,
        handleMovePageUp,
        originalIndex
    } = props;

    const [hovered, setHovered] = useState(false);

    const handleHoverEnter = () => {
        setHovered(true);
    }

    const handleHoverLeave = () => {
        setHovered(false);
    }

    const handleLeftArrowClick = () => {
        handleMovePageDown(originalIndex);
    }

    const handleRightArrowClick = () => {
        handleMovePageUp(originalIndex);
    }

    return (
        <StyledThumbnailContainer onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
            <StyledArrowButton onClick={handleLeftArrowClick}  hovered={hovered}>
                <Icon name="chevron left" />
            </StyledArrowButton>

            <img src={imageUri} width="220" height="170" objectFit="contain" onDragStart={(event) => {event.preventDefault()}}/>

            <StyledArrowButton onClick={handleRightArrowClick} direction="right" hovered={hovered}>
                <Icon name="chevron right" />
            </StyledArrowButton>
        </StyledThumbnailContainer>
    )
}
export default ThumbnailContainer;


const StyledThumbnailContainer = styled.div`
    width: 220;
    height: 170;
    position: relative;
`

const StyledArrowButton = styled.div`
    z-index: 500;
    position: absolute;
    height: 100%;
    top: 0;
    bottom 0;
    right: ${props => props.direction === 'right' ? 0 : 'initial'};

    display: flex;
    align-items: center;
    padding: 0 .5em;
    opacity: ${props => props.hovered ? .5 : 0};
    background-color: ${props => props.hovered ? 'lightgrey' : 'none'};
    &:hover {
        cursor: pointer;
    }
`
