import { Button, Container } from "react-bootstrap";
import Pagina from "../components/Pagina";
import Link from "next/link";
import { ImExit } from 'react-icons/im'
import { MdPageview } from 'react-icons/md'

export default function Home() {
  return (
    <>
      <Pagina>
        <Container>
          <p className="display-4"> Bem vindo ao Suporte Academico</p>
          <nav>
            <div class="list-group">
              <a href="/" class="list-group-item list-group-item-action active h4" aria-current="true">
                Paginas
              </a>
              <a href="/cursos" class="list-group-item list-group-item-action "> Cursos <MdPageview className='me-1' /></a>
              <a href="/disciplinas" class="list-group-item list-group-item-action">Disciplinas <MdPageview className='me-1' /></a>
              <a href="/alunos" class="list-group-item list-group-item-action">Alunos <MdPageview className='me-1' /></a>
              <a href="/professores" class="list-group-item list-group-item-action">Professores <MdPageview className='me-1' /></a>
              <a href="/salas" class="list-group-item list-group-item-action">Salas <MdPageview className='me-1' /></a>
              <a href="/semestre" class="list-group-item list-group-item-action">Semestre <MdPageview className='me-1' /></a>
            </div>
            </nav>
            <Link href={'/professores'} className='btn btn-primary btn-sm m-2'>
              <ImExit className='me-1' />
              Pagina Professores
            </Link>

        </Container>
      </Pagina>
    </>
  )
}