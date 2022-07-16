import './terms.scss';
import SocialPanel from '../../../components/socialpanel';
import Footer from '../../../components/footer';
import Header from '../../../components/header';

const Terms = () => {
  return (
    <>
      <div className="terms-container">
        <Header />
        <div className="h-container">
          <h2 className="p-header">Terms And Conditions</h2>
          <h3 className="p2-header">Last updated on 1-12-2021</h3>
        </div>
        <div className="terms-container-inside">
          <h3>2.Clause 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            condimentum eget purus in. Consectetur eget id morbi amet amet, in.
            Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean
            leo pharetra in sit semper et. Amet quam placerat sem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            condimentum eget purus in. Consectetur eget id morbi amet amet, in.
            Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean
            leo pharetra in sit semper et. Amet quam placerat sem.
          </p>
          <h3>3.Clause 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            condimentum eget purus in. Consectetur eget id morbi amet amet, in.
            Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean
            leo pharetra in sit semper et. Amet quam placerat sem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            condimentum eget purus in. Consectetur eget id morbi amet amet, in.
            Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean
            leo pharetra in sit semper et. Amet quam placerat sem.
          </p>
        </div>
        <SocialPanel />
        <Footer />
      </div>
    </>
  );
};

export default Terms;
