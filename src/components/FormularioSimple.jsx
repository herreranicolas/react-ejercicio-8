import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function FormularioSimple() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (!form.checkValidity()) {
      e.stopPropagation();
      setValidated(true);
      console.log("los datos estan mal");
    } else {
      console.log("enviando datos");
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
