import Background from "./components/ui/Background";
import Container from "./components/ui/Container";
import Logo from "./components/ui/Logo";
import TodoApp from "./components/todoApp/TodoApp";

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
