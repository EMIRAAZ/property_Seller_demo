import Footer from "../../../components/footer";
import Header from "../../../components/header";
import "./news.scss";

const News = () => {
  return (
    <div className="news-main-container">
      <Header />

      <div className="container">
        <h1 className="heading">
          Samsung Galaxy F22 hshslaunched in India: Price, features, other
          details
        </h1>
        <div className="category">
          <div className="item-div">
            <h1 className="item">Tech</h1>
          </div>
          <div className="item-div">
            <h1 className="item">Mobile</h1>
          </div>
        </div>
        <h1 className="sub-heading">
          Samsung's next Unpacked event reortedly last August 11
        </h1>
        <img src="/assets/image/blog6.jpg" className="image-div" alt="" />

        <p className="news-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          veritatis minus dolor aspernatur enim velit! Cum voluptates vero
          ducimus molestiae reiciendis animi esse alias nesciunt consectetur,
          nihil architecto sit tempora? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde, enim numquam. Expedita officia iusto quas
          laborum praesentium rem repellat nulla culpa dolores ut, provident
          accusantium. Sint debitis delectus consequuntur doloremque. <br />{" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, illo
          qui eveniet impedit atque dolore, quisquam, iure earum expedita natus
          facilis! Pariatur doloremque nesciunt alias cupiditate dolorum
          voluptate ullam dicta? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quis, aperiam accusamus? Quas voluptatum earum
          repellendus non vitae ut dignissimos eum inventore laborum tenetur.
          Laborum laudantium, adipisci dolor facere cupiditate at?{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default News;
