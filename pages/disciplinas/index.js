import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaPencilAlt } from 'react-icons/fa'

function index() {

  const [disciplinas, setdisciplinas] = useState([])

  useEffect(() => {
    setdisciplinas(JSON.parse(window.localStorage.getItem('disciplinas')) || [])
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('disciplinas')) || []
  }
  function edit() {
    console.log('estou aqui')
  }
  function excluir(id) {
    if (confirm('Deseja Realmente Excluir Esse Item')) {
      const disciplinas = getAll()
      disciplinas.splice(id, 1)
      window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
      setdisciplinas(disciplinas)
    }
  }

  return (

    <Pagina titulo="Disciplinas">
      <Row className="px-1 mx-1">
        <Col>
          <Link href={'/disciplinas/forms'} className='btn btn-primary text-white'>Novo</Link>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Duração</th>
                <th>Modalidade</th>
              </tr>
            </thead>
            <tbody>
              {disciplinas.map((item, i) => (
                <tr key={i}>
                  <td>
                    <Link href={'/disciplinas/' + i}>
                      <FaPencilAlt className='me-2 text-primary' />
                    </Link>
                    <AiOutlineDelete onClick={() => excluir(i)} className=' text-danger' />
                  </td>
                  <td>{item.nome}</td>
                  <td>{item.duracao}</td>
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
