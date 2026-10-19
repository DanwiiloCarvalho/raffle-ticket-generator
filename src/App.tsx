import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { SkipLink } from "./components/SkipLink";

export function App() {

  return (
    <>
      <SkipLink />
      <Header />
      <Container>
        <Form />
        <ScrollToTopButton />
      </Container>
    </>
  )
}
