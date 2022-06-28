import "./categories.scss";
import React from "react";

const categories = [
  {
    id: 1,

    name: "Featured Properties",
    image: "/assets/image/cat1.png",
  },
  {
    id: 2,

    name: "Famous Neighbourhood",
    image: "/assets/image/cat2.png",
  },
  {
    id: 3,

    name: "Luxury Properties",

    image: "/assets/image/cat3.png",
  },
  {
    id: 4,

    name: "Ready To MoveIn",
    image: "/assets/image/cat4.png",
  },
];

function Categories() {
  return (
    <div className="categories">
      {categories.map((item, i) => (
        <div className="image-div">
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
      <div className="image-div" style={{ width: "100%" }}>
        <div
          className="image-class"
          style={{
            backgroundImage: `url('/assets/image/cat5.png')`,
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
