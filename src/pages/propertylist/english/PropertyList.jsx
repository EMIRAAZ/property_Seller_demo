import './propertylist.scss';
import SocialPanel from '../../../components/socialpanel';
import Footer from '../../../components/footer';
import MoveToTopComponent from '../../../components/movetotop';
import Header from '../../../components/header';

const PropertyList = () => {
  return (
    <div className="property-list-english-container">
      <Header />
      <div className="property-list-image-container">
        <h2 className="property-header">list your properties with us</h2>
        <img
          className="property-image"
          src="/assets/image/propertylist.jpg"
          alt="propertylist"
        />
      </div>
      <div className="property-list-properties">
        <div className="property-text-width">
          <p className="list-properties-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sit ipsum lacus faucibus purus. Nec imperdiet quis sit ornare. A
            volutpat odio egestas ultricies vitae mi. Duis nunc quis lacus vel
            sed est accumsan est duis. Sed netus gravida pellentesque integer
            pretium integer phasellus nec. Eget at ac interdum aliquet tortor
            amet urna, nulla. At ultrices vehicula enim leo, faucibus. Justo,
            vel pellentesque pellentesque sit scelerisque. Leo, porta ut tortor,
            nunc tempor suscipit molestie in. Lectus eget malesuada arcu,
            blandit mi sed mi. Pellentesque a adipiscing sed elementum neque
            senectus ut faucibus tempor.
          </p>
        </div>
      </div>
      <div className="property-list-properties-2">
        <div className="property-text-width">
          <h2 className="property-div-header">Why list with us?</h2>
          <p className="list-properties-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sit ipsum lacus faucibus purus. Nec imperdiet quis sit ornare. A
            volutpat odio egestas ultricies vitae mi. Duis nunc quis lacus vel
            sed est accumsan est duis. Sed netus gravida pellentesque integer
            pretium integer phasellus nec. Eget at ac interdum aliquet tortor
            amet urna, nulla. At ultrices vehicula enim leo, faucibus. Justo,
            vel pellentesque pellentesque sit scelerisque. Leo, porta ut tortor,
            nunc tempor suscipit molestie in. Lectus eget malesuada arcu,
            blandit mi sed mi. Pellentesque a adipiscing sed elementum neque
            senectus ut faucibus tempor.
          </p>
        </div>
      </div>

      {/* <SocialPanel /> */}
      <MoveToTopComponent />
      <Footer />
    </div>
  );
};

export default PropertyList;
