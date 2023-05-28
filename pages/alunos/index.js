import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaPencilAlt } from 'react-icons/fa'

function index() {

    const [alunos, setalunos] = useState([])

    useEffect(()=>{
        setalunos(JSON.parse(window.localStorage.getItem('alunos')) || [])
    }, [])

function getAll(){
    return JSON.parse(window.localStorage.getItem('alunos')) || []
}
function edit(){
    console.log ('estou aqui')
}
function excluir (id){
    if(confirm('Deseja Realmente Excluir Esse Item')){
        const alunos = getAll ()
        alunos.splice(id, 1)
    window.localStorage.setItem('alunos', JSON.stringify(alunos))
    setalunos(alunos)
    }
}

    return (

        <Pagina titulo="Alunos">
            <Row className="px-1 mx-1">
                <Col>
                    <Link href={'/alunos/form'} className='btn btn-primary text-white'>Novo</Link>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Matricula</th>
                                <th>Turma</th>
                            </tr>
                        </thead>
                        <tbody> 
                        {alunos.map( (item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link  href={'/alunos/'+ i}>
                                    <FaPencilAlt className='me-2 text-primary' /> 
                                    </Link>
                                    <AiOutlineDelete onClick={()=> excluir(i)} className=' text-danger' /> 
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.matricula}</td>
                                <td>{item.turma}</td>
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
