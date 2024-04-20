import { useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Button } from "@mui/material";
import MachIgm from "../components/Card";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Aquí puedes enviar los datos del formulario a través de una solicitud HTTP
		console.log("Email:", email);
		console.log("Pass:", password);
	};

	return (
		<Container maxWidth="sm" style={{ marginTop: '50px' }}>
			<MachIgm />
			<div style={{ marginBottom: '10px' }}></div>
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
				<Link to="/home">
					<Button type="submit" variant="contained" color="primary" fullWidth>
						Ingresar
					</Button>
				</Link>
			</form>
			<div style={{ marginBottom: '20px' }}></div>
			<Link to="/otra-ruta">
				<Typography variant="body2" component="span">
					Olvide mi contraseña
				</Typography>
			</Link>
		</Container>
	);
};

export default Login;