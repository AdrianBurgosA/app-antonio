import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import api from '../api/Axios'
import { TextField } from '@mui/material';
import {useNavigate} from 'react-router-dom'

function Agregar() {

  const [persona, setPersona ] = useState({codigo: '', tipoDocumento: 'Cedula', cedula: '', nombres: '', apellidos: '', correo: '', direccion: '', telefono: '', celular: '', genero: '',estadoCivil: '', conyuge: '', nombrePadre: '', nombreMadre: '', preparacion: '', titulo: ''})
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleSaveButton = (e) => {
    api.post('http://localhost/example-webservice/public/api/personas',persona)
    .then(response => {
      alert("Se guardó con exito!")
    })
    .catch(error => {
      alert("Error: " + error)
    })
  }

  return (
    <center>      
      <Card sx={{width: 'max-content'}}>
        <CardContent>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >              
            <div >
              <TextField
              id="outlined-textarea"
              label="Nombres"
              placeholder='Ingresa los nombres'
              onChange={(event) => setPersona({...persona,nombres:event.target.value})}
              />
              <TextField
              id="outlined-textarea"
              label="Apellidos"
              placeholder='Ingresa los apellidos'
              onChange={(event) => setPersona({...persona,apellidos:event.target.value})}
              />
            </div>
            <div>
              <TextField
              id="outlined-textarea"
              label="Correo"
              placeholder='Correo'
              onChange={(event) => setPersona({...persona,correo:event.target.value})}
              />
              <TextField
              id="outlined-textarea"
              label="Dirección"
              placeholder='Dirección'
              onChange={(event) => setPersona({...persona,direccion:event.target.value})}
              />
            </div>
            <div>
              <TextField
              id="outlined-textarea"
              label="Teléfono"
              placeholder='Teléfono'
              onChange={(event) => setPersona({...persona,telefono:event.target.value})}
              />
              <TextField
              id="outlined-textarea"
              label="Celular"
              placeholder='Celular'
              onChange={(event) => setPersona({...persona,celular:event.target.value})}
              />
            </div>
            <div>              
              <TextField
              id="outlined-textarea"
              label="Género"
              placeholder='Teléfono'
              onChange={(event) => setPersona({...persona,genero:event.target.value})}
              />
              <TextField
              id="outlined-textarea"
              label="Estado civil"
              placeholder='Ejemplo: Soltero'
              onChange={(event) => setPersona({...persona,estadoCivil:event.target.value})}
              />              
            </div>
            <div>
              <TextField
                id="outlined-textarea"
                label="Código"
                placeholder="Código"
                onChange={(event) => setPersona({...persona,codigo:event.target.value})}
              />
              <TextField
              id="outlined-textarea"
              label="Tipo documento"
              value="cedula"
              onChange={(event) => setPersona({...persona,tipoDocumento:"cedula"})}
              />
            </div>
            <div>
              <TextField
                id="outlined-textarea"
                label="Conyuge"
                placeholder='Conyuge'
                sx={{width: '100%'}}
                onChange={(event) => setPersona({...persona,conyuge:event.target.value})}
              />
              <TextField
              id="outlined-textarea"
              label="Cedula/RUC"
              placeholder='Ingresa cedula/ruc'
              onChange={(event) => setPersona({...persona,cedula:event.target.value})}
              />
            </div>
            <div>
              <TextField
              id="outlined-textarea"
              label="Nombres Padre"
              placeholder='Nombres Padre'
              onChange={(event) => setPersona({...persona,nombrePadre:event.target.value})}
              />
              <TextField
              id="outlined-textarea"
              label="Nombres Madre"
              placeholder='Nombres Madre'
              onChange={(event) => setPersona({...persona,nombreMadre:event.target.value})}
              />
            </div>
            <div>
              <TextField
              id="outlined-textarea"
              label="Preparación"
              placeholder='Ejemplo: Docente'
              onChange={(event) => setPersona({...persona,preparacion:event.target.value})}
              />
              <TextField
              id="outlined-textarea"
              label="Título"
              placeholder='Ejemplo: Estudiante'
              onChange={(event) => setPersona({...persona,titulo:event.target.value})}
              />
            </div>
          </Box>
        </CardContent>        
        <CardActions sx={{marginLeft: '30%'}}>
          <Button variant="contained" color="success" onClick={() => {
            navigate('/buscar')
          }}>
            Buscar
          </Button>
          <Button variant="contained" color="success" onClick={handleSaveButton}>
            Guardar
          </Button>
          <Button variant="contained" color="primary" onClick={() => {
            navigate('/listado')
          }}>
            Ver
          </Button>
        </CardActions>
      </Card>  
    </center>
  );
}

export default Agregar;