import './policy.scss';
import SocialPanel from '../../../components/socialpanel';
import Footer from '../../../components/footer';
import Header from '../../../components/header';

const Policy = () => {
  return (
    <>
    <div className='policy-container'>
      <Header/>
        <div className='h-container'>
            <h2 className='p-header'>Privacy Policy</h2>
        </div>
        <div className='policy-description'>
            <div className='description-container'>
            <p className='content'>
            Being a landlord is great! Until you need to find a new tenant or deal with a faulty AC on your own.
            </p >
            <p >
            We’ll take care of it. From marketing your home and collecting rent to carrying out maintenance – and everything in between – our comprehensive property management service gives you total peace of mind.
            </p>
            <p>
            What’s more, our goal is to ensure maximum return on your investment. In addition to providing you with a hassle-free experience, we make it our business to maintain a high occupancy rate.
            </p>
            <p>
            Whether you own a single unit or an entire building, let us manage your property while you reap the rewards.
            </p>
            <p>
            Being a landlord is great! Until you need to find a new tenant or deal with a faulty AC on your own.
            </p>
            <p>
            We’ll take care of it. From marketing your home and collecting rent to carrying out maintenance – and everything in between – our comprehensive property management service gives you total peace of mind.
            </p>
            <p>
            What’s more, our goal is to ensure maximum return on your investment. In addition to providing you with a hassle-free experience, we make it our business to maintain a high occupancy rate.
            </p>
             <p>
            Whether you own a single unit or an entire building, let us manage your property while you reap the rewards.
            </p>
            </div>


        </div>
        <SocialPanel/>
        <Footer/>
    </div>
    </>
  )
}

export default Policy