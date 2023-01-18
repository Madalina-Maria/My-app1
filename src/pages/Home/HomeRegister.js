import * as React from "react";
import "./Style.css";
import Box from "@mui/material/Box";
import logo from "../../Poze/logo.png";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import HelpIcon from "@mui/icons-material/Help";

function HomeRegister() {
  return (
    <div className="Register">
      <form>
        <header>
          <AppBar
            position="static"
            style={{
              display: "grid",
              backgroundColor: "white",
              paddingTop: "10px",
              paddingLeft: "10px",
            }}
          >
            <a href="/">
              <img src={logo} alt="logo" width={200} height={150}></img>
            </a>
            <h1
              style={{
                textAlign: "center",
                color: "Black",
                fontSize: "50px",
                marginTop: "-110px",
                fontFamily: "monospace",
                fontStyle: "italic",
              }}
            >
              CREAZĂ CONT
            </h1>
            <Button
              href="/register/ajutor"
              target={"_blank"}
              variant="outlined"
              size="large"
              startIcon={<HelpIcon />}
              style={{
                marginTop: "-100px",
                marginBottom: "60px",
                marginLeft: "1570px",
                marginRight: "5px",
              }}
            >
              Ajutor
            </Button>
          </AppBar>
        </header>
        <Box>
          <h1 style={{ marginLeft: "75px", marginTop: "50px", color: "gray" }}>
            Vă rugăm să selectați o opțiune pentru a crea contul
          </h1>
          <ul
            style={{
              color: "gray",
              marginLeft: "100px",
              marginTop: "25px",
            }}
          >
            <li style={{ marginBottom: "25px" }}>
              <Button
                href="/register/fermier"
                variant="outlined"
                color="success"
                size="large"
              >
                FERMIER / PERSOANĂ JURIDICĂ
              </Button>
            </li>
            <li>
              <Button
                href="/register/persoana"
                variant="outlined"
                color="secondary"
                size="large"
              >
                PERSOANĂ FIZICĂ
              </Button>
            </li>
          </ul>
        </Box>
      </form>
    </div>
  );
}

export default HomeRegister;
