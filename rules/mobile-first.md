# Opencode Rule: Mobile-First & styled-components

## Description
This rule dictates the standard for styling components within the project. It enforces a strict **mobile-first** approach, the use of **styled-components**, and predefined breakpoints for responsive design. All AI assistants and developers must adhere to these guidelines when creating or modifying components.

## Core Directives

### 1. Component & Style File Organization
For every new component created, a dedicated folder must be created inside `src/components/`. The folder name is the component name in **PascalCase**, and it must contain exactly two files:
*   **Format:** `src/components/ComponentName/index.tsx` (the React component) and `src/components/ComponentName/styles.ts` (the styled-components styling).
*   Always import the styled components in `index.tsx` using: `import { StyledX } from './styles';`.
*   Styled components are **named exports** of `styles.ts` (no default exports). Prefix the primary styled element with `Styled` (e.g., `StyledContainer`, `StyledForm`); use semantic names for variants or auxiliary elements (e.g., `DangerMessage`).

### 2. Mobile-First Paradigm
All styling must follow a **mobile-first** methodology.
*   The default styles (outside of any media queries) inside the styled-components template literals apply to mobile devices.
*   **Do not** use `max-width` media queries to style for mobile. Mobile styling is the baseline.

### 3. Responsive Breakpoints
Progressive enhancement for larger screens must be done using `min-width` media queries, written directly inside the styled-components template literals. You must include the following specific breakpoints when layout adjustments are necessary:

*   **Mobile (Default):** Baseline styles (no media query required).
*   **Tablet / Medium Screens:** `@media screen and (min-width: 768px)`
*   **Desktop / Large Screens:** `@media screen and (min-width: 992px)`

### 4. Theme Tokens
Colors and other design values must come from the theme (`${ props => props.theme["--token-name"] }`) instead of hardcoded hex values. Theme keys live in `src/styles/themes/default.ts` — extend that object when a new token is needed, never inline raw colors in `styles.ts`.

---

## Example Implementation

### `src/components/Card/index.tsx`
```tsx
import { StyledContainer, StyledTitle, StyledContent } from './styles'

interface CardProps {
  title: string
  content: string
}

export function Card({ title, content }: CardProps) {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledContent>{content}</StyledContent>
    </StyledContainer>
  )
}
```

### `src/components/Card/styles.ts`
```ts
import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${ props => props.theme.white };
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 1.5rem;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  @media screen and (min-width: 992px) {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
`

export const StyledTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.75rem;
  }
`

export const StyledContent = styled.p`
  font-size: 1rem;
  color: ${ props => props.theme['--brand-color'] };
`
```

---

## What NOT to Do (Forbidden)

```tsx
// WRONG: styling in the component file, hardcoded colors, max-width media query
export function Card({ title }: CardProps) {
  return <div style={{ background: '#ffffff' }}>{title}</div>
}
```

```ts
// WRONG: max-width used to style mobile instead of progressive enhancement
export const StyledContainer = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
```

---

## Enforcement
If you encounter any existing components that violate these styling, structure, or mobile-first rules during a refactor or feature implementation, you must rewrite them to match these standards before proceeding.
