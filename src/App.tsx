import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

export function App() {

  return (
    <>
      <Header />
      <Container>
        <Form />
      </Container>
    </>
  )
}