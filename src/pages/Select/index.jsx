import React, { useState } from "react";
import { searchCatRations, searchDogRations } from '../components/imagesRation';

import "./styles.css";

function Select() {
  const [valor, setValor] = useState();
  const [type, setType] = useState();

  function selectAnimal(e) {
    setValor(e.target.value);
  }

  function selectType(e) {
    setType(e.target.value);
  }

  function handleAnimalType() {
    if (valor === "dog") {
      return (
        <select
          className="select-two custom-select custom-select-sm"
          defaultValue={"DEFAULT"}
          onChange={selectType}
        >
          <option value="DEFAULT" disabled hidden className="text-muted">
            Qual o porte do seu cão?
          </option>
          <option value="filhote">filhote</option>
          <option value="pequeno">raças pequenas</option>
          <option value="medio">raças médias</option>
          <option value="grande">raças grandes</option>
          <option value="sevenPlus">mais de 7 anos</option>
        </select>
      );
    } else if (valor === "cat") {
      return (
        <select
          className="select-two custom-select custom-select-sm"
          defaultValue={"DEFAULT"}
          onChange={selectType}
        >
          <option value="DEFAULT" disabled hidden className="text-muted">
            Em qual fase seu gato está
          </option>
          <option value="filhote">filhote</option>
          <option value="adulto">adulto</option>
          <option value="castrado">castrado</option>
        </select>
      );
    }
  }

  function handleFeedType() {
    if(valor === 'dog' && type === 'filhote') {
      return (
        <div className="feedImages">
          <div className="typeOne">
            <img src={searchDogRations.quatreeGourmetF} alt="ração filhote" />
          </div>
          <div className="typeTwo">
            <img src={searchDogRations.proplanFRP} alt="ração filhote" style={{width: '23%', marginLeft: '0'}} />
          </div>
        </div>
      );
    } else if (valor === 'dog' && type === "pequeno") {
      return (
        <div className="feedImages">
          <div className="typeOne">
            <img src={searchDogRations.dogChowRPCarne} alt="ração porte pequeno" style={{width: '20%', marginLeft: '0'}} />
          </div>
          <div className="typeTwo">
            <img src={searchDogRations.quatreeSupremeRP} alt="ração porte pequeno" style={{width: '23%', marginLeft: '0'}} />
          </div>
        </div>
      );
    } else if (valor === 'dog' && type === "medio") {
      return (
        <div className="feedImages">
          <div className="typeOne">
            <img src={searchDogRations.quatreeGourmet} alt="ração porte medio"/>
          </div>
          <div className="typeTwo">
            <img src={searchDogRations.proplanRM} alt="ração porte pequeno" style={{width: '23%', marginLeft: '0'}} />
          </div>
        </div>
      );
    } else if (valor === 'dog' && type === "grande") {
      return (
        <div className="feedImages">
          <div className="typeOne">
            <img src={searchDogRations.thorRG} alt="ração porte grande"/>
          </div>
          <div className="typeTwo">
            <img src={searchDogRations.quatreegourmetSemCorante} alt="ração porte grande" />
          </div>
        </div>
      );
    } else if (valor === 'dog' && type === "sevenPlus") {
      return (
        <div className="feedImages">
          <div className="typeOne">
            <img src={searchDogRations.proplanRP7Plus} alt="ração 7 anos +" style={{width: '23%', marginLeft: '0'}} />
          </div>
          <div className="typeTwo">
            <img src={searchDogRations.quatreeGourmetF} alt="ração 7 anos +" style={{marginLeft: '30px'}} />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="form">
      <select
        className="select-one custom-select custom-select-lg mb-3"
        onChange={selectAnimal}
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled hidden className="text-muted">
          Qual é o seu animal?
        </option>
        <option value={"dog"}>Cão</option>
        <option value={"cat"}>Gato</option>
      </select>

      <div className="results">{handleAnimalType()}</div>
      <div className="feed">{handleFeedType()}</div>
    </div>
  );
}

export default Select;
