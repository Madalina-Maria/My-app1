import * as React from "react";
import { Carousel } from "react-carousel-minimal";
import logo from "../../Poze/logo.png";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import Navbar from "../../components/Navbar";

function Home() {
  const data = [
    {
      image:
        "https://usabilitygeek.com/wp-content/uploads/2019/02/psychology-web-design-00-lead.jpg",
      caption:
        "Îți administrezi ferma mai ușor ca niciodată cu un simplu click",
    },
    {
      image:
        "https://www.sfat.eu/wp-content/uploads/2020/12/9.Submasura-6.3-1.png",
      caption:
        "Vrei să vinzi sau să cumperi ceva în domeniul agriculturii? Le găsești pe toate aici.",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/la-personne-est-entre-deux-choix-29484037.jpg",
      caption: "Nu ești convins încă? Îți oferim: ",
    },
    {
      image:
        "https://medijobs.ro/wp-content/uploads/2019/10/resurse-umane-blog-.png",
      caption:
        "1. Administrare fermă (servicii personale, resurse, servicii oferite oamenilor, evidență angajați, statistici)",
    },
    {
      image:
        "https://agro-tv.ro/wp-content/uploads/2021/02/money-2724241_640.jpg",
      caption:
        "2. Licitații / Oferte (vinzi sau cumperi produse și servicii la cel mai bun preț, în cele mai avantajoase condiții, simplu și rapid)",
    },
    {
      image:
        "https://ecoferma.ro/wp-content/uploads/2020/11/farming-in-hand.jpg",
      caption: "Dacă nu ai un cont, dar vrei unul apasă CREAZĂ CONT.",
    },
    {
      image:
        "https://www.revista-ferma.ro/pictures/imagini-articole/foto-1-tehnologii-agricole_b.jpg",
      caption: "Dacă ai cont doar INREGISTREAZĂ-TE",
    },
    {
      image:
        "https://www.pngkit.com/png/detail/19-198125_youtube-clipart-play-button-transparent-background-youtube-play.png",
      caption: "Dacă tot nu ești convins VIZUALIZEAZĂ FARA CONT",
    },
    {
      image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3493447.jpg",
      caption:
        "Nu știi ce să alegi? Noi suntem aici să te ajutăm. Apasa AJUTOR",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    color: "black",
    paddingBottom: "10px",
  };

  return (
    <div>
      <div>
        <header style={{ marginLeft: "10px", marginTop: "10px" }}>
          <img src={logo} alt="img" width={250} height={200} />
          <Navbar />
        </header>
      </div>
      <div>
        <Carousel
          data={data}
          time={6000}
          width="1200px"
          height="700px"
          captionStyle={captionStyle}
          radius="10px"
          captionPosition="top"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="white"
          slideImageFit="auto"
          style={{
            textAlign: "center",
            maxWidth: "1200px",
            maxHeight: "700px",
            margin: "20px auto",
            marginLeft: "300px",
          }}
        />
      </div>
    </div>
  );
}

export default Home;
