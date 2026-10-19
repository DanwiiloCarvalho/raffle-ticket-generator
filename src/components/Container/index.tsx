import type { ReactNode } from "react"
import { StyledHeaderBlock, StyledMain, StyledSubtitle, StyledTitle } from "./styles"

interface ContainerProps {
    children: ReactNode
}

export function Container({ children }: ContainerProps) {
    return (
        <StyledMain id="conteudo">
            <StyledHeaderBlock>
                <StyledTitle>Monte o talão da sua rifa</StyledTitle>
                <StyledSubtitle>Preencha os dados uma vez e imprima quantos bilhetes numerados precisar.</StyledSubtitle>
            </StyledHeaderBlock>
            {children}
        </StyledMain>
    )
}
