import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Academico</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/cursos">Cursos</Nav.Link>
              <Nav.Link href="/disciplinas">Disciplinas</Nav.Link>
              <Nav.Link href="/alunos">alunos</Nav.Link>
              <Nav.Link href="/professores">Professores</Nav.Link>
              <Nav.Link href="/salas">Salas</Nav.Link>
              <Nav.Link href="/semestre">Semestre</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho