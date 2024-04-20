import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button } from "@mui/material";
import MachIgm from "../components/Card";
import axios from "axios";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post("http://localhost:8080/login", {
				email: email,
				password: password,
			});

			// Manejar la respuesta del servidor
			console.log("Respuesta del servidor:", response.data);
			localStorage.setItem("user", JSON.stringify(response.data));
			navigate("/home");
		} catch (error) {
			// Manejar cualquier error que ocurra durante la solicitud
			console.error("Error al iniciar sesión:", error);
		}
	};

	return (
		<Container maxWidth="sm" style={{ marginTop: "50px" }}>
			<MachIgm />
			<div style={{ marginBottom: "10px" }}></div>
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
					type="password"
					fullWidth
					margin="normal"
				/>
				<Button type="submit" variant="contained" color="primary" fullWidth>
					Ingresar
				</Button>
			</form>
			<div style={{ marginBottom: "20px" }}></div>
			<Link to="/otra-ruta">
				<Typography variant="body2" component="span">
					Olvidé mi contraseña
				</Typography>
			</Link>
		</Container>
	);
};

export default Login;
