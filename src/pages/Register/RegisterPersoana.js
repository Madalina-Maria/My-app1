import * as React from "react";
import "./Style.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import ShieldIcon from "@mui/icons-material/Shield";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import PersonIcon from "@mui/icons-material/Person";
import CakeIcon from "@mui/icons-material/Cake";
import PlaceIcon from "@mui/icons-material/Place";
import SignpostIcon from "@mui/icons-material/Signpost";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PhoneIcon from "@mui/icons-material/Phone";
import PublicIcon from "@mui/icons-material/Public";
import { Stack } from "@mui/system";

function RegisterPersoana() {
  return (
    <div className="fundal">
      <div>
        <form>
          <Box
            className="fundalBox"
            display={"grid"}
            gridDirection={"column"}
            maxWidth={650}
            alignItems="center"
            justifyContent={"center"}
            margin={"auto"}
            padding={5}
            borderRadius={10}
            boxShadow={"10px 10px 10px 15px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 15px #dd33fa",
              },
            }}
          >
            <Typography
              variant="h4"
              padding={3}
              textAlign="center"
              fontFamily="sans-serif"
              fontStyle="oblique"
            >
              CREARE CONT
            </Typography>

            <Typography variant="h6" textAlign="center" fontFamily="sans-serif">
              Ne bucurăm că ai ales să îți creezi un cont! Odată creat contul,
              te poți bucura de toate beneficiile platformei. Te rugăm să-ți
              introduci datele mai jos:
            </Typography>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="baseline"
              spacing={1}
            >
              <TextField
                maxWidth={10}
                fontFamily="sans-serif"
                margin="normal"
                type={"text"}
                variant="outlined"
                placeholder="Nume"
                autoComplete="nume"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                maxWidth={50}
                fontFamily="sans-serif"
                margin="normal"
                type={"text"}
                variant="outlined"
                placeholder="Prenume"
                autoComplete="prenume"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                maxWidth={50}
                fontFamily="sans-serif"
                margin="normal"
                type={"date"}
                variant="outlined"
                placeholder="Data nașterii"
                autoComplete="data nasterii"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CakeIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Stack>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="baseline"
              spacing={1}
            >
              <TextField
                maxWidth={50}
                fontFamily="sans-serif"
                margin="normal"
                type={"number"}
                variant="outlined"
                placeholder="Număr"
                autoComplete="numar"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                maxWidth={50}
                fontFamily="sans-serif"
                margin="normal"
                type={"text"}
                variant="outlined"
                placeholder="Stradă"
                autoComplete="strada"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SignpostIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                maxWidth={50}
                fontFamily="sans-serif"
                margin="normal"
                type={"text"}
                variant="outlined"
                placeholder="Localitate"
                autoComplete="localitate"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PlaceIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Stack>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="baseline"
              spacing={1}
            >
              <TextField
                maxWidth={50}
                fontFamily="sans-serif"
                margin="normal"
                type={"text"}
                variant="outlined"
                placeholder="Județ"
                autoComplete="judet"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationCityIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>

              <TextField
                maxWidth={50}
                fontFamily="sans-serif"
                margin="normal"
                type={"text"}
                variant="outlined"
                placeholder="Țara"
                autoComplete="tara"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PublicIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Stack>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="baseline"
              spacing={1}
            >
              <TextField
                maxWidth={50}
                fontFamily="sans-serif"
                margin="normal"
                type={"text"}
                variant="outlined"
                placeholder="CNP"
                autoComplete="cnp"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ShieldIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>

              <TextField
                maxWidth={50}
                fontFamily="sans-serif"
                margin="normal"
                type={"tel"}
                variant="outlined"
                placeholder="Număr de telefon"
                autoComplete="nr telefon"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Stack>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="baseline"
              spacing={1}
            >
              <TextField
                maxWidth={50}
                fontFamily="sans-serif"
                margin="normal"
                type={"email"}
                variant="outlined"
                placeholder="Email"
                autoComplete="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>

              <TextField
                maxWidth={50}
                fontFamily="sans-serif"
                margin="normal"
                type={"password"}
                variant="outlined"
                placeholder="Parola"
                autoComplete="current-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>

              <TextField
                maxWidth={50}
                fontFamily="sans-serif"
                margin="normal"
                type={"password"}
                variant="outlined"
                placeholder="Confirmare parolă"
                autoComplete="confirmare parola"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Stack>

            <Button
              type="submit"
              sx={{ marginTop: 3, borderRadius: 1 }}
              variant="contained"
              color="secondary"
              fontFamily="sans-serif"
              size="large"
            >
              CREARE
            </Button>

            <Typography
              paddingTop={3}
              marginBottom={3}
              fontFamily="sans-serif"
              fontSize={16}
              textAlign="center"
            >
              ______ sau ______{" "}
            </Typography>

            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              color={"error"}
              size="large"
            >
              Continuă cu Google
            </Button>

            <br></br>

            <Button
              variant="outlined"
              startIcon={<FacebookIcon />}
              size="large"
            >
              Continuă cu Facebook
            </Button>

            <Typography
              paddingTop={5}
              fontFamily="sans-serif"
              fontSize={18}
              textAlign="center"
            >
              Ai deja un cont?
            </Typography>

            <Button
              href="/login/persoana"
              target={"_blank"}
              variant="outlined"
              color="warning"
              sx={{ marginTop: 3, borderRadius: 1 }}
              fontFamily="sans-serif"
              size="large"
            >
              ÎNREGISTREAZĂ-TE
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default RegisterPersoana;
