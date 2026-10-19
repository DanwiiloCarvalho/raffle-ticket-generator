import { useEffect, useState } from 'react'
import { StyledScrollButton } from './styles'
import { ChevronUp } from '../ChevronUp'

export function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        function toggleVisibility() {
            setIsVisible(window.scrollY > window.innerHeight)
        }

        toggleVisibility()
        window.addEventListener('scroll', toggleVisibility, { passive: true })

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    function scrollToTop() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
        })
    }

    if (!isVisible) {
        return null
    }

    return (
        <StyledScrollButton type="button" onClick={scrollToTop} aria-label="Voltar ao topo">
            <ChevronUp />
        </StyledScrollButton>
    )
}
