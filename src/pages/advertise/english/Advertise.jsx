import FooterNew from '../../../components/footerNew';
import Header from '../../../components/header';
import { useState } from 'react';
import './advertise.scss';
import axios from '../../../utils/axios';

const Adform = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    propertyType: '',
    location: '',
  });

  const onChangeForm = (name, value) => {
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    try {
      await axios.post(`/api/advertise-with-us`, form);
      setForm({
        name: '',
        email: '',
        mobile: '',
        propertyType: '',
        location: '',
      });
    } catch (e) {
      console.log(e);
    }
  };

  console.log(form);
  return (
    <div className="adform-container">
      <div className="adform">
        <label>Name</label>
        <br />
        <input
          value={form.name}
          type="text"
          placeholder="Name"
          onChange={e => onChangeForm('name', e.target.value)}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          value={form.email}
          placeholder="Email"
          onChange={e => onChangeForm('email', e.target.value)}
        />
        <br />
        <label>Mobile</label>
        <br />
        <input
          type="text"
          value={form.mobile}
          placeholder="Mobile Number"
          onChange={e => onChangeForm('mobile', e.target.value)}
        />
        <br />
        <label>Property Type</label>
        <br />
        <input
          type="text"
          placeholder="Property Type"
          value={form.propertyType}
          onChange={e => onChangeForm('propertyType', e.target.value)}
        />
        <br />
        <label>Location</label>
        <br />
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={e => onChangeForm('location', e.target.value)}
        />
        <br />
        <input className="sub-btn" type="submit" onClick={onSubmit} />
      </div>
    </div>
  );
};

const Advertise = () => {
  return (
    <div className="admain-div">
      <Header customClass="header-border-cls" />

      <div className="ad-content">
        <h2 className="adhead">Advertise With Us</h2>
        <p>
          Reach out to potential buyers with the Property Seller. Join the
          club, tap the network and expand your business.
        </p>
        <br />
        <br />
        <p>
          We don't just offer, but you simply gain with being part of our
          network.
        </p>

        <div className="list-space">
          <div className="list-container">
            <div className="list-square">
              <p className="list-no">1</p>
            </div>
            <p className="list-content">Quality insights to seal the deal</p>
          </div>
          <div className="list-container">
            <div className="list-square">
              <p className="list-no">2</p>
            </div>
            <p className="list-content">Maximum market exposure</p>
          </div>
          <div className="list-container">
            <div className="list-square">
              <p className="list-no">3</p>
            </div>
            <p className="list-content">
              AI powered tools giving you predictive analysis
            </p>
          </div>
          <div className="list-container">
            <div className="list-square">
              <p className="list-no">4</p>
            </div>
            <p className="list-content">Consistent and genuine listings</p>
          </div>

          <div className="list-container">
            <div className="list-square">
              <p className="list-no">5</p>
            </div>
            <p className="list-content">
              Directives on contracts and legal services
            </p>
          </div>
        </div>
      </div>

      <h2 className="form-head-div">Get in touch to experience more:</h2>
      <Adform />
      <FooterNew />
    </div>
  );
};

export default Advertise;
