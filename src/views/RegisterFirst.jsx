import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import MachIgm from "../components/Card";

const RegisterFirst = () => {
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const handleNameChange = (event) => {
		setName(event.target.value);
	};
	const handleLastnameChange = (event) => {
		setLastname(event.target.value);
	};
	const handlePhoneChange = (event) => {
		setPhone(event.target.value);
	};
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		// Aquí puedes enviar los datos del formulario a través de una solicitud HTTP
		console.log("name:", name);
		console.log("lastname:", lastname);
		console.log("telefono:", phone);
		console.log("email:", email);
	};

	return (
		<>
			<MachIgm />
			<Typography variant="h5" align="center" gutterBottom>
				Regístrate en pocos pasos
			</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					label="Nombre"
					value={name}
					onChange={handleNameChange}
					fullWidth
					margin="normal"
					placeholder="Ingresa tu nombre"
				/>
				<TextField
					label="Lastname"
					value={lastname}
					onChange={handleLastnameChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="Teléfono"
					value={phone}
					onChange={handlePhoneChange}
					fullWidth
					margin="normal"
					placeholder="Ingresa tu nombre"
				/>
				<TextField
					label="e-mail"
					value={email}
					onChange={handleEmailChange}
					fullWidth
					margin="normal"
				/>
				<Button type="submit" variant="contained" color="primary" fullWidth>
					Continuar
				</Button>
			</form>
		</>
	);
};

export default RegisterFirst;
