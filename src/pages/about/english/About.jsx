import './about.scss';
import SocialPanel from '../../../components/socialpanel';
import Footer from '../../../components/footer';
import Header from '../../../components/header';

const About = () => {
  return <div className="about-english-container">
    <Header/>
  <div className='image-container'>
  <h2 className='header'>About Us</h2>
  <img className='about-image' src="/assets/image/about.jpg" alt ="about us"  />
  </div>
  <div className='about-properties'>
    <h2 className='property-header' >About Properties</h2>
    <div className='text-width'>
    <p className='properties-1' >We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective <br/> nor convinced residence own.</p>
    <p  className='properties-2' >Being a landlord is great! Until you need to find a new tenant or deal with a faulty AC on your own.
Being a landlord is great! Until you need to find a new tenant or deal with a faulty AC on  your own.
Being a landlord is great! Until you need to find a new tenant or deal with a faulty AC on your  own.
</p>

    </div>
  </div >
    <div className='about-properties-2'>
    <p className='properties-3'>Being a landlord is great! Until you need to find a new tenant or deal with a faulty AC on your own.</p>
  <p className='properties-3'>We’ll take care of it. From marketing your home and collecting rent to carrying out maintenance – and everything in between – our comprehensive property management service gives you total peace of mind.</p>
<p className='properties-3'>What’s more, our goal is to ensure maximum return on your investment. In addition to providing you with a hassle-free experience, we make it our business to maintain a high occupancy rate.
</p>
<p className='properties-3'>Whether you own a single unit or an entire building, let us manage your property while you reap the rewards.</p>
      
    </div>
  
  <SocialPanel/>
  <Footer/>
  </div>;
};

export default About;
