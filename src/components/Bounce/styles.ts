import styled, { keyframes } from "styled-components";

const SkBounce = keyframes`
    0%, 100% { transform: scale(0.0) }
    50% { transform: scale(1.0) }
`;

export const BounceContainer = styled.div`
    width: 1rem;
    height: 1rem;
    position: relative;
    margin: auto;
`

export const DoubleBounce1 = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #333;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
  
    animation: ${SkBounce} 2.0s infinite ease-in-out;
`

export const DoubleBounce2 = styled(DoubleBounce1)`
    animation-delay: -1.0s;
`