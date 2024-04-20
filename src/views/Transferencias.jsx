import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Pagination, Typography } from "@mui/material";
import MachIgm from "../components/Card";

function createData(date, payment, amount) {
	return { date, payment, amount };
}

const rows = [
	createData("17 Marzo 2024", "Juanita Perez", "$ 100.000"),
	createData("20 Abril 2024", "Claudia Inostroza", "$ 10.000"),
	createData("25 Mayo 2024", "Juanita Perez", "$ 50.000"),
	createData("30 Junio 2024", "Margarita Perez", "$ 10.000"),
	createData("17 Marzo 2024", "Juanita Perez", "$ 100.000"),
	createData("20 Abril 2024", "Claudia Inostroza", "$ 10.000"),
	createData("25 Mayo 2024", "Juanita Perez", "$ 50.000"),
	createData("30 Junio 2024", "Margarita Perez", "$ 10.000"),
	createData("17 Marzo 2024", "Juanita Perez", "$ 100.000"),
	createData("20 Abril 2024", "Claudia Inostroza", "$ 10.000"),
	createData("25 Mayo 2024", "Juanita Perez", "$ 50.000"),
	createData("30 Junio 2024", "Margarita Perez", "$ 10.000"),
	createData("20 Abril 2024", "Claudia Inostroza", "$ 10.000"),
	createData("25 Mayo 2024", "Juanita Perez", "$ 50.000"),
	createData("30 Junio 2024", "Margarita Perez", "$ 10.000"),
	createData("17 Marzo 2024", "Juanita Perez", "$ 100.000"),
	createData("20 Abril 2024", "Claudia Inostroza", "$ 10.000"),
	createData("25 Mayo 2024", "Juanita Perez", "$ 50.000"),
	createData("30 Junio 2024", "Margarita Perez", "$ 10.000"),
];

export default function Transferencias() {
	const [page, setPage] = useState(1);
	const itemsPerPage = 5;

	const handleChange = (event, value) => {
		setPage(value);
		console.log(value);
	};
	return (
		<Container maxWidth="sm" style={{ marginTop: "50px" }}>
			<MachIgm />
			<Typography variant="h5" align="center" gutterBottom>
				Mis Transferencias
			</Typography>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Fecha</TableCell>
							<TableCell align="left">Pago enviado</TableCell>
							<TableCell align="right">Monto</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice((page - 1) * itemsPerPage, page * itemsPerPage)
							.map((row) => (
								<TableRow
									key={Math.random()}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{row.date}
									</TableCell>
									<TableCell align="right">{row.payment}</TableCell>
									<TableCell align="right">{row.amount}</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			<Pagination
				count={Math.ceil(rows.length / itemsPerPage)}
				color="primary"
				onChange={handleChange}
			/>
		</Container>
	);
}
