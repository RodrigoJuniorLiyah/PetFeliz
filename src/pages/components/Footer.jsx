import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

import '../../styles/components/footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="insta">
        <a href="https://www.instagram.com/petfeliz_pet_shop/">
          <AiFillInstagram className="instaIcon" />
          acesse nosso instagram
        </a>
      </div>
      <div className="face">
        <a href="https://www.facebook.com/petshoppetfeliz.bh/">
          <AiFillFacebook className="faceIcon" />
          acesse nosso Facebook
        </a>
      </div>
      <p>&copy; PetShopPetFeliz</p>
    </div>
  );
}
