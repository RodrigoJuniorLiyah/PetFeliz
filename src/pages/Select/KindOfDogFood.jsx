import React from "react";
import { searchDogRations } from "../components/imagesRation";

import "../../styles/components/inputRation.css";

export default function kindOfDogFood(props) {
  function handleDogFood() {
    if (props.valor === "dog" && props.type === "filhote") {
      return (
        <div className="feedImages">
          <div id="typeOne" className="quatreeGourmetFStyles">
            <img src={searchDogRations.quatreeGourmetF} alt="ração filhote" />
            <div className="infoProduct QuatreeGourmetFInfo">
              <p>
                {" "}
                <strong className="strongQuatreeFStyles">Sobre: </strong>
                <span>
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
                <strong className="strongQuatreeFStyles">preço:</strong>{" "}
              </p>
            </div>
          </div>
          <div id="typeTwo" className="proplanFRPStyles">
            <img src={searchDogRations.proplanFRP} alt="ração filhote" />
            <div className="infoProduct ProplanFRPInfo">
              <p>
                {" "}
                <strong className="strongProplanFRPStyles">Sobre: </strong>
                <span>
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
                <strong className="strongProplanFRPStyles">preço:</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      );
    } else if (props.valor === "dog" && props.type === "pequeno") {
      return (
        <div className="feedImages">
          <div id="typeOne" className="dogChowRPCarneStyles">
            <img
              src={searchDogRations.dogChowRPCarne}
              alt="ração porte pequeno"
              className="dogChowImg"
            />
            <div className="infoProduct DogChowRPCarneInfo">
              <p>
                {" "}
                <strong className="strongDogChowRPCarneStyles">Sobre: </strong>
                <span>
                  Ração Purina® Dog Chow® Saúde Visível para Cães Adultos de
                  tamanhos minis e pequenos é um alimento 100% completo e
                  balanceado, ideal para a saúde do coração do seu pet. Com
                  formatos menores para fácil mastigação, foi elaborado com
                  proteínas de alta qualidade, fibras naturais, antioxidantes e
                  cálcio. Essa nova fórmula também contém prebiótico natural,
                  que equilibra a flora intestinal.
                </span>
              </p>
              <p>
                {" "}
                <strong className="strongDogChowRPCarneStyles">
                  preço:
                </strong>{" "}
              </p>
            </div>
          </div>
          <div id="typeTwo" className="quatreeSupremeRPStyles">
            <img
              src={searchDogRations.quatreeSupremeRP}
              alt="ração porte pequeno"
            />
            <div className="infoProduct QuatreeSupremeRPInfo">
              <p>
                {" "}
                <strong className="strongQuatreeSupremeRPStyles">
                  Sobre:{" "}
                </strong>
                <span>
                  Ração Purina® Dog Chow® Saúde Visível para Cães Adultos de
                  tamanhos minis e pequenos é um alimento 100% completo e
                  balanceado, ideal para a saúde do coração do seu pet. Com
                  formatos menores para fácil mastigação, foi elaborado com
                  proteínas de alta qualidade, fibras naturais, antioxidantes e
                  cálcio. Essa nova fórmula também contém prebiótico natural,
                  que equilibra a flora intestinal.
                </span>
              </p>
              <p>
                {" "}
                <strong className="strongQuatreeSupremeRPStyles">
                  preço:
                </strong>{" "}
              </p>
            </div>
          </div>
        </div>
      );
    } else if (props.valor === "dog" && props.type === "medio") {
      return (
        <div className="feedImages">
          <div id="typeOne" className="quatreeGourmetStyles">
            <img
              src={searchDogRations.quatreeGourmet}
              alt="ração porte medio"
            />
            <div className="infoProduct QuatreeGourmetInfo">
              <p>
                {" "}
                <strong className="strongQuatreeGourmetStyles">Sobre: </strong>
                <span>
                  Quatree Gourmet Adultos Raças Médias e Grandes é um alimento
                  elaborado com matérias-primas selecionadas que proporciona uma
                  nutrição completa e balanceada para o seu cão. Possui polpa de
                  beterraba e prebiótico (MOS) para um ótimo equilíbrio
                  intestinal, e extrato de yucca, que auxilia na redução do odor
                  das fezes. Formulado com proteínas de alta digestibilidade
                  para oferecer condição corporal ideal, mantendo seu cão
                  saudável e em ótima forma física.
                </span>
              </p>
              <p>
                {" "}
                <strong className="strongQuatreeGourmetStyles">
                  preço:
                </strong>{" "}
              </p>
            </div>
          </div>
          <div id="typeTwo" className="proplanRMStyles">
            <img src={searchDogRations.proplanRM} alt="ração porte pequeno" />
            <div className="infoProduct ProplanRMInfo">
              <p>
                {" "}
                <strong className="strongProplanRMStyles">Sobre: </strong>
                <span>
                  PURINA® PRO PLAN® Adultos tem carne fresca como primeiro
                  ingrediente. Possui a tecnologia OptiStart®, que contém uma
                  mistura de ingredientes como levedura natural e fibra de trigo
                  integral, fontes de β-glucanos e aleurona, e uma combinação de
                  ácidos graxos Ômega, que reforçam os sistemas naturais de
                  proteção e otimizam o funcionamento do trato digestivo.
                  Formulado com a tecnologia “Tartar Control”, uma mistura
                  mineral que auxilia a reduzir o acúmulo de tártaro, ajudando
                  cães de pequeno porte a manter seus dentes limpos, saudáveis e
                  fortes.
                </span>
              </p>
              <p>
                {" "}
                <strong className="strongProplanRMStyles">preço:</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      );
    } else if (props.valor === "dog" && props.type === "grande") {
      return (
        <div className="feedImages">
          <div id="typeOne" className="thorRGStyles">
            <img src={searchDogRations.thorRG} alt="ração porte grande" />
            <div className="infoProduct ThorRGInfo">
              <p>
                {" "}
                <strong className="strongThorStyles">Sobre: </strong>
                <span>
                  Thor Adulto é um alimento Premium da Matsuda Pet, sem corantes
                  artificiais no sabor carne. Elaborado com ingredientes de
                  qualidade conta com modernas técnicas de nutrição animal para
                  atender às necessidades do seu cão. Utiliza matéria prima de
                  qualidade em sua formulação, passando por um bom processamento
                  conferindo um produto de qualidade para deixar o seu amigo
                  forte, saudável e com muita energia.
                </span>
              </p>
              <p>
                {" "}
                <strong className="strongThorStyles">preço:</strong>{" "}
              </p>
            </div>
          </div>
          <div id="typeTwo" className="quatreegourmetSemCoranteStyles">
            <img
              src={searchDogRations.quatreegourmetSemCorante}
              alt="ração porte grande"
            />
            <div className="infoProduct QuatreegourmetSemCoranteInfo">
              <p>
                {" "}
                <strong className="strongQuatreeStyles">Sobre: </strong>
                <span>
                  Quatree Gourmet Adultos Raças Médias e Grandes Sem Corantes é
                  um alimento elaborado com matérias-primas selecionadas que
                  proporciona uma alimentação completa e balanceada para o seu
                  cão. Possui polpa de beterraba e prebiótico (MOS) para um
                  ótimo equilíbrio intestinal, e extrato de yucca, que auxilia
                  na redução do odor das fezes. Formulado com proteínas de alta
                  digestibilidade para oferecer condição corporal ideal,
                  mantendo seu cão saudável e em ótima forma física.
                </span>
              </p>
              <p>
                {" "}
                <strong className="strongQuatreeStyles">preço:</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      );
    } else if (props.valor === "dog" && props.type === "sevenPlus") {
      return (
        <div className="feedImages">
          <div id="typeOne" className="sevenPlusStyles">
            <img
              src={searchDogRations.proplanRP7Plus}
              alt="ração 7 anos +"
              style={{ width: "23%", marginLeft: "0" }}
              className="sevenPlusImg"
            />
            <div className="infoProduct SevenPlusInfo">
              <p>
                {" "}
                <strong className="strongProplanSevePlusStyles">Sobre: </strong>
                <span>
                  PURINA® PRO PLAN® 7+ é uma ração super premium para cães acima
                  de 7 anos. A inclusão de antioxidantes naturais mais as
                  vitaminas C e E ajudam o cão a fortalecer seu sistema de
                  defesas naturais, para que se mantenha ativo, livre de
                  enfermidades e apto a enfrentar o estresse oxidativo
                  proveniente do envelhecimento de s Formulado com fontes
                  naturais de glicosamina, que ajudam a manter as articulações
                  saudáveis e auxiliam na mobilidade. Contém um proporção
                  equilibrada de proteína e gordura para manter a massa muscular
                  magra e uma combinação com antioxidantes para promover o
                  envelhecimento saudável.
                </span>
              </p>
              <p>
                {" "}
                <strong className="strongProplanSevePlusStyles">
                  preço:
                </strong>{" "}
              </p>
            </div>
          </div>
          <div id="typeTwo" className="quatreeSupremeRPSevenPlusStyles">
            <img src={searchDogRations.quatreeSupremeRPSevenPlus} alt="ração 7 anos +" />
            <div className="infoProduct QuatreeSupremeRPSevenPlusInfo">
              <p>
                {" "}
                <strong className="strongQuatreeSupremeRPSevenPlusStyles">Sobre: </strong>
                <span>
                  Quatree Supreme Sênior +7 Raças Pequenas é um alimento Super
                  Premium formulado especificamente para atender as exigências
                  de cães a partir de 7 anos de vida. Os ingredientes nobres em
                  sua composição oferecem uma nutrição completa e saudável,
                  proporcionando mais longevidade. Possui relação
                  proteína/energia própria para manter músculos fortes e massa
                  corporal ideal, importantes na prevenção das ocorrências da
                  idade avançada. Não contém corantes e aromatizantes
                  artificiais.
                </span>
              </p>
              <p>
                {" "}
                <strong className="strongQuatreeSupremeRPSevenPlusStyles">preço:</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  return <>{handleDogFood()}</>;
}
