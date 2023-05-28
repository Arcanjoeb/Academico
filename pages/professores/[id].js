import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Col,  Form,  Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowRoundBack } from 'react-icons/io'


const Formulario = () => {

    const { push, query  } = useRouter()
    const { register, handleSubmit, setValue } = useForm();
    
    useEffect(()=>{
        if(query.id){
            const professores = JSON.parse(window.localStorage.getItem('professores'))
            const professor = professores[query.id]

            for (let atributo in professores){
                setValue('atributo', professores[atributo]) 
            }
        }
    }),[query.id]

    function salvar(dados) {
        const professores = JSON.parse(window.localStorage.getItem('professores')) || []
        professores.splice(query.id, 1, dados)
        window.localStorage.setItem('professores', JSON.stringify(professores))
        push('/professores')
    }

    return (

        <Pagina titulo="Formulário De Professores">
            <Row className="px-1 mx-1">
                <Col>
                    <Form >
                        <Form.Group className="mb-3" controlId="Nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome" {...register('nome')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Matricula">
                            <Form.Label>Matricula</Form.Label>
                            <Form.Control type="text" placeholder="Matricula" {...register('matricula')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Modalidade">
                            <Form.Label>Modalidade</Form.Label>
                            <Form.Control type="text" placeholder="Modalidade" {...register('modalidade')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Turno">
                            <Form.Label>Turno</Form.Label>
                            <Form.Control type="text" placeholder="Turno" {...register('turno')} />
                        </Form.Group>
                        <div className='text-center'>

                        <Button variant="success" onClick={handleSubmit(salvar)}>
                            <AiOutlineCheck className='me-1' /> Salvar
                        </Button>
                        <Link href={'/professores'} className='ms-2 btn btn-danger'>
                            <IoMdArrowRoundBack className='me-1' />
                            Voltar
                        </Link>
                        </div>
                    </Form>
                </Col>

            </Row>
        </Pagina>
    )
}

export default Formulario

