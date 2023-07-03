import { Button, Card, CardActions, CardContent, TableCell, TextField, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import api from '../api/Axios'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import {useNavigate} from 'react-router-dom'

function BuscarPage() {
    const [id, setId] = useState('')
    const [ personas, setPersonas ] = useState([])
    const [mostrar, SetMostrar] = useState(false)

    const navigate = useNavigate()
    
    const handleSearch = () => {
        api.get('http://localhost/example-webservice/public/api/personas', id)
            .then(response => {
                setPersonas(response.data)
                SetMostrar(true)
            })
            .catch(error => {
                alert("error: " + error)
            })
    }

    const renderData = () => {
        return(
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nombres Apellidos</TableCell>                      
                    <TableCell>Cédula / RUC</TableCell>
                    <TableCell>Dirección</TableCell>
                    <TableCell>Correo</TableCell>     
                    <TableCell>Teléfono</TableCell>                   
                    <TableCell>Celular</TableCell>                   
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    personas.map(p =>
                        <TableRow>            
                            <TableCell>{`${p.nombres} ${p.apellidos}`}</TableCell>
                            <TableCell>{p.cedula}</TableCell>
                            <TableCell>{p.direccion}</TableCell>
                            <TableCell>{p.correo}</TableCell>
                            <TableCell>{p.telefono}</TableCell>
                            <TableCell>{p.celular}</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
        )
    }

    return (
        <center>
            <h3>Buscar por ID: </h3>
            <TextField
                id="outlined-textarea"
                label="ID"
                onChange={(event) => { setId(event.target.value) }}
            />
            <Button variant="contained" color="success" onClick={handleSearch}>
                Buscar
            </Button>
            {
                mostrar? renderData() : <></>
            }
            <Button variant="contained" color="secondary" onClick={() => {
                navigate('/')
            }}>
                Volver
            </Button>
        </center>
    )
}

export default BuscarPage