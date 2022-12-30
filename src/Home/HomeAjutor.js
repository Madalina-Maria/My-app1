import * as React from 'react'
import './HomeAjutor.css'
import Box from '@mui/material/Box'
import logo from '../Poze/logo.png'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { Stack } from '@mui/system'
import TextField from '@mui/material/TextField'
import EmailIcon from '@mui/icons-material/Email'
import InputAdornment from '@mui/material/InputAdornment'

function HomeAjutor() {
  return (
    <div className='HomeAjutor'>
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
            Opțiunile pe care le aveți sunt:
          </h1>
          <ul
            style={{
              color: 'black',
              marginLeft: '100px',
              marginTop: '25px',
            }}
          >
            <li style={{ marginBottom: '25px' }}>
              <h2>CREARE CONT</h2>
              <h3
                style={{
                  color: 'gray',
                  marginLeft: '50px',
                  marginRight: '30px',
                }}
              >
                <p>
                  În momentul în care ești convins de necesitatea utilizării
                  platformei te sfătuim să-ți creezi un cont. Acest lucru te
                  ajută să îți păstrezi datele în siguranță pentru a-ți fi mai
                  ușor să lucrezi cu ele.
                </p>
                <p>
                  Tot ce trebuie să face este să apeși butonul "CREARE CONT" de
                  mai jos sau de pe pagina principală, să alegi tipul de cont
                  potrivit pentru tine, iar în final să-ți introduci câteva date
                  personale care vor fi păstrate în siguranță. Acest lucru te
                  ajută să te conectezi mult mai usor pe viitor, fără să mai fie
                  nevoie să introduci de fiecare data aceste date.
                </p>
                <p>
                  Odată creat contul te poți bucura de toate beneficiile
                  platformei.
                </p>
                <Stack direction='row' spacing={5}>
                  <p>Pentru a crea un cont apăsați</p>
                  <Button
                    href='http://localhost:3000/register'
                    target={'_self'}
                    variant='outlined'
                    color='warning'
                    fontFamily='sans-serif'
                    size='large'
                    style={{ marginTop: '5px' }}
                  >
                    CREARE CONT
                  </Button>
                </Stack>
              </h3>
            </li>
            <li>
              <h2>ÎNREGISTRARE</h2>
              <h3 style={{ color: 'gray', marginLeft: '50px' }}>
                <p>
                  Pentru a te putea înregistra trebuie să ai cont pe platformă.
                  Nu ai unul? Nicio problemă. Pentru a crea un cont găsești
                  toate detaliile mai sus la secțiunea "CREARE CONT".
                </p>
                <p>
                  Înregistrarea se face foarte ușor. Trebuie să apăsați butonul
                  "ÎNREGISTRARE" de pe pagina principală sau de mai jos, să
                  introduceți datele cerute, în funcție de tipul de cont creat
                  (fermier sau persoană fizică), iar apoi sa apasați butonul
                  "INTRĂ ÎN CONT".
                </p>
                <Stack direction='row' spacing={5}>
                  <p>Pentru a te înregistra apăsați</p>
                  <Button
                    href='http://localhost:3000/login'
                    target={'_self'}
                    variant='outlined'
                    color='warning'
                    fontFamily='sans-serif'
                    size='large'
                    style={{ marginTop: '5px' }}
                  >
                    ÎNREGISTRARE
                  </Button>
                </Stack>
              </h3>
            </li>
            <li>
              <h2>VIZUALIZARE FĂRĂ CONT</h2>
              <h3 style={{ color: 'gray', marginLeft: '50px' }}>
                <p>
                  Dacă nu ești convins că această platformă îți este utilă și nu
                  vrei să îți faci cont venim cu o soluție pentru tine.
                </p>
                <p>
                  Poți vizualiza platforma pentru a vedea ce beneficii îți
                  aduce, dacă îți este utilă sau dacă e ceea ce cauți. În acest
                  mod ai acces la o parte din funcționalitățiile platformei,
                  restul fiind disponibile abia după ce îți creezi cont.
                </p>
                <Stack direction='row' spacing={5}>
                  <p>
                    Pentru a vizualiza platforma apăsați butonul "VIZUALIZARE
                    FĂRĂ CONT" de aici sau de pe pagina principală
                  </p>

                  <Button
                    href='http://localhost:3000/vizualizare'
                    target={'_self'}
                    variant='outlined'
                    color='warning'
                    fontFamily='sans-serif'
                    size='large'
                    style={{ marginTop: '5px' }}
                  >
                    VIZUALIZARE FĂRĂ CONT
                  </Button>
                </Stack>
              </h3>
            </li>
          </ul>
          <Box display={'grid'}>
            <h1
              style={{ marginLeft: '75px', marginTop: '30px', color: 'black' }}
            >
              Aveți alte întrebări? Scrieți-ne un mesaj:
            </h1>
            <TextField
              style={{
                marginLeft: '125px',
                width: '400px',
                marginBottom: '20px',
              }}
              maxWidth={400}
              fontFamily='sans-serif'
              type={'email'}
              variant='outlined'
              placeholder='Emailul Tău'
              autoComplete='email'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <TextField
              style={{
                marginLeft: '125px',
                width: '400px',
                height: '300px',
                marginBottom: '20px',
              }}
              id='outlined-multiline-static'
              multiline
              rows={4}
              maxWidth={400}
              fontFamily='sans-serif'
              type={'text'}
              variant='outlined'
              placeholder='Mesajul'
              autoComplete='mesajul'
            ></TextField>
            <Button
              type='submit'
              style={{
                marginLeft: '180px',
                marginRight: '1300px',
                marginTop: '-180px',
                marginBottom: '150px',
              }}
              sx={{ borderRadius: 1 }}
              variant='contained'
              color='secondary'
              fontFamily='sans-serif'
              size='large'
            >
              Trimite
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  )
}

export default HomeAjutor
