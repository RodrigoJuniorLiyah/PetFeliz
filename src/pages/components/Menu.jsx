import React from "react";
import { Link } from "react-router-dom";

import logoRappi from "../../assets/icons/rappi.svg";

import '../../styles/components/menu.css';

export default function Menu() {
  return (
    <div className="menu">
      <div className="logo">
        <h1>PetFeliz</h1>
      </div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/gallery">Galeria</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contato/">Contato</Link>
      </div>
      <div className="rappi">
        <a href="https://www.rappi.com.br/restaurantes/petshop-pet-feliz">
          <div className="boxRappi">
            <img src={logoRappi} alt="Rappi" />
            <p>
              Compre com a gente na Rappi <span>clique aqui</span>{" "}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
