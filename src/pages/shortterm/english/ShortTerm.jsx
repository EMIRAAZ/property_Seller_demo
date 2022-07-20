import './shortterm.scss';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import Paragraph from '../../../components/paragraph';
import SocialPanel from '../../../components/socialpanel';
import Footer from '../../../components/footer';
import Communities from '../communities';
const ShortTerm = () => {
  return (
    <div className="shortterm-english">
      <Header />
      <ImageFrame />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sit
        ipsum lacus faucibus purus. Nec imperdiet quis sit ornare. A volutpat
        odio egestas ultricies vitae mi. Duis nunc quis lacus vel sed est
        accumsan est duis. Sed netus gravida pellentesque integer pretium
        integer phasellus nec. Eget at ac interdum aliquet tortor amet urna,
        nulla. At ultrices vehicula enim leo, faucibus. Justo, vel pellentesque
        pellentesque sit scelerisque. Leo, porta ut tortor, nunc tempor suscipit
        molestie in. Lectus eget malesuada arcu, blandit mi sed mi. Pellentesque
        a adipiscing sed elementum neque senectus ut faucibus tempor.
      </Paragraph>
      <div className="shortterm-list-with-us">
        <p className="heading">Our Communities</p>
        <Communities />
      </div>
      {/* <SocialPanel customClass="shortterm-social-panel" /> */}
      <Footer />
    </div>
  );
};

export default ShortTerm;
