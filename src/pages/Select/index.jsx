import React, { useState } from "react";

import KindOfDogFood from "./KindOfDogFood";
import KindofCatFood from "./KindOfCatFood";

import "./styles.css";
import "../../styles/components/inputRation.css";

function Select() {
  const [valor, setValor] = useState();
  const [type, setType] = useState();

  function selectAnimal(e) {
    setValor(e.target.value);
  }

  function selectType(e) {
    setType(e.target.value);
  }

  function handleInputDog() {
    if (type === "pequeno") {
      return type;
    } else if (type === "filhote") {
      return "filhote";
    } else if (type === "medio") {
      return "raças médias";
    } else if (type === "grande") {
      return "raças grandes";
    } else if (type === "sevenPlus") {
      return "7 anos ou mais";
    } else {
      return "Qual o porte do seu cão?";
    }
  }

  function handleInputCat() {
    if (type === "filhote") {
      return type;
    } else if (type === "adulto") {
      return type;
    } else if (type === "castrado") {
      return type;
    } else {
      return "Em qual fase seu gato está?";
    }
  }

  function handleAnimalType() {
    if (valor === "dog") {
      return (
        <select
          className="select-two custom-select custom-select-sm"
          value="DEFAULT"
          onChange={selectType}
          style={{ fontFamily: "Nunito" }}
        >
          <option value="DEFAULT" disabled hidden className="text-muted">
            {handleInputDog()}
          </option>
          <option value="filhote">filhote</option>
          <option value="pequeno">raças pequenas</option>
          <option value="medio">raças médias</option>
          <option value="grande">raças grandes</option>
          <option value="sevenPlus">7 anos ou mais</option>
        </select>
      );
    } else if (valor === "cat") {
      return (
        <select
          className="select-two custom-select custom-select-sm"
          defaultValue={"DEFAULT"}
          onChange={selectType}
          style={{ fontFamily: "Nunito" }}
        >
          <option value="DEFAULT" disabled hidden className="text-muted">
            {handleInputCat()}
          </option>
          <option value="filhote">filhote</option>
          <option value="adulto">adulto</option>
          <option value="castrado">castrado</option>
        </select>
      );
    }
  }

  return (
    <div className="form">
      <select
        className="select-one custom-select custom-select-lg mb-3"
        onChange={selectAnimal}
        defaultValue={"DEFAULT"}
        style={{ fontFamily: "Nunito" }}
      >
        <option value="DEFAULT" disabled hidden className="text-muted">
          Qual é o seu animal?
        </option>
        <option value={"dog"}>Cão</option>
        <option value={"cat"}>Gato</option>
      </select>

      <div className="results">{handleAnimalType()}</div>
      <div className="feed">
        <KindOfDogFood valor={valor} type={type} />
        <KindofCatFood valor={valor} type={type} />
      </div>
    </div>
  );
}

export default Select;
