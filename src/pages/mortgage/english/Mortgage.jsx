import './mortgage.scss';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import Paragraph from '../../../components/paragraph';
import SocialPanel from '../../../components/socialpanel';
import Footer from '../../../components/footer';
const Mortgage = () => {
  return (
    <div className="mortgage-english">
      <Header />
      <ImageFrame />
      <div className="mortgage-content">
        <p className="mortgage-heading">Your dedicated mortgage advisor.</p>
      </div>
      <Paragraph>
        Mena Mortgage Services (MMS) is an independent mortgage broker, licensed
        by the Department of Economic Development (DED), and has been trading in
        the UAE for the last 10 years. All brokers are fully qualified, with at
        least 5 years' experience, and specialise in mortgages for residents and
        non-residents purchasing property in the UAE.
        <br />
        <br />
        Working with a range of UAE banks, MMS guarantee their clients the most
        suitable mortgage for their individual circumstances. Due to these
        exclusive partnerships, Mena Mortgage Services are able to offer
        cost-effective products to their clients which can only be accessed
        through MMS.
        <br />
        <br />
        Whether you are buying your first property or refinancing your existing
        loan, our experts can help you find the best mortgage offers in Dubai
        and the UAE. Simply fill out the form and we will respond within 24
        hours.
        <br />
        <br />
        Simply fill out the form and we will respond within 24 hours.
      </Paragraph>
      <SocialPanel customClass="mortgage-social-panel" />
      <Footer />
    </div>
  );
};

export default Mortgage;
