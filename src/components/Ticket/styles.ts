/* import styled from "styled-components";

export const TicketContainer = styled.article`
    display: flex;
    border: 1px solid black;
    width: 100%;
    height: 10rem;
`

export const TicketForm = styled.section`
    border-right: 1px solid black;
    flex: 1;
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
        background-color: #ffcbdb;
        width: fit-content;
        margin: 0 auto;
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

    p + p {
        text-align: center;
    }

    div {
        display: flex;
        justify-content: space-between;
    }

` */

import styled from "styled-components";

export const TicketContainer = styled.article`
    display: flex;
    border: 1px solid black;
    //width: 10.5cm;
    /* width: 50%; */
    height: 7cm;
`

export const Unit = styled.span`
    background-color: #ffc107;
    font-weight: 700;
    padding: 0.1rem 0.3rem;
`

export const TicketForm = styled.section`
    border-right: 1px solid black;
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem;

    div {
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        padding-bottom: 1.5rem;
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
        background-color: #ffcbdb;
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
        text-transform: uppercase;
        background-color: #ffcbdb;
    }

    p + p {
        text-align: center;
    }

    div {
        display: flex;
        justify-content: space-between;

        span:first-of-type {
            text-transform: uppercase;
            font-weight: 700;
        }
    }

`