import brand from '../../assets/raffle_generator.png'
import { StyledBrand, StyledHeader, StyledLogo, StyledWordmark, StyledWordmarkCaption } from './styles'

export function Header() {
    return (
        <StyledHeader>
            <StyledBrand>
                <StyledLogo src={brand} alt="" width={36} height={36} />
                <StyledWordmark>
                    Gerador de Rifa
                    <StyledWordmarkCaption>talão numerado para imprimir</StyledWordmarkCaption>
                </StyledWordmark>
            </StyledBrand>
        </StyledHeader>
    )
}
