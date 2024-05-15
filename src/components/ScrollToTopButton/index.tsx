import { useEffect, useState } from 'react';
import { ButtonContainer } from './styles';
import { ChevronUp } from '../ChevronUp';

export function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        function toggleVisibility() {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <ButtonContainer onClick={scrollToTop}>
                    <ChevronUp />
                </ButtonContainer>
            )}
        </>
    );
}