import "./categories.scss";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,

    name: "Featured Properties",
    page: "featured",
    image: "/assets/image/cat1.png",
  },
  {
    id: 2,

    name: "Famous Neighbourhood",
    page: "neighbourhood",

    image: "/assets/image/cat2.png",
  },
  {
    id: 3,

    name: "Luxury Properties",
    page: "luxury",

    image: "/assets/image/cat3.png",
    onClick: "/luxury-property",
  },
  {
    id: 4,

    name: "Ready To MoveIn",
    page: "readtomove",

    image: "/assets/image/cat4.png",
  },
];

function Categories() {
  let navigate = useNavigate();

  const navigateTo = (page) => {
    navigate(`/listproperty/${page}`);
  };
  return (
    <div className="categories">
      {categories.map((item, i) => (
        <div
          key={i}
          className="image-div"
          onClick={() => navigateTo(item.page)}
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
        onClick={() => navigateTo("offplan")}
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
