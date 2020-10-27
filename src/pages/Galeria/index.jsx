import React, { useState } from "react";

import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { searchBirthday, searchPets, searchCakes, searchProducts } from "../components/images";

import "./styles.css";

function Galeria() {
  const [value, setValue] = useState();

  function showImage(e) {
    setValue(e.target.value);
  }

  function showBirthday() {
    const search = searchBirthday.map(arrayImg =>
      arrayImg.map((adrImg, index) => (
        <div key={index} className="card_img">
          <img src={adrImg} alt="img" className="small_img" />
        </div>
      ))
    );

    return search;
  }

  function showPets() {
    const search = searchPets.map(item => {
      return item.map((adrImg, index) => {
        return (
          <div key={index} className="card_img">
            <img src={adrImg} alt="img pet" className="small_img" />
          </div>
        );
      })
    })

    return search
  }
  
  function showCakes() {
    const search = searchCakes.map(item => {
      return item.map((adrImg, index) => {
        return (
          <div key={index} className="card_img">
            <img src={adrImg} alt="img pet" className="small_img" />
          </div>
        );
      })
    })

    return search
  }
  
  function showProducts() {
    const search = searchProducts.map(item => {
      return item.map((adrImg, index) => {
        return (
          <div key={index} className="card_img">
            <img src={adrImg} alt="img pet" className="small_img" />
          </div>
        );
      })
    })

    return search
  }

  function showInfoImages() {
    if (value === "birthday") {
      return (
        <div className="row">
          {showBirthday()}
        </div>
      );
    } else if (value === "pets") {
      return (
        <div className="row">
          {showPets()}
        </div>
      );
    } else if (value === "products") {
      return (
        <div className="row">
          {showProducts()}
        </div>
      );
    } else if (value === "cakes") {
      return (
        <div className="row">
          {showCakes()}
        </div>
      );
    } else {
      return (
        <div className="row">
          {showBirthday()}
        </div>
      );
    }
  }

  return (
    <div id="page">
      <Menu />
      <div className="content-gallery">
        <div onClick={showImage} className="subMenu">
          <button value={"birthday"} className="btnMenu">
            Aniversário
          </button>
          <button value={"pets"} className="btnMenu">
            Pets
          </button>
          <button value={"products"} className="btnMenu">
            Produtos
          </button>
          <button value={"cakes"} className="btnMenu">
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
