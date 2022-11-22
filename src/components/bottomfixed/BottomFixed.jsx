import React from "react";
import "./bottomFixed.scss";
import Whatsapp from "../svg/whatsapp";
import Phone from "../svg/phone";
import Mail from "../svg/mailsvg";
import { TITLE } from "../../utils/constants";

function BottomFixed({ property }) {
  return (
    <div className="btm-fixed">
      <div className="service-property-x">
        <div
          className="service-btn-property whatsapp"
          onClick={() =>
            window.open(
              `https://wa.me/+971553011274/?text=Hello ${TITLE}. I’m interested in this property %0a%0aLink: http://propertyassistant.ae/property/${property.id}
              %0a%0aPrice: AED ${property.price}
              %0aLocation: ${property.address.city}
                %0aReference: ${property.id}
                %0a%0aPlease send me more information regards`
            )
          }
        >
          <Whatsapp width="17" height="17" viewBox="0 0 15 15" fill="#2f70ff" />
          WhatsApp
        </div>
        <div
          className="service-btn-property phone"
          onClick={() => window.open("tel:+971553011274", "_blank")}
        >
          <Phone width="17" height="17" viewBox="0 0 15 15" fill="#2f70ff" />
          Phone
        </div>
        <div
          className="service-btn-property email"
          onClick={() =>
            window.open("mailto:hello@propertyassistant.ae", "_blank")
          }
        >
          <Mail width="15" height="15" viewBox="0 0 15 15" fill="#2f70ff" />
          Email
        </div>
      </div>
    </div>
  );
}

export default BottomFixed;
