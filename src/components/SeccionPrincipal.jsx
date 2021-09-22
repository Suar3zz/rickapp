import React from "react";
import { Card } from "react-bootstrap";
import Tarjeta from "./Tarjeta";
import "../styles/SeccionPrincipal.module.css";

const infoPersonajes = [
  {
    nombre: "Blim Blam",
    urlImagen: "https://rickandmortyapi.com/api/character/avatar/50.jpeg",
  },
  {
    nombre: "Plumber Rick",
    urlImagen: "https://rickandmortyapi.com/api/character/avatar/267.jpeg",
  },
];

const transformarInfoPersonajes = ({ nombre, urlImagen }) => {
  return <Tarjeta urlImagen={urlImagen} nombrePersonaje={nombre} />;
};

const tarjetas = infoPersonajes.map(transformarInfoPersonajes);

const SeccionPrincipal = () => {
  return (
    <main>
      <div>
        <h1>The Rick and Morty API</h1>
      </div>
      <div className="Tarjetero">
        <infoPersonajes />
      </div>
    </main>
  );
};

export default SeccionPrincipal;
