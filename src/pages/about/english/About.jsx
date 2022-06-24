import './about.scss';
import SocialPanel from '../../../components/socialpanel';
import Footer from '../../../components/footer';
import Header from '../../../components/header';

const TeamCard = ({ url, name, position }) => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img className="team-image" src={url} alt="team" />
      </div>
      <div className="card-title">
        <p>{name}</p>
      </div>
      <div className="card-description">
        <p>{position}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-english-container">
      <Header />

      <div className="image-container">
        <h2 className="header">About Us</h2>
        <img
          className="about-image"
          src="/assets/image/about.jpg"
          alt="about us"
        />
      </div>
      <div className="about-properties">
        <h2 className="property-header">About Properties</h2>
        <div className="text-width">
          <p className="properties-1">
            A one stop solution for all your property needs, the ‘UAE Assistant’
            has been disrupting the real estate sector in the UAE in ways never
            imagined before. A comprehensive real estate portal, the ‘UAE
            Assistant’, it has been conceived to provide a seamless, effective,
            intuitive and transparent way to transact properties across the
            country. Available in web and mobile apps, it lets you experience
            the convenience of property management and transactions at the tip
            of your fingers. Designed to address all your property needs it
            revolves around the concept of property management and Real Estate
            Consultancy, with the widest portfolio of properties listed and
            supported by investors and promoters that are names to reckon, in
            the industry. It caters to your needs at any given stage of your
            Real Estate exploration life cycle, with well thought out strategies
            executed through different channels to ensure smooth transitions.
            Our transactions are simple, ethical and are executed in a
            professional-way, ensuring smooth business contracts. We have well
            defined guidelines that help you understand and adhere to the rules
            prevalent in the country, letting you enjoy hassle free transactions
            with all contractual obligations in place. Our reputation stems from
            pampering our customers with meticulous services. Our clients
            qualify for several advantages as they navigate the portal which
            includes the opportunity to be intimated first on the properties as
            they get listed. Besides at every point in advancement we ensure
            that our customers are rewarded well. We have been continuously
            evolving in challenging ourselves with discovering new avenues to
            serve you better. We understand your needs like no other and help
            you in the realization of your dreams. Our information is sourced
            and supported by research, tech, data analysis, automation and
            management expertise making it more organized and reliable with
            enabling our clientelle to capitalize and reap rewards on their
            investment. Explore the UAE Assistant to learn more of the unlimited
            opportunities. Know what it does and why it can’t be done without.
          </p>
        </div>
        <div className="about-properties-2">
          <TeamCard
            className="teamcard"
            url="/assets/image/ashique.jpg"
            name="Ashiq Emiraaz"
            position="Founder & CEO"
          />
          <TeamCard
            url="/assets/image/faisal.jpg"
            name="Faisal Mangat"
            position="Director & Research"
          />
          <TeamCard
            url="/assets/image/ghanim.jpg"
            name="Ghanim Al Muhairi"
            position="Director & Legal Officer"
          />
        </div>
      </div>

      <SocialPanel />
      <Footer />
    </div>
  );
};

export default About;
