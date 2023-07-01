import React, {useState, useEffect} from 'react'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box';
import api from '../api/Axios'
import { TextField } from '@mui/material';

function EditModal(props){
    const {open, handleClose, persona} = props
    const [newPersona, setPersona ] = useState({id: '', codigo: '', tipoDocumento: 'Cedula', cedula: '', nombres: '', apellidos: '', correo: '', direccion: '', telefono: '', celular: '', genero: '',estadoCivil: '', conyuge: '', nombrePadre: '', nombreMadre: '', preparacion: '', titulo: ''})

    useEffect(() => {
        setPersona(persona);
      }, [persona]);

    const reload = () => {
        window.location.reload(true);
    }

    const handleEditButton = (e) => {
        api.put(`http://localhost/example-webservice/public/api/personas/${persona.id}`, newPersona)
        .then(response => {
            alert("Se editó con exito!")
            handleClose()
            reload()
        })
        .catch(error => {
            alert("Error: "+ error)
        })
    }

   
    return(
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
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
                        id="outlined"
                        label="Nombres"
                        defaultValue={persona.nombres}
                        onChange={(event) => setPersona({...newPersona,nombres:event.target.value})}
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Apellidos"
                        defaultValue={persona.apellidos}
                        onChange={(event) => setPersona({...newPersona,apellidos:event.target.value})}
                        />
                        </div>
                        <div>
                        <TextField
                        id="outlined-textarea"
                        label="Correo"
                        defaultValue={persona.correo}
                        onChange={(event) => setPersona({...newPersona,correo:event.target.value})}
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Dirección"
                        defaultValue={persona.direccion}
                        onChange={(event) => setPersona({...newPersona,direccion:event.target.value})}
                        />
                        </div>
                        <div>
                        <TextField
                        id="outlined-textarea"
                        label="Teléfono"
                        defaultValue={persona.telefono}
                        onChange={(event) => setPersona({...newPersona,telefono:event.target.value})}
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Celular"
                        defaultValue={persona.celular}
                        onChange={(event) => setPersona({...newPersona,celular:event.target.value})}
                        />
                        </div>
                        <div>
                        <TextField
                        id="outlined-textarea"
                        label="Género"
                        defaultValue= {persona.genero}
                        onChange={(event) => setPersona({...newPersona,genero:event.target.value})}
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Estado civil"
                        defaultValue= {persona.estadoCivil}
                        onChange={(event) => setPersona({...newPersona,estadoCivil:event.target.value})}
                        />              
                        </div>
                        <div>
                        <TextField
                            id="outlined-textarea"
                            label="Código"
                            defaultValue={persona.codigo}
                            onChange={(event) => setPersona({...newPersona,codigo:event.target.value})}
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Tipo documento"
                        value="cedula"
                        onChange={(event) => setPersona({...newPersona,tipoDocumento:"cedula"})}
                        />
                        </div>
                        <div>
                        <TextField
                            id="outlined-textarea"
                            label="Conyuge"
                            defaultValue={persona.conyuge}
                            sx={{width: '100%'}}
                            onChange={(event) => setPersona({...newPersona,conyuge:event.target.value})}
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Cedula/RUC"
                        defaultValue={persona.cedula}
                        onChange={(event) => setPersona({...newPersona,cedula:event.target.value})}
                        />
                        </div>
                        <div>
                        <TextField
                        id="outlined-textarea"
                        label="Nombres Padre"
                        defaultValue={persona.nombrePadre}
                        onChange={(event) => setPersona({...newPersona,nombrePadre:event.target.value})}
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Nombres Madre"
                        defaultValue={persona.nombreMadre}
                        onChange={(event) => setPersona({...newPersona,nombreMadre:event.target.value})}
                        />
                        </div>
                        <div>
                        <TextField
                        id="outlined-textarea"
                        label="Preparación"
                        defaultValue={persona.preparacion}
                        onChange={(event) => setPersona({...newPersona,preparacion:event.target.value})}
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Título"
                        defaultValue={persona.titulo}
                        onChange={(event) => setPersona({...newPersona,titulo:event.target.value})}
                        />
                        </div>
                    </Box>
                    </CardContent>
                    <CardActions sx={{marginLeft: '30%'}}>
                    <Button variant="contained" color="success" onClick={handleEditButton}>
                        Editar
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    </CardActions>
                </Card>
            </center>
        </Modal>
    )
}

export default EditModal