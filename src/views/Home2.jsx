import {
	AppBar,
	Toolbar,
	Typography,
	Container,
	Card,
	CardContent,
	Grid,
	CardActionArea,
} from "@mui/material";
import {
	Receipt,
	Payments,
	CurrencyExchange,
	Savings,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const saldoCuenta = 5000; // Ejemplo de saldo de la cuenta

const Home2 = () => {
	const usuario = "Nombre del Usuario"; // cambiar al nombre del

	return (
		<div>
			<AppBar position="static">
				<Container maxWidth="lg">
					<Toolbar>
						<Typography variant="body2">Hola, {usuario}!</Typography>
					</Toolbar>
				</Container>
			</AppBar>
			<Container sx={{ paddingTop: 4 }}>
				<Grid container spacing={2} justifyContent="center">
					<Grid item xs={12} sm={6} md={4}>
						<Card style={{ backgroundColor: "secondary" }}>
							<CardContent>
								<Typography variant="h5" component="div" gutterBottom>
									Saldo de cuenta
								</Typography>
								<Typography variant="h4" component="div">
									${saldoCuenta}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
				<Grid container spacing={2} sx={{ marginTop: 4 }}>
					<Grid item xs={6} sm={6} md={6}>
						<Card>
							<CardActionArea component={RouterLink} to="/movimientos">
								<CardContent>
									<Savings color="primary" />
									<Typography>Movimientos</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={6} sm={6} md={6}>
						<Card>
							<CardActionArea component={RouterLink} to="/transferencias">
								<CardContent>
									<CurrencyExchange color="primary" />
									<Typography>Transferencias</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={6} sm={6} md={6}>
						<Card>
							<CardActionArea component={RouterLink} to="/questions">
								<CardContent>
									<Payments color="primary" />
									<Typography>Paga tus cuentas</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={6} sm={6} md={6}>
						<Card>
							<CardActionArea component={RouterLink} to="/questions">
								<CardContent>
									<Receipt color="primary" />
									<Typography>Tus gastos</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Home2;
