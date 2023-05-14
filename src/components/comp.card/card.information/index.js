import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './index.css'
export default function CardInformation(props) {

  return (
    <Box sx={{ justifyContent: "center" }} >
      <Grid container
        spacing={1}
        sx={{ marginTop: 5, paddingLeft: 3, paddingRight: 3 }}>

        <Grid item md={12} >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            className='title-home'
          >
            Plataforma comunitaria para creadores

          </Typography>
        </Grid>

        <Grid item md={12}>
          <Stack

            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Typography justifyContent="center" variant="h5" color="text.secondary" paragraph className='text-information-home'>
              Parte comunidad, parte juego, parte negocio, parte aprendizaje. Gánate la vida reuniendo a las personas para colaborar en objetivos e intereses compartidos. ¡Haz amigos, pasa el rato, gana dinero y diviértete!
            </Typography>
          </Stack>


        </Grid>

        <Grid item xs={12} >

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            align="center"
            spacing={{ xs: 1, sm: 1, md: 1 }}
            justifyContent="center"
          >
            <Button variant="contained"  color='buttonsTribu'>Crear Comunidad</Button>
            <Button variant="contained" >Ver en Accion</Button>
          </Stack>
        </Grid>
      </Grid>


    </Box >
  );
}
