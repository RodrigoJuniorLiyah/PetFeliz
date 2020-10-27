import React from "react";

import { FaInstagramSquare } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { FiPhoneIncoming } from "react-icons/fi";

import Map from "./Map";
import Menu from "../components/Menu";

import imgLogo from "../../assets/img/logo.jpg";

import "./styles.css";

function Contact() {
  return (
    <div id="page">
      <Menu />
      <div id="content-contact">
        <aside>
          <header>
            <img src={imgLogo} alt="Logo" />
            <h2>Selecione a PetFeliz no Mapa</h2>
            <p>
              Estamos esperando sua visita{" "}
              <span role="img" aria-label="emoji">
                😊
              </span>
            </p>
          </header>

          <main>
            <h3>Contatos</h3>
            <p>
              <strong>
                <FaWhatsappSquare size={25} color={"#008000"} />
              </strong>
              <span>
                <strong> (31) </strong>99420-7614
              </span>
            </p>
            <p>
              <strong>
                <FiPhoneIncoming size={20} />
              </strong>
              <span>
                <strong> (31) </strong>2567-2222
              </span>
            </p>
            <p>
              <strong>
                <AiOutlineMail size={25} color={"#4169e1"} />{" "}
              </strong>
              contato@petshoppetfeliz.com.br
            </p>
            <p>
              <strong>
                <FaInstagramSquare size={25} color={"#a52a2a"} />{" "}
              </strong>
              <a href="https://www.instagram.com/petfeliz_pet_shop/">
                petfeliz_pet_shop
              </a>
            </p>
            <p>
              <strong>
                <AiFillFacebook size={25} color={"#2f55a4"} />{" "}
              </strong>
              <a href="https://www.facebook.com/petshoppetfeliz.bh">PetFeliz</a>
            </p>
          </main>

          <footer>
            <strong>Minas Gerais</strong>
            <span>Belo Horizonte</span>
          </footer>
        </aside>

        <Map />
      </div>
      <div className="footer">
        <p>&copy; PetShopPetFeliz</p>
      </div>
    </div>
  );
}

export default Contact;
