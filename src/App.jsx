import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioSimple from "./components/FormularioSimple";

function App() {
  return (
    <Container className="my-3">
      <h1 className="text-center">Formulario</h1>
      <FormularioSimple />
    </Container>
  );
}

export default App;
