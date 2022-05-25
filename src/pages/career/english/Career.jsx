import './career.scss';
import SocialPanel from '../../../components/socialpanel';
import Footer from '../../../components/footer';
import FormCard from '../../../components/formcard';

const Career = () => {
  return <div className="career-container">
  <div className='c-image-container'>
  <h2 className='career-header'>Career</h2>
  <img className='career-image' src="/assets/image/career.jpg" alt ="about us"  />
  <FormCard/>
  </div>
  <div className='career-properties'>
    <h2 className='career-property-header' >About Properties</h2>
    <div className='career-text-width'>
    <p className='c-properties-3'>Being a landlord is great! Until you need to find a new tenant or deal with a faulty AC on your own.</p>
  <p className='c-properties-3'>We’ll take care of it. From marketing your home and collecting rent to carrying out maintenance – and everything in between – our comprehensive property management service gives you total peace of mind.</p>
<p className='c-properties-3'>What’s more, our goal is to ensure maximum return on your investment. In addition to providing you with a hassle-free experience, we make it our business to maintain a high occupancy rate.
</p>
<p className='c-properties-3'>Whether you own a single unit or an entire building, let us manage your property while you reap the rewards.</p>
      
   

    </div>
  </div >
   
  
  <SocialPanel/>
  <Footer/>
  </div>;
};

export default Career;
