import "./neighbourhood.scss";

import Footer from "../../../components/footer";
import Header from "../../../components/header";
import NewHome from "../../../components/newhome/english/NewHome";
import BasicButton from "../../../components/button/BasicButton";
const neighbourhood = [
  // {
  //   id: 1,
  //   name: "Dubai",
  //   image: "/assets/image/neigh.jpg",
  // },
  // {
  //   id: 2,
  //   name: "Pollachi",
  //   image: "/assets/image/neigh.jpg",
  // },
  // {
  //   id: 3,
  //   name: "thiruppathi",
  //   image: "/assets/image/neigh.jpg",
  // },
];
const NeighborHood = () => {
  return (
    <div className="neighbourhood">
      <NewHome />
      <div className="main-container">
        <h1 className="heading">Famous Neighbourhood</h1>
        <h1 className="subheading">3472 Properties Found</h1>
        <div className="card-div">
          {neighbourhood.map((item, i) => (
            <Card item={item} i={i} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

///////////////////

const Card = ({ item, i }) => {
  return (
    <div className="card" key={i}>
      {/* <img src={item.image} className="image-class" /> */}
      <div
        style={{
          backgroundImage: `url(${item.image})`,
        }}
        className="image-div"
      >
        <div className="text-div">
          <h2 className="neigh-name"> {item.name} </h2>
        </div>
      </div>
      <div className="button-div">
        <BasicButton customClass="btn-1">BUY</BasicButton>
        <BasicButton customClass="btn-2">RENT</BasicButton>
      </div>
    </div>
  );
};
/////////////////
export default NeighborHood;
