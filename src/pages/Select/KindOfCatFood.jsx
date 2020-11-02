import React from "react";

import { searchCatRations } from "../components/imagesRation";

export default function KindOfCatFood(props) {
  function handleCatFood() {
    if (props.valor === "cat" && props.type === "filhote") {
      return (
        <div className="feedImages">
          <div id="typeOne">
            <img
              src={searchCatRations.hotcat}
              alt="ração filhote"
              style={{ width: "15%", marginLeft: "20px" }}
            />
          </div>
          <div id="typeTwo">
            <img
              src={searchCatRations.quatreeSupremeF}
              alt="ração filhote"
              style={{ marginLeft: "30px" }}
            />
          </div>
        </div>
      );
    } else if (props.valor === "cat" && props.type === "adulto") {
      return (
        <div className="feedImages">
          <div id="typeOne">
            <img
              src={searchCatRations.quatreeGourmetCat}
              alt="ração adulto +"
              style={{ width: "17%", marginLeft: "30px" }}
            />
          </div>
          <div id="typeTwo">
            <img
              src={searchCatRations.proplanSalmao}
              alt="ração adulto +"
              style={{ width: "21%", marginLeft: "10px" }}
            />
          </div>
        </div>
      );
    } else if (props.valor === "cat" && props.type === "castrado") {
      return (
        <div className="feedImages">
          <div id="typeOne">
            <img
              src={searchCatRations.proplanCastrado}
              alt="gatos castrados"
              style={{ width: "23%", marginLeft: "0" }}
            />
          </div>
          <div id="typeTwo">
            <img
              src={searchCatRations.quatreeSupremeCastrado}
              alt="gatos castrados"
              style={{ marginLeft: "30px" }}
            />
          </div>
        </div>
      );
    }
  }

  return <>{handleCatFood()}</>;
}
