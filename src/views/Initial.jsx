import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import imagen from '../assets/images/people.png';


const Initial = () => {
    return (
        <Container maxWidth="sm" style={{ marginTop: '50px' }}>
            <Typography variant="h4" align="right" gutterBottom>
                Bienvenido a la primera banca digital de Chile
            </Typography>
            <div style={{ marginBottom: '50px' }}></div>
            <Typography variant="body1" align="center" paragraph>
                Donde tenemos espacio para todos
            </Typography>
            <img src={imagen} align="center" style={{ width: '350px' }} alt="gente" />
            <div style={{ marginBottom: '50px' }}></div>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                    <Link to="/register">
                        <Button variant="contained" color="primary" size="large">
                            quiero ser parte
                        </Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/login">
                        <Button variant="outlined" color="primary" size="large">
                            Ya tengo cuenta
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <footer style={{ marginTop: '50px' }}>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Typography variant="body2" align="center" color="textSecondary">
                            ¿Necesitas ayuda? Contáctanos al 600 200 2024.
                        </Typography>
                    </Grid>
                </Grid>
            </footer>
        </Container>
    )
};

export default Initial;
