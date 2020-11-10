import React from "react";

import { searchCatRations } from "../components/imagesRation";

export default function KindOfCatFood(props) {
  function handleCatFood() {
    if (props.valor === "cat" && props.type === "filhote") {
      return (
        <div className="feedImages">
          <div id="typeOne" className="hotcatStyles">
            <img src={searchCatRations.hotcat} alt="ração filhote" />
            <div className="infoProduct HotcatInfo">
              <p>
                {" "}
                <strong className="strongHotcatStyles">Sobre: </strong>
                <span>
                  HotCat Mix é um alimento completo que atende todos os
                  requerimentos nutricionais do gato em crescimento e adulto.
                  Rico em proteína animal, gordura animal e vegetal, que são
                  fontes de ômegas 3 e 6. Contém perfeito balanceamento de
                  vitaminas, minerais e os aminoácidos taurina, lisina e
                  metionina, essenciais para uma plena alimentação. Possui os
                  sabores de peixe, carne e frango que seu gato vai adorar.
                </span>
              </p>
              <p>
                {" "}
                <strong className="strongHotcatStyles">preço:</strong>{" "}
              </p>
            </div>
          </div>
          <div id="typeTwo" className="quatreeSupremeFCatStyles">
            <img src={searchCatRations.quatreeSupremeF} alt="ração filhote" />
            <div className="infoProduct QuatreeSupremeFCatInfo">
              <p>
                {" "}
                <strong className="strongQuatreeSupremeFCatStyles">
                  Sobre:{" "}
                </strong>
                <span>
                  Quatree Supreme Gatos Filhotes é um alimento Super Premium
                  formulado especificamente para atender as necessidades
                  nutricionais de gatos filhotes de todas as raças. Elaborado
                  com fontes nobres de proteínas e ingredientes selecionados,
                  garante o crescimento forte e saudável do pequeno felino.
                  Possui equilíbrio de minerais para manter o controle adequado
                  do pH urinário, e é rico em antioxidantes naturais, que dão
                  suporte ao sistema imunológico e proporcionam mais saúde e
                  vitalidade ao filhote. Indicado também para fêmeas a partir da
                  sexta semana de gestação até o desmame total dos filhotes.
                </span>
              </p>
              <p>
                {" "}
                <strong className="strongQuatreeSupremeFCatStyles">
                  preço:
                </strong>{" "}
              </p>
            </div>
          </div>
        </div>
      );
    } else if (props.valor === "cat" && props.type === "adulto") {
      return (
        <div className="feedImages">
          <div id="typeOne" className="quatreeGourmetCatStyles">
            <img
              src={searchCatRations.quatreeGourmetCat}
              alt="ração adulto +"
            />
            <div className="infoProduct QuatreeGourmetCatInfo">
              <p>
                {" "}
                <strong className="strongQuatreeGourmetCatStyles">
                  Sobre:{" "}
                </strong>
                <span>
                  Quatree Gourmet Gatos Adultos Carne é um alimento completo
                  especialmente desenvolvido para garantir o máximo em saúde e
                  vitalidade para o gato adulto. É rico em proteína de alta
                  qualidade e ômegas 3 e 6, ingredientes que proporcionam maior
                  digestibilidade e pelagem bonita e saudável. Quatree Gourmet
                  Gatos Adultos Carne fornece perfeito balanceamento de minerais
                  para a saúde do trato urinário, garantindo maior longevidade.
                  Possui delicioso sabor de carne que seu gato vai adorar.
                </span>
              </p>
              <p>
                {" "}
                <strong className="strongQuatreeGourmetCatStyles">
                  preço:
                </strong>{" "}
              </p>
            </div>
          </div>
          <div id="typeTwo" className="proplanSalmaoCatStyles">
            <img
              src={searchCatRations.proplanSalmao}
              alt="ração adulto plus"
            />
            <div className="infoProduct ProplanSalmaoCatInfo">
              <p>
                {" "}
                <strong className="strongProplanSalmaoCatStyles">
                  Sobre:{" "}
                </strong>
                <span>
                  A PURINA® PRO PLAN® para gatos adultos foi desenvolvida por
                  médicos veterinários, cientistas e nutricionistas com a mais
                  alta tecnologia Nestlé Purina e ingredientes selecionados. Com
                  sabor salmão e arroz, é um alimento completo para gatos de até
                  sete anos, que possui uma formulação com ingredientes que
                  promovem a saúde do animal, além de uma melhor higiene oral e
                  proporciona a saúde do trato urinário.
                </span>
              </p>
              <p>
                {" "}
                <strong className="strongProplanSalmaoCatStyles">
                  preço:
                </strong>{" "}
              </p>
            </div>
          </div>
        </div>
      );
    } else if (props.valor === "cat" && props.type === "castrado") {
      return (
        <div className="feedImages">
          <div id="typeOne" className="proplanCastradoCatStyles">
            <img
              src={searchCatRations.proplanCastrado}
              alt="gatos castrados"
            />
            <div className="infoProduct ProplanCastradoCatInfo">
              <p>
                {" "}
                <strong className="strongProplanCastradoCatStyles">
                  Sobre:{" "}
                </strong>
                <span>
                  A PURINA® PRO PLAN® para gatos castrados foi desenvolvida por
                  médicos veterinários, cientistas e nutricionistas com a mais
                  alta tecnologia Nestlé Purina e ingredientes selecionados. Com
                  sabor salmão, foi feita exclusivamente para gatos que foram
                  castrados e necessitam de maior controle do peso. Isso porque
                  a castração ocasiona mudanças hormonais significativas no
                  animal e o ganho de peso normalmente é maior. Pensando nisso,
                  para manter a estrutura corporal ideal de seu gato, o alimento
                  é composto por proteínas de qualidade e alto teor de fibras
                  naturais, além de níveis moderados de gordura.
                </span>
              </p>
              <p>
                {" "}
                <strong className="strongProplanCastradoCatStyles">
                  preço:
                </strong>{" "}
              </p>
            </div>
          </div>
          <div id="typeTwo" className="quatreeSupremeCastradoCatStyles">
            <img
              src={searchCatRations.quatreeSupremeCastrado}
              alt="gatos castrados"
            />
            <div className="infoProduct QuatreeSupremeCastradoCatInfo">
              <p>
                {" "}
                <strong className="strongQuatreeSupremeCastradoCatStyles">
                  Sobre:{" "}
                </strong>
                <span>
                  Quatree Supreme Gatos Castrados é um alimento Super Premium
                  formulado especificamente para atender as exigências de gatos
                  castrados — de 6 meses de idade a adultos. Indicado também
                  para gatos com baixa atividade física ou que vivem em
                  ambientes internos. Os ingredientes nobres em sua composição
                  oferecem uma nutrição completa e balanceada. Inclui DHA, que
                  auxilia a manutenção da saúde cognitiva e visão. Contém
                  antioxidantes naturais e prebióticos, ingredientes que
                  proporcionam mais vitalidade e longevidade para o seu gato.
                </span>
              </p>
              <p>
                {" "}
                <strong className="strongQuatreeSupremeCastradoCatStyles">
                  preço:
                </strong>{" "}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  return <>{handleCatFood()}</>;
}
