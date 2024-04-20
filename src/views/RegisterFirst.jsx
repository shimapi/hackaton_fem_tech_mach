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

	const validateEmail = (email) => {
		const re = /\S+@\S+\.\S+/;
		console.log(re.test(email));
		return re.test(email);
	};

	const allFieldsAreValid = () => {
		return (
			name.length >= 3 &&
			lastname.length >= 3 &&
			phone.length >= 9 &&
			validateEmail(email)
		);
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
					error={name.length < 3}
				/>
				<TextField
					label="Lastname"
					value={lastname}
					onChange={handleLastnameChange}
					fullWidth
					margin="normal"
					placeholder="Ingresa tu apellido"
					error={lastname.length < 3}
				/>
				<TextField
					label="Teléfono"
					value={phone}
					onChange={handlePhoneChange}
					fullWidth
					margin="normal"
					placeholder="Ingresa tu nombre"
					error={phone.length < 9}
				/>
				<TextField
					label="e-mail"
					value={email}
					onChange={handleEmailChange}
					fullWidth
					margin="normal"
					error={!validateEmail(email)}
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					fullWidth
					disabled={!allFieldsAreValid()}
				>
					Continuar
				</Button>
			</form>
		</>
	);
};

export default RegisterFirst;
