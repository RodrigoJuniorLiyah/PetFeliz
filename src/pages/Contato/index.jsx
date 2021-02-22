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

          <div className="boxInfo">
              <h3>Contatos</h3>
            </div>

          <main>
            <div>
              <p>
                <strong>
                  <FaWhatsappSquare size={25} color={"#008000"} />
                </strong>
                <span>
                  <a href="tel:+553199420-7614"><strong> (31) </strong>99420-7614</a>
                </span>
              </p>
              <p>
                <strong>
                  <FiPhoneIncoming size={20} />
                </strong>
                <span>
                  <a href="tel:+55312567-2222"><strong> (31) </strong>2567-2222</a>
                </span>
              </p>
            </div>
            <div>
              <p>
                <strong>
                  <AiOutlineMail size={25} color={"#4169e1"} />{" "}
                </strong>
                <a href="mailto:contato@petshoppetfeliz.com.br">contato@petshoppetfeliz.com.br</a>
              </p>
              <p>
                <strong>
                  <FaInstagramSquare size={25} color={"#a52a2a"} />{" "}
                </strong>
                <a href="https://www.instagram.com/petfeliz_pet_shop/">
                  PetfelizPethop
                </a>
              </p>
              <p>
                <strong>
                  <AiFillFacebook size={25} color={"#2f55a4"} />{" "}
                </strong>
                <a href="https://www.facebook.com/petshoppetfeliz.bh">
                  PetFeliz
                </a>
              </p>
            </div>
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
