import { Paper, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, {useState, useEffect} from 'react'
import api from '../api/Axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button'
import {useNavigate} from 'react-router-dom'
import EditModal from '../utils/EditModal';


function Listado(){

    const [ personas, setPersonas ] = useState([])
    const [ selected, setSelected ] = useState({})
    const [ open, setOpen ] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData  = async () => {
            try{
                const response = await api.get('http://localhost/example-webservice/public/api/personas')
                setPersonas(response.data)
            }catch(err){
                if(err.response){
                    console.log(err.response.data)
                    console.log(err.response.status)
                    console.log(err.response.headers)
                }else{
                    console.log(`Error en el servidor : ${err.message}`)
                }
            }
        }
        fetchData()
    },[])

    const reload = () => {
        window.location.reload(true);
    }

    const handleDeleteButton = (p) => {
        api.delete(`http://localhost/example-webservice/public/api/personas/${p.id}`)
        .then(response => {
            alert("Se eliminó con exito!")
            reload()
        })
        .catch(error => {
            alert("Error: "+ error)
        })
    }
    
    return(
        <React.Fragment>
            <center>            
                <TableContainer component={Paper} sx={{width: 'max-content'}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombres</TableCell>
                                <TableCell>Apellidos</TableCell>                       
                                <TableCell>Cédula / RUC</TableCell>
                                <TableCell>Dirección</TableCell>
                                <TableCell>Correo</TableCell>     
                                <TableCell>Acciones</TableCell>                   
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                personas.map(p =>
                                    <TableRow>            
                                        <TableCell>{p.nombres}</TableCell>
                                        <TableCell>{p.apellidos}</TableCell>
                                        <TableCell>{p.cedula}</TableCell>
                                        <TableCell>{p.direccion}</TableCell>
                                        <TableCell>{p.correo}</TableCell>
                                        <TableCell>
                                        <Button variant="contained" color="success" onClick={() => {
                                            handleDeleteButton(p)
                                        }} 
                                        sx={{marginRight: '5px'}}>
                                            Eliminar 
                                        </Button>
                                        <Button variant="contained" color="primary" onClick={() => {
                                            setSelected(p)
                                            setOpen(true)
                                        }}>
                                            Editar
                                        </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer><br/>
                <EditModal open={open} handleClose={() => setOpen(false)} persona={selected}/>            
                <Button variant="contained" color="secondary" onClick={() => {
                    navigate('/')
                }}>Volver</Button>
            </center>
        </React.Fragment>
    )
}

export default Listado