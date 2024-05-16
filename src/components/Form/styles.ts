import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    background-color: ${ props => props.theme.white };
    border-radius: 8px;

    height: 36.660125rem;

    input {
        border: none;
        border-bottom: 1px solid;
        font-size: 1.3rem;
    }

    div {
        display: flex;
        align-items: center;
        gap: 1rem;

        label {
            font-size: 1.2rem;
            font-weight: 700;
        }
    }

    button {
        background-color: ${ props => props.theme["--success-color"] };
        border: 1px solid ${ props => props.theme["--success-color"] };
        padding: 1rem 0;
        color: white;
        cursor: pointer;
        border-radius: 8px;
        transition: background-color 0.4ms;
        height: 3.3125rem;

        &:active {
            background-color: white;
            border: 1px solid ${ props => props.theme["--success-color"] };
            color: ${ props => props.theme["--success-color"] };
        }
    }

    @media print {
        display: none;
    }

    @media screen and (min-width: 600px) {
        margin: auto;
        max-width: 40rem;
    }
`

export const DangerMessage = styled.p`
    color: ${ props => props.theme["--danger-color"] };
    height: 1.1875rem;
    overflow: hidden;
`