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
            const alunos = JSON.parse(window.localStorage.getItem('alunos'))
            const aluno = alunos[query.id]

            setValue('nome', aluno.nome)
            setValue('matricula', aluno.matricula)
            setValue('turma', aluno.turma)
        }
    }),[query.id]

    function salvar(dados) {
        const alunos = JSON.parse(window.localStorage.getItem('alunos')) || []
        alunos.push(dados)
        window.localStorage.setItem('alunos', JSON.stringify(alunos))
        push('/alunos')
    }

    return (

        <Pagina titulo="Formulário de Alunos">
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
                        <Form.Group className="mb-3" controlId="Turma">
                            <Form.Label>Turma</Form.Label>
                            <Form.Control type="text" placeholder="Turma" {...register('turma')} />
                        </Form.Group>
                        <div className='text-center'>

                        <Button variant="success" onClick={handleSubmit(salvar)}>
                            <AiOutlineCheck className='me-1' /> Salvar
                        </Button>
                        <Link href={'/alunos'} className='ms-2 btn btn-danger'>
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

