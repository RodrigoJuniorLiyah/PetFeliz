import React, { useState } from "react";

import Footer from "../components/Footer";
import Menu from "../components/Menu";
import {
  searchBirthday,
  searchPets,
  searchCakes,
  searchProducts,
} from "../components/images";

import "./styles.css";

function Galeria(props) {
  const [value, setValue] = useState();

  function showImage(e) {
    setValue(e.target.value);
  }

  const changeImagePath = (props, adrImg) => {
    if (props.match.url === "/gallery/") {
      return adrImg.replace("gallery/", "/gallery/");
    }
    return adrImg;
  };

  function showBirthday() {
    const search = searchBirthday.map((arrayImg) =>
      arrayImg.map((adrImg, index) => (
        <div key={index} className="card_img">
          <img
            src={changeImagePath(props, adrImg)}
            alt="img"
            className="small_img"
          />
        </div>
      ))
    );

    return search;
  }

  function showPets() {
    const search = searchPets.map((arrayImg) =>
      arrayImg.map((adrImg, index) => (
        <div key={index} className="card_img">
          <img
            src={changeImagePath(props, adrImg)}
            alt="img pet"
            className="small_img"
          />
        </div>
      ))
    );

    return search;
  }

  function showCakes() {
    const search = searchCakes.map((arrayImg) =>
      arrayImg.map((adrImg, index) => (
        <div key={index} className="card_img">
          <img
            src={changeImagePath(props, adrImg)}
            alt="img"
            className="small_img"
          />
        </div>
      ))
    );

    return search;
  }

  function showProducts() {
    const search = searchProducts.map((arrayImg) =>
      arrayImg.map((adrImg, index) => (
        <div key={index} className="card_img">
          <img
            src={changeImagePath(props, adrImg)}
            alt="img"
            className="small_img"
          />
        </div>
      ))
    );

    return search;
  }

  function showInfoImages() {
    const info = {
      birthday: <div className="row">{showBirthday()}</div>,
      pets: <div className="row">{showPets()}</div>,
      products: <div className="row">{showProducts()}</div>,
      cakes: <div className="row">{showCakes()}</div>,
      undefined: <div className="row">{showBirthday()}</div>,
    };

    return info[value];
  }

  return (
    <div id="page">
      <Menu />
      <div className="content-gallery">
        <div onClick={showImage} className="subMenu">
          <button
            value={"birthday"}
            className={
              value === "birthday" || value === undefined ? "active" : ""
            }
          >
            Aniversário
          </button>
          <button value={"pets"} className={value === "pets" ? "active" : ""}>
            Pets
          </button>
          <button
            value={"products"}
            className={value === "products" ? "active" : ""}
          >
            Produtos
          </button>
          <button value={"cakes"} className={value === "cakes" ? "active" : ""}>
            Bolos Pet
          </button>
        </div>
        <div>{showInfoImages()}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Galeria;
