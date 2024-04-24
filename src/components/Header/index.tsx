import brand from '../../assets/raffle_generator.png'
import { StyledHeader } from './styles'

export function Header() {
    return (
        <StyledHeader>
            <div>
                <img src={brand} alt="Logo Gerador de Rifas Online" height={50} width={50} />
                <span>Rifa online</span>
            </div>
        </StyledHeader>
    )
} 