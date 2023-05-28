import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";

function FormularioSimple() {
  const [validated, setValidated] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (!form.checkValidity()) {
      e.stopPropagation();
      setValidated(true);
      Swal.fire({
        icon: "error",
        iconColor: "#198754",
        title: "Oops...Lo siento",
        text: "Debes completar todos los campos.",
        background: "#cbf1c4",
        color: "#198754",
        confirmButtonColor: "#198754",
      });
    } else {
      Swal.fire({
        icon: "success",
        iconColor: "#198754",
        title: "¡Muy bien!",
        text: "Datos enviados.",
        background: "#cbf1c4",
        color: "#198754",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
      setValidated(false);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Form.Group as={Col} xs={12} controlId="inputNombre" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <Form.Control.Feedback>¡Excelente!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor ingresa un nombre válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} xs={12} controlId="inputApellido" className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Apellido"
            name="apellido"
            value={apellido}
            onChange={(e) => {
              setApellido(e.target.value);
            }}
          />
          <Form.Control.Feedback>¡Excelente!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor ingresa un apellido válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} xs={12} controlId="inputDNI" className="mb-3">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            placeholder="DNI"
            required
            minLength={7}
            maxLength={8}
            pattern="^\d{7,8}$"
            name="dni"
            value={dni}
            onChange={(e) => {
              setDni(e.target.value);
            }}
          />
          <Form.Control.Feedback>¡Excelente!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor ingresa un número de DNI válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} xs={12} controlId="inputEmail" className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Correo electrónico"
            name="email"
            value={email}
            pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Control.Feedback>¡Excelente!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor ingresa un correo válido.
          </Form.Control.Feedback>
        </Form.Group>
        <div className="text-center">
          <Button type="submit" className="w-auto">
            Enviar formulario
          </Button>
        </div>
      </Row>
    </Form>
  );
}

export default FormularioSimple;
