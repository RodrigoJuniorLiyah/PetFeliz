import React from "react";

import Select from "../Select";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

import "./styles.css";

import img from "../../assets/img/img1.jpg";

function Home() {
  return (
    <div id="page">
      <Menu />
      <div className="content">
        <section
          className="featured"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${img})`,
          }}
        >
          <div className="input-search">
            <div className="search input-group mb-3">
              <div className="button-search input-group-prepend">
                <button
                  className="btn btn-info"
                  type="button"
                  id="button-addon1"
                >
                  Pesquisar
                </button>
              </div>
              <input
                type="text"
                className="text-muted form-control"
                placeholder="pesquisar"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              ></input>
            </div>
          </div>
        </section>
        <div className="content-content">
          <div className="content-text">
            <h1>Descubra qual a melhor ração para o seu Pet</h1>
          </div>
          <form className="content-form">
            <Select />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
