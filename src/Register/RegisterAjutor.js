import * as React from 'react'
import './RegisterAjutor.css'
import Box from '@mui/material/Box'
import logo from '../Poze/logo.png'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { Stack } from '@mui/system'

function RegisterAjutor() {
  return (
    <div className='RegisterAjutor'>
      <form>
        <header>
          <AppBar
            position='static'
            style={{
              display: 'grid',
              backgroundColor: 'white',
              paddingTop: '10px',
              paddingLeft: '10px',
            }}
          >
            <a href='http://localhost:3000/'>
              <img src={logo} alt='logo' width={200} height={150}></img>
            </a>
            <h1
              style={{
                textAlign: 'center',
                color: 'Black',
                fontSize: '50px',
                marginTop: '-110px',
                fontFamily: 'monospace',
                fontStyle: 'italic',
              }}
            >
              Ajutor
            </h1>
          </AppBar>
        </header>
        <Box>
          <h1 style={{ marginLeft: '75px', marginTop: '50px', color: 'black' }}>
            Opțiunile pe care le aveți pentru a crea un cont sunt:
          </h1>
          <ul
            style={{
              color: 'black',
              marginLeft: '100px',
              marginTop: '25px',
            }}
          >
            <li style={{ marginBottom: '25px' }}>
              <h2>FERMIER / PERSOANĂ JURIDICĂ</h2>
              <h3 style={{ color: 'gray', marginLeft: '50px' }}>
                <p>
                  In sens larg, <i>persoana juridică</i> "reprezintă" o firmă,
                  institutie, asociatie, organizatie, societate comerciala.
                </p>
                <p>
                  Alegeți această variantă pentru a crea un cont dacă dețineți
                  sau sunteți asociat la una dintre tipurile de firme menționate
                  mai jos.
                </p>
                <p>
                  <i>O firmă</i> este un mod de organizare legală prin care se
                  pot desfășura activități comerciale, urmate de plata unor taxe
                  și impozite către stat. Cu alte cuvinte, dacă faci bani de pe
                  urma unor activități pe care le desfășori în mod liber, nu ca
                  angajat, trebuie neaparat să îți înființezi o firmă pentru a
                  lucra legal.
                </p>
                <p>Cele mai cunoscute tipuri de firme sunt: </p>
                <ul>
                  <li>PFA = Persoană fizică autorizată</li>
                  <li>II = Întreprindere individuală</li>
                  <li>IF = Întreprindere familială</li>
                  <li>SRL = Societate cu răspundere limitată</li>
                  <li>SRL-D = Societate cu răspundere limitată - debutant</li>
                  <li>SA = Societate pe acțiuni</li>
                  <li>ONG, Asociații și Fundații = oganizații non-profit</li>
                </ul>
              </h3>
            </li>
            <li>
              <h2>PERSOANĂ FIZICĂ</h2>
              <h3 style={{ color: 'gray', marginLeft: '50px' }}>
                <p>
                  În sens larg, <i>persoana fizică</i> este orice persoana care
                  nu deține niciuna dintre tipurile de firme menționate mai sus.{' '}
                </p>
                <p>
                  Alegeți această variantă de a vă crea cont dacă nu dețineti
                  sau nu sunteși asociat la niciun tip de firmă mentionat mai
                  sus.
                </p>
                <p>
                  <i>Persoana fizica</i> este omul considerat in mod individual,
                  ca membru al societatii, avand calitatea de subiect de drept.
                  Calitatea de subiect de drept este recunoscuta si garantata
                  tuturor persoanelor fizice fara nici o discriminare pe motiv
                  de rasa, nationalitate, sex, religie sau grad de
                  cultura.Persoanele fizice sunt oamenii, membri ai societatii,
                  care apar in raporturile juridice ca entitati proprii si
                  distincte, indiferent ca au calitatea de cetateni sau straini
                  (persoane cu alta cetatenie sau fara cetatenie).
                </p>
              </h3>
            </li>
          </ul>
          <Stack direction='row' spacing={5}>
            <h1
              style={{ marginLeft: '75px', marginTop: '50px', color: 'black' }}
            >
              Pentru a crea un cont apasă{' '}
            </h1>
            <Button
              href='http://localhost:3000/register'
              target={'_self'}
              variant='outlined'
              color='warning'
              fontFamily='sans-serif'
              size='large'
              style={{ marginTop: '55px', marginBottom: '55px' }}
            >
              CREAZĂ CONT
            </Button>
          </Stack>
        </Box>
      </form>
    </div>
  )
}

export default RegisterAjutor
