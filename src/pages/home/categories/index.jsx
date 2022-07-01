import "./categories.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,

    name: "Featured Properties",
    image: "/assets/image/catn1.jpg",
    onClick: "/neighbourhood",
  },
  {
    id: 2,

    name: "Famous Neighbourhood",
    image: "/assets/image/catn2.jpg",
    onClick: "/neighbourhood",
  },
  {
    id: 3,

    name: "Luxury Properties",

    image: "/assets/image/catn3.jpg",
    onClick: "/luxury-property",
  },
  {
    id: 4,

    name: "Ready To MoveIn",
    image: "/assets/image/catn4.jpg",
    onClick: "/neighbourhood",
  },
];

function Categories() {
  let navigate = useNavigate();

  return (
    <div className="categories">
      {categories.map((item, i) => (
        <div
          key={i}
          className="image-div"
          onClick={() => navigate(item.onClick)}
        >
          <div
            className="image-class"
            key={i}
            style={{
              backgroundImage: `url(${item.image})`,
              width: item.width,
            }}
          >
            <div className="text-div">
              <h2 className="category-name"> {item.name} </h2>
            </div>
          </div>
        </div>
      ))}
      <div
        className="image-div"
        style={{ width: "100%" }}
        onClick={() => navigate("/off-plan")}
      >
        <div
          className="image-class"
          style={{
            backgroundImage: `url('/assets/image/catn5.jpg')`,
          }}
        >
          <div className="text-div">
            <h2 className="category-name">Off Plan Properties </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
