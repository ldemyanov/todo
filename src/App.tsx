import Background from "./components/wrapper/Background";
import Container from "./components/wrapper/Container";
import Logo from "./components/wrapper/Logo";
import TodoApp from "./components/TodoApp";

export default function App() {
  return (
    <Background>
      <Container>
        <Logo />
        <TodoApp />
      </Container>
    </Background>
  );
}
