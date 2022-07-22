import React from 'react';
import './aboutfounder.scss';
import Socialpanel from '../../../components/socialpanel';
import Footer from '../../../components/footer';
import Header from '../../../components/header';
import { MoveToTop } from '../../../components/movetotop';

const Aboutfounder = () => {
  return (
    <>
      <div className="about-founder-container">
        <Header />
        <div className="description-1">
          <div className="content-container-1">
            <h2 className="header">About Founder</h2>
            <p className="content-1">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
            </p>
            <img
              className="founder-image"
              src="/assets/image/founder.jpg"
              alt="founder"
            />
            <p className="content-2">
              Being a landlord is great! Until you need to find a new tenant or
              deal with a faulty AC on your own. Being a landlord is great!
              Until you need to find a new tenant or deal with a faulty AC on
              your own.
            </p>
          </div>
        </div>
        <div className="description-2">
          <div className="content-container-2">
            <p className="content-3">
              Being a landlord is great! Until you need to find a new tenant or
              deal with a faulty AC on your own.
            </p>
            <p className="content-3">
              We’ll take care of it. From marketing your home and collecting
              rent to carrying out maintenance – and everything in between – our
              comprehensive property management service gives you total peace of
              mind.
            </p>
            <p className="content-3">
              What’s more, our goal is to ensure maximum return on your
              investment. In addition to providing you with a hassle-free
              experience, we make it our business to maintain a high occupancy
              rate.{' '}
            </p>
            <p className="content-3">
              Whether you own a single unit or an entire building, let us manage
              your property while you reap the rewards.{' '}
            </p>
          </div>
        </div>

        {/* <Socialpanel/> */}
        <MoveToTop />
        <Footer />
      </div>
    </>
  );
};

export default Aboutfounder;
