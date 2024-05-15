import styled from "styled-components";

export const TicketContainer = styled.article`
    display: flex;
    border: 1px solid black;
    
    height: 45mm;
    width: inherit;

    @media screen and (min-width: 600px) {
        margin: auto;
        max-width: 40rem;
    }
`

export const Unit = styled.span`
    background-color: ${ props => props.theme["--yellow-ticket-unit"] };
    font-weight: 700;
    padding: 0.1rem 0.3rem;

    display: flex;
    align-items: center;
`

export const TicketForm = styled.section`
    border-right: 1px solid black;
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    height: inherit;
    overflow-y: hidden;

    gap: .4rem;
    padding: .3rem;

    div {
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        padding-bottom: .95rem;
        
        span {
            font-size: .8rem;
        }
    }

    > span {
        position: absolute;
        right: 0.2rem;
        top: 0.2rem;
    }
`

export const TicketInfo = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1rem 1rem;
    border-left: 1px solid black;
    flex: 1;
    overflow: hidden;

    h2 {
        background-color: ${ props => props.theme["--pink-ticket"] };
        width: fit-content;
        margin: 0 auto;
        padding: .8rem;
        text-transform: uppercase;
    }

    h3 {
        text-align: center;
        margin-top: 0.5rem;
    }

    strong {
        text-transform: uppercase;
    }

    p:first-of-type {
        text-align: center;
    }

    p > span {
        background-color: ${ props => props.theme["--pink-ticket"] };
    }

    p + p {
        text-align: center;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span:first-of-type {
            text-transform: uppercase;
            font-weight: 700;
        }
    }

`