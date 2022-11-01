import PropTypes from 'prop-types';
// material
import { Grid, Box, Stack, Typography } from '@mui/material';
import AbogadoCard from '../AbogadoCard'
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';


const MyImage = ({ name,  image_url}) => (
  <LazyLoadImage
    alt={name}
    top= '0'
    width='100%'
    height='100%'
    object-fit= 'cover'
    position='absolute'
    src={image_url} // use normal <img> attributes as props
    />
);

const ResponsiveDialog = ( {open, handleClose, handleAbogadoSelection, abogadoCard} ) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
      <Box>
        <Dialog
          fullScreen={fullScreen}
            // fullWidth
            // maxWidth="sm"
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          {/* <DialogTitle id="responsive-dialog-title">
            {"Carta de presentacion"}
          </DialogTitle> */}
          <DialogContent>
            {/* <DialogContentText>
              {JSON.stringify(abogadoCard)}
            </DialogContentText> */}
            <Stack 
              direction="column"
              divider={<Divider orientation="horzontal" flexItem />} 
              spacing={2}>
              <Stack direction="row" spacing={4} >
                  <Avatar sx={{ width: 150, height: 150 }}>
                  <MyImage name={"imagen_perfil"} image_url={abogadoCard.image_url}/>
                  </Avatar>
                  <Typography variant="h4">
                  {abogadoCard.name}
                  </Typography>
              </Stack>
              <Box >
                <Typography variant="h6">
                      Acerca del Abogado     
                </Typography>
                <Typography variant="body1">
                      {abogadoCard.description}     
                </Typography>
              </Box>
              <Box >
                <Typography variant="h6">
                      Especialidades    
                </Typography>

                {abogadoCard.subjects.map((item, index) => {
                   return <Typography key = {index} variant="body1">
                          {item}     
                        </Typography>
                })}
                
              </Box>
              <Box >
                <Typography variant="h6">
                      Valor de consulta    
                </Typography>
                <Typography variant="body1">
                      {`1 hora de consulta : ${abogadoCard.appointmentCost} USD`}     
                </Typography>
              </Box>
        
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cerrar y buscar
            </Button>
            <Button onClick={() => handleAbogadoSelection()} autoFocus>
              Seleccionar Abogado
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  }

// ----------------------------------------------------------------------
AbogadoCardList.propTypes = {
    details: PropTypes.array.isRequired
};


export default function AbogadoCardList({ abogadoCard, setAbogadoCard, setList, details }) {

    const [open, setOpen] = useState(false);

      const handleClose = () => {
        setOpen(false);
      };

      const handleAbogadoSelection = () => {
        setOpen(false);
        setList([abogadoCard])
      }

    return (
        // <Grid container spacing={3} direction="column" alignItems="center" justifyContent="center" {...other}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            {open && <ResponsiveDialog open={open} handleClose={handleClose} handleAbogadoSelection={handleAbogadoSelection} abogadoCard={abogadoCard}/>}
        {details.map((product) => (
            <Grid key={product._id} item xs={12} sm={12} md={7}>
            <AbogadoCard details={product} setOpen={setOpen} setAbogadoCard={setAbogadoCard}/>
            </Grid>
        ))}
       </Grid>
    );
}
  