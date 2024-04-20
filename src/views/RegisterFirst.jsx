import { useState } from "react";
import { TextField, Button } from "@mui/material";
import MachIgm from "../components/Card";

const RegisterFirst = () => {
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");

	const handleNameChange = (event) => {
		setName(event.target.value);
	};
	const handleLastnameChange = (event) => {
		setLastname(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		// Aquí puedes enviar los datos del formulario a través de una solicitud HTTP
		console.log("name:", name);
		console.log("lastname:", lastname);
	};
	return (
		<>
			<MachIgm />
			<h2>Regístrate en pocos pasos</h2>
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
				<Button type="submit" variant="contained" color="primary" fullWidth>
					Continuar
				</Button>
			</form>
		</>
	);
};

export default RegisterFirst;
