import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";
import MachIgm from "../components/Card";

function createData(date, payment, amount) {
	return { date, payment, amount };
}

const rows = [
	createData("17 Marzo 2024", "Compra en OXXO", "$ 12.320"),
	createData("20 Abril 2024", "Ahorro para Casa", "$ 120.000"),
	createData("25 Mayo 2024", "Compra en Zara", "$ 30.990"),
	createData("29 Junio 2024", "Compra en J&N", "$ 24.310"),
	createData("30 Junio 2024", "Compra en H&M", "$ 54.330"),
];

export default function Movimientos() {
	return (
		<Container maxWidth="sm" style={{ marginTop: "50px" }}>
			<MachIgm />
			<Typography variant="h5" align="center" gutterBottom>
				Mis Movimientos
			</Typography>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead backgroundColor="secondary">
						<TableRow>
							<TableCell>Fecha</TableCell>
							<TableCell align="right">Movimiento</TableCell>
							<TableCell align="right">Monto</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.date}
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
		</Container>
	);
}
