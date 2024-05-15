import styled from "styled-components";

export const ButtonContainer = styled.button`
    position: fixed;
    right: .7rem;
    bottom: .7rem;
    height: 3rem;
    width: 3.4rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background-color: ${ props => props.theme["--primary-background"] };
    color: ${ props => props.theme["white"] };

    &:active {
        background-color: #039dfc;
    }
`