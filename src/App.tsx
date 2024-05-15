import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

export function App() {

  return (
    <>
      <Header />
      <Container>
        <Form />
        <ScrollToTopButton />
      </Container>
    </>
  )
}