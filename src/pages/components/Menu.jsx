import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";

import logoRappi from "../../assets/icons/rappi.svg";

import "../../styles/components/menu.css";

export default function Menu() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    return (
      <div className="handleToggle">
        <div className="navToggle">
          <Link to="/">Home</Link>
          <Link to="/gallery">Galeria</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contato/">Contato</Link>
        </div>
      </div>
    );
  }

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
      <div className="toggleBox">
        <BsList
          className={toggle ? "toggleIconActive" : "toggleIcon"}
          onClick={() => (!toggle ? setToggle(true) : setToggle(false))}
        />
        {toggle ? handleToggle() : ""}
      </div>
      <div className="rappi">
        <div className="boxRappi">
          <img src={logoRappi} alt="Rappi" />
          <a href="https://www.rappi.com.br/restaurantes/petshop-pet-feliz">
            <p>
              Compre com a gente na Rappi <span>clique aqui</span>{" "}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
