import { AppBar, Toolbar, Typography, Container, Card, CardContent, Grid, Button, ButtonBase, CardActionArea } from '@mui/material';
import { AccountBalanceWallet } from '@mui/icons-material';
import { Link as RouterLink  } from 'react-router-dom';

const saldoCuenta = 5000; // Ejemplo de saldo de la cuenta

const Home = () => {
	const usuario = "Nombre del Usuario"; // cambiar al nombre del

	return (
		<div>
			<AppBar position="static">
				<Container maxWidth="lg">
					<Toolbar>
						<Typography variant="body2">
							Hola, {usuario}!
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
			<Container sx={{ paddingTop: 4 }}>
				<Grid container spacing={2} justifyContent="center">
					<Grid item xs={12} sm={6} md={4}>
						<Card>
							<CardContent>
								<Typography variant="h5" component="div" gutterBottom>
									Saldo de cuenta
								</Typography>
								<Typography variant="h4" component="div">
									${saldoCuenta.toFixed(2)}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
				<Grid container spacing={2} sx={{ marginTop: 4 }}>
					<Grid item xs={6} sm={6} md={6}>
						<Card>
							<CardActionArea component={RouterLink} to="/questions">
								<CardContent>
									<Typography>Transferencias</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={6} sm={6} md={6}>
						<Card>
							<CardActionArea component={RouterLink} to="/questions">
								<CardContent>
									<Typography>Pagos</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={6} sm={6} md={6}>
						<Card>
							<CardActionArea component={RouterLink} to="/questions">
								<CardContent>
									<Typography>Movimientos</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					{/* Agrega más opciones aquí según sea necesario */}
				</Grid>
			</Container>
		</div >
	);
};

export default Home;
