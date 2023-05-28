import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaPencilAlt } from 'react-icons/fa'

function index() {

    const [salas, setsalas] = useState([])

    useEffect(()=>{
        setsalas(JSON.parse(window.localStorage.getItem('salas')) || [])
    }, [])

function getAll(){
    return JSON.parse(window.localStorage.getItem('salas')) || []
}
function edit(){
    console.log ('estou aqui')
}
function excluir (id){
    if(confirm('Deseja Realmente Excluir Esse Item')){
        const salas = getAll ()
    salas.splice(id, 1)
    window.localStorage.setItem('salas', JSON.stringify(salas))
    setsalas(salas)
    }
}

    return (

        <Pagina titulo="Salas">
            <Row className="px-1 mx-1">
                <Col>
                    <Link href={'/salas/form'} className='btn btn-primary text-white'>Novo</Link>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Modalidade</th>
                                <th>Capacidade</th>
                            </tr>
                        </thead>
                        <tbody> 
                        {salas.map( (item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link  href={'/salas/'+ i}>
                                    <FaPencilAlt className='me-2 text-primary' /> 
                                    </Link>
                                    <AiOutlineDelete onClick={()=> excluir(i)} className=' text-danger' /> 
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.modalidade}</td>
                                <td>{item.capacidade}</td>
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
