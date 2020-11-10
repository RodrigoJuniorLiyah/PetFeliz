import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import icone from './icone.png';

import "./styles.css";

const libraries = ["places"];
const mapContainerStyle = {
  height: "inherit",
  width: "inherit",
};

const center = {
  lat: -19.936497,
  lng: -44.029291,
};

const options = {
  styles: mapStyles, // SNAZZY MAPS
  disableDefaultUI: true,
  zoomControl: true,
  streetViewControl: true,
};

const mapLink =
`https://www.google.com/maps/dir/?api=1&destination=-19.936497,-44.029291`;

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [selected, setSelected] = React.useState(null); // o React serve pra chamar o useState sem importa-lo

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className="searchMap">
      <h1>
        PetFeliz{" "}
        <span role="img" aria-label="paw">
          🐾
        </span>
      </h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={options}
      >
        <Marker
          position={{ lat: -19.936467, lng: -44.029362 }}
          icon={{
            url: `${icone}`,
            scaledSize: new window.google.maps.Size(60, 60),
          }}
          onClick={() => {
            setSelected(true);
          }}
        >
          {selected ? (
            <InfoWindow
              className="infoMap"
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <p>
                  Avenida Sete, número 245 próximo a<br />
                  passarela da estação do metrô
                  <br />
                  eldorado - Conj. Agua Branca,
                  <br />
                  Contagem - MG, 32370-150
                  <br />
                  <a href={mapLink} target="_blank" rel="noopener noreferrer">
                    Clique aqui para gerar sua rota
                  </a>
                </p>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      </GoogleMap>
    </div>
  );
}

/* 
  lat: -19.936467, 
  lng: -44.029362,
*/
