import styled, { css, keyframes } from "styled-components"

const bounce = keyframes`
    0%, 100% { transform: scale(0); }
    50% { transform: scale(1); }
`

export const StyledBounce = styled.span`
    display: inline-block;
    position: relative;
    flex: 0 0 auto;
    width: 1rem;
    height: 1rem;
`

const dot = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
    opacity: 0.65;
    animation: ${bounce} 1.6s infinite ease-in-out;
`

export const BounceDot = styled.span`
    ${dot}
`

export const BounceDotDelayed = styled(BounceDot)`
    animation-delay: -0.8s;
`
