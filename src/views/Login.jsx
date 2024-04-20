import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import MachIgm from "../components/Card";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP
    console.log('Email:', email);
    console.log('Pass:', password);

  };

  return (
    <>
      <MachIgm />
      <form onSubmit={handleSubmit}>
        <TextField
          label="Correo electrónico"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          margin="normal"
          placeholder="email@example.com"
        />
        <TextField
          label="Contraseña"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Ingresar
        </Button>
      </form>
    </>
  );
};

export default Login;

/**
 * <!--
      <MachIgm />
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control placeholder="email@example.com" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        
      </Form>
 */