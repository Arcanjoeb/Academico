import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaPencilAlt } from 'react-icons/fa'

function index() {

    const [semestre, setsemestre] = useState([])

    useEffect(()=>{
        setsemestre(JSON.parse(window.localStorage.getItem('semestre')) || [])
    }, [])

function getAll(){
    return JSON.parse(window.localStorage.getItem('semestre')) || []
}
function edit(){
    console.log ('estou aqui')
}
function excluir (id){
    if(confirm('Deseja Realmente Excluir Esse Item')){
        const semestre = getAll ()
    semestre.splice(id, 1)
    window.localStorage.setItem('semestre', JSON.stringify(semestre))
    setsemestre(semestre)
    }
}

    return (

        <Pagina titulo="Semestre">
            <Row className="px-1 mx-1">
                <Col>
                    <Link href={'/semestre/form'} className='btn btn-primary text-white'>Novo</Link>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Materia</th>
                                <th>Periodo</th>
                                <th>Modalidade</th>
                            </tr>
                        </thead>
                        <tbody> 
                        {semestre.map( (item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link  href={'/semestre/'+ i}>
                                    <FaPencilAlt className='me-2 text-primary' /> 
                                    </Link>
                                    <AiOutlineDelete onClick={()=> excluir(i)} className=' text-danger' /> 
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.periodo}</td>
                                <td>{item.modalidade}</td>
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
