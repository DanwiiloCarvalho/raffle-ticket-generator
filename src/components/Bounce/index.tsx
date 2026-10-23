import { BounceDot, BounceDotDelayed, StyledBounce } from "./styles"

export function Bounce() {
    return (
        <StyledBounce aria-hidden="true">
            <BounceDot />
            <BounceDotDelayed />
        </StyledBounce>
    )
}
