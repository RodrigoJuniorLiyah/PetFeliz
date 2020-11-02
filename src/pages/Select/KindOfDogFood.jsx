import React from "react";
import { searchDogRations } from "../components/imagesRation";

export default function kindOfDogFood(props) {
  function handleDogFood() {
    if (props.valor === "dog" && props.type === "filhote") {
      return (
        <div className="feedImages">
          <div id="typeOne" className="typeOneColor">
            <img src={searchDogRations.quatreeGourmetF} alt="ração filhote" />
            <div className="infoProduct">
              <p>
                {" "}
                <strong className="subtitleStrong">Sobre: </strong>
                <span style={{ color: "#822810" }}>
                  Quatree Gourmet é um alimento premium que concentra
                  matérias-primas de alta qualidade para a alimentação
                  balanceada de cães filhotes e adultos de pequeno, médio e
                  grande porte. Em sua fórmula há vitaminas, minerais, ômegas 3
                  e 6, importantes fontes de proteínas, fibras e de energia. Um
                  alimento delicioso, preparado para melhorar a saúde e aumentar
                  a vitalidade dos nossos grandes amigos.
                </span>
              </p>
              <p>
                {" "}
                <strong className="subtitleStrong">preço:</strong>{" "}
              </p>
            </div>
          </div>
          <div
            id="typeTwo"
            style={{
              background: "linear-gradient(329.54deg, #007d75 0%, #363334 80%)",
            }}
          >
            <img
              src={searchDogRations.proplanFRP}
              alt="ração filhote"
              style={{ width: "23%", marginLeft: "0" }}
            />
            <div className="infoProduct">
              <p>
                {" "}
                <strong className="subtitleStrong">Sobre: </strong>
                <span style={{ color: "#fafafa" }}>
                  Contém anticorpos naturais do colostro e proteínas de alta
                  qualidade que prolongam a proteção natural do filhote em seu
                  primeiro ano de formação. Formulado com colostro, contém
                  proteínas do leite de fácil digestão e anticorpos naturais,
                  que promovem o equilíbrio do sistema digestivo para que o
                  filhote consiga absorver mais nutrientes. Fornece ácidos
                  graxos Ômega 3 e 6, vitaminas essenciais e minerais
                  importantes, que ajudam a desenvolver uma pele saudável e uma
                  pelagem espessa que o filhote precisa para a proteção ideal.
                </span>
              </p>
              <p>
                {" "}
                <strong className="subtitleStrong">preço:</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      );
    } else if (props.valor === "dog" && props.type === "pequeno") {
      return (
        <div className="feedImages">
          <div id="typeOne">
            <img
              src={searchDogRations.dogChowRPCarne}
              alt="ração porte pequeno"
              style={{ width: "20%", marginLeft: "0" }}
            />
          </div>
          <div id="typeTwo">
            <img
              src={searchDogRations.quatreeSupremeRP}
              alt="ração porte pequeno"
              style={{ width: "21%", marginLeft: "0" }}
            />
          </div>
        </div>
      );
    } else if (props.valor === "dog" && props.type === "medio") {
      return (
        <div className="feedImages">
          <div id="typeOne">
            <img
              src={searchDogRations.quatreeGourmet}
              alt="ração porte medio"
            />
          </div>
          <div id="typeTwo">
            <img
              src={searchDogRations.proplanRM}
              alt="ração porte pequeno"
              style={{ width: "23%", marginLeft: "0" }}
            />
          </div>
        </div>
      );
    } else if (props.valor === "dog" && props.type === "grande") {
      return (
        <div className="feedImages">
          <div id="typeOne">
            <img src={searchDogRations.thorRG} alt="ração porte grande" />
          </div>
          <div id="typeTwo">
            <img
              src={searchDogRations.quatreegourmetSemCorante}
              alt="ração porte grande"
            />
          </div>
        </div>
      );
    } else if (props.valor === "dog" && props.type === "sevenPlus") {
      return (
        <div className="feedImages">
          <div id="typeOne">
            <img
              src={searchDogRations.proplanRP7Plus}
              alt="ração 7 anos +"
              style={{ width: "23%", marginLeft: "0" }}
            />
          </div>
          <div id="typeTwo">
            <img
              src={searchDogRations.quatreeGourmetF}
              alt="ração 7 anos +"
              style={{ marginLeft: "30px" }}
            />
          </div>
        </div>
      );
    }
  }

  return <>{handleDogFood()}</>;
}
