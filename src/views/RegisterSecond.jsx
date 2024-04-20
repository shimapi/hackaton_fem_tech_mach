import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import MachIgm from "../components/Card";
import { validateRut } from "rutlib";

const RegisterSecond = () => {
	const [rut, setRut] = useState("");

	const handleRutChange = (event) => {
		setRut(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		// Aquí puedes enviar los datos del formulario a través de una solicitud HTTP
		console.log("rut:", validateRut(rut));
	};
	return (
		<>
			<MachIgm />
			<Typography variant="h5" align="center" gutterBottom>
				¿Cuál es tu RUT?
			</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					label="RUT"
					value={rut}
					onChange={handleRutChange}
					fullWidth
					margin="normal"
					placeholder="Ingresa tu RUT"
				/>
				{validateRut(rut) ? (
					<p style={{ color: "green" }}>RUT válido</p>
				) : (
					<p style={{ color: "red" }}>Por favor ingresa un rut Válido</p>
				)}
				<Button
					type="submit"
					variant="contained"
					color="primary"
					fullWidth
					disabled={!validateRut(rut)}
				>
					Registrarte
				</Button>
			</form>
		</>
	);
};

export default RegisterSecond;
