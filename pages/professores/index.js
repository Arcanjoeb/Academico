import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaPencilAlt } from 'react-icons/fa'

function index() {

    const [professores, setprofessores] = useState([])

    useEffect(()=>{
        setprofessores(JSON.parse(window.localStorage.getItem('professores')) || [])
    }, [])

function getAll(){
    return JSON.parse(window.localStorage.getItem('professores')) || []
}
function edit(){
    console.log ('estou aqui')
}
function excluir (id){
    if(confirm('Deseja Realmente Excluir Esse Item')){
        const professores = getAll ()
    professores.splice(id, 1)
    window.localStorage.setItem('professores', JSON.stringify(professores))
    setprofessores(professores)
    }
}

    return (

        <Pagina titulo="Professores">
            <Row className="px-1 mx-1">
                <Col>
                    <Link href={'/professores/form'} className='btn btn-primary text-white'>Novo</Link>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Matricula</th>
                                <th>Modalidade</th>
                                <th>Turno</th>
                            </tr>
                        </thead>
                        <tbody> 
                        {professores.map( (item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link  href={'/professores/'+ i}>
                                    <FaPencilAlt className='me-2 text-primary' /> 
                                    </Link>
                                    <AiOutlineDelete onClick={()=> excluir(i)} className=' text-danger' /> 
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.matricula}</td>
                                <td>{item.modalidade}</td>
                                <td>{item.turno}</td>
                            </tr>
                        ))}

                        </tbody>
                    </Table>

                </Col>

            </Row>
        </Pagina>
    )
}

export default index
