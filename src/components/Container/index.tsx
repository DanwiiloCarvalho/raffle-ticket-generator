import { StyledMain } from "./styles";

interface ContainerProps {
    children: React.ReactElement;
}
export function Container({ children }: ContainerProps) {
    return (
        <StyledMain>
            <h1>Faça sua Rifa</h1>
            {children}
        </StyledMain>
    )
}