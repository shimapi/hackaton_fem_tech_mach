import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import logo from "../assets/images/logo-mach.png";
import { Container } from 'react-bootstrap';

function MachIgm() {
  return (
    <Container style={{ alignContent:'center' }} > 
    <Card style={{ boxShadow: 'none' }}>
      <CardMedia
        component="img"
        image={logo}
        alt="mach"
        style={{ maxWidth: '350px' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Banca digital para todos
        </Typography>
      </CardContent>
    </Card>
    </Container>
  );
}

export default MachIgm;
