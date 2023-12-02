import './about.scss';
import Footer from '../../../components/footer';
import Header from '../../../components/header';
import { MoveToTop } from '../../../components/movetotop';
import FooterNew from '../../../components/footerNew';

const TeamCard = ({ url, name, position }) => {
  return (
    <div className="about-card-container">
      <img className="team-image" src={url} alt="team" />
      <div className="about-card-detail">
        <p className="card-title">{name}</p>
        <p className="card-description">{position}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-english-container">
      <Header customClass="about-header-class" />
      <div className="about-properties">
        <div className="about-container">
          <h2 className="property-header">About Us.</h2>
          <p className="properties-description">
            <p>
              A one stop solution for all your property needs, the ‘Property
              Seller’ has been disrupting the real estate sector in the UAE
              in ways never imagined before. A comprehensive real estate portal,
              the ‘Property Seller’, it has been conceived to provide a
              seamless, effective, intuitive and transparent way to transact
              properties across the country.
            </p>
            <p>
              Available in web and mobile apps, it lets you experience the
              convenience of property management and transactions at the tip of
              your fingers. Designed to address all your property needs it
              revolves around the concept of property management and Real Estate
              Consultancy, with the widest portfolio of properties listed and
              supported by investors and promoters that are names to reckon, in
              the industry.
            </p>
            <p>
              It caters to your needs at any given stage of your Real Estate
              exploration life cycle, with well thought out strategies executed
              through different channels to ensure smooth transitions. Our
              transactions are simple, ethical and are executed in a
              professional-way, ensuring smooth business contracts. We have well
              defined guidelines that help you understand and adhere to the
              rules prevalent in the country, letting you enjoy hassle free
              transactions with all contractual obligations in place.
            </p>
            <p>
              Our reputation stems from pampering our customers with meticulous
              services. Our clients qualify for several advantages as they
              navigate the portal which includes the opportunity to be intimated
              first on the properties as they get listed. Besides at every point
              in advancement we ensure that our customers are rewarded well. We
              have been continuously evolving in challenging ourselves with
              discovering new avenues to serve you better.
            </p>
            <p>
              We understand your needs like no other and help you in the
              realization of your dreams. Our information is sourced and
              supported by research, tech, data analysis, automation and
              management expertise making it more organized and reliable with
              enabling our clientelle to capitalize and reap rewards on their
              investment. Explore the Property Seller to learn more of the
              unlimited opportunities. Know what it does and why it can’t be
              done without.
            </p>
          </p>
          {/* <div className="about-properties-img">
            <TeamCard
              className="teamcard"
              url="/assets/image/ashique.jpg"
              name="Ashiq Emiraaz"
              position="Founder & CEO"
            />

            <TeamCard
              url="/assets/image/ghanim.jpg"
              name="Ghanim Al Muhairi"
              position="Director & Legal Officer"
            />

            <TeamCard
              url="/assets/image/faisal.jpg"
              name="Faisal Mangat"
              position="Director & Research"
            />
          </div> */}
        </div>
      </div>
      <MoveToTop />
      <FooterNew />
    </div>
  );
};

export default About;
