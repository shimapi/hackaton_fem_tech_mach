import { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import MachIgm from "../components/Card";
import { validateRut } from "rutlib";
import { Link } from "react-router-dom";
import PathConstants from "../Routes/PathConstants";

const Identification = () => {
	const [rut, setRut] = useState("");
	const [password, setPassword] = useState("");

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

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
			<Container maxWidth="sm" style={{ marginTop: "50px" }}>
				<MachIgm />
				<Typography variant="body1" align="center">
					Necesitamos verificar tu identidad
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
						<Typography style={{ color: "green" }} gutterBottom>
							RUT válido
						</Typography>
					) : (
						<Typography style={{ color: "red" }} gutterBottom>
							Por favor ingresa un rut Válido
						</Typography>
					)}
					<TextField
						label="Contraseña"
						value={password}
						onChange={handlePasswordChange}
						fullWidth
						margin="normal"
						placeholder="Ingresa una contraseña segura"
						type="password"
					/>
					<Link to={PathConstants.HOME}>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							disabled={!validateRut(rut)}
						>
							Registrarte
						</Button>
					</Link>
				</form>
			</Container>
		</>
	);
};

export default Identification;
