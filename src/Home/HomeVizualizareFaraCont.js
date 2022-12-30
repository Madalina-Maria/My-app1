import * as React from 'react'
import './HomeVizualizareFaraCont.css'
import Box from '@mui/material/Box'
import logo from '../Poze/logo.png'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import HelpIcon from '@mui/icons-material/Help'

function HomeVizualizareFaraCont() {
  return (
    <div className='vizualizare'>
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
              Vizualizare Fără Cont
            </h1>
            <Button
              href='http://localhost:3000/vizualizare/ajutor'
              target={'_blank'}
              variant='outlined'
              color='success'
              size='large'
              startIcon={<HelpIcon />}
              style={{
                marginTop: '-100px',
                marginBottom: '60px',
                marginLeft: '1570px',
                marginRight: '5px',
              }}
            >
              Ajutor
            </Button>
          </AppBar>
        </header>
        <Box marginTop={20}>
          <h1 style={{ marginLeft: '75px', marginTop: '50px', color: 'black' }}>
            Vă rugăm să selectați o opțiune de vizualizare
          </h1>
          <ul
            style={{
              color: 'gray',
              marginLeft: '100px',
              marginTop: '30px',
            }}
          >
            <li style={{ marginBottom: '30px' }}>
              <Button
                href='http://localhost:3000/vizualizare/fermier'
                target={'_blank'}
                variant='outlined'
                color='error'
                size='large'
              >
                FERMIER / PERSOANĂ JURIDICĂ
              </Button>
            </li>
            <li>
              <Button
                href='http://localhost:3000/vizualizare/persoana'
                target={'_blank'}
                variant='outlined'
                color='secondary'
                size='large'
              >
                PERSOANĂ FIZICĂ
              </Button>
            </li>
          </ul>
        </Box>
      </form>
    </div>
  )
}

export default HomeVizualizareFaraCont
