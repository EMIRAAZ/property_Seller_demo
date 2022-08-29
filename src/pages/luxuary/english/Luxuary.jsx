import './luxuary.scss';
import Header from '../../../components/header';
import Property from '../../../components/property';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ViewAll from '../viewall';
import { MoveToTop } from '../../../components/movetotop';
import FooterNew from '../../../components/footerNew';
import { Button } from '@mui/material';

const Luxuary = props => {
  let location = useLocation();
  const getPath = () => location.pathname.split('/').pop();
  const [villa, setVilla] = useState(0);
  const [apartment, setApartment] = useState(0);
  const [penthouse, setPenthouse] = useState(0);
  const [townhouse, setTownhouse] = useState(0);

  useEffect(() => {
    if (getPath() === 'luxury-property') {
      props.getLuxuryVillaWeb('&limit=3');
      props.getLuxuryAppartmentWeb('&limit=3');
      props.getLuxuryPenthouseWeb('&limit=3');
      props.getLuxuryTownhouseWeb('&limit=3');
    } else if (getPath() === 'Villa') {
      props.getLuxuryVillaWeb('&limit=3');
    } else if (getPath() === 'Apartment') {
      props.getLuxuryAppartmentWeb('&limit=3');
    } else if (getPath() === 'Townhouse') {
      props.getLuxuryTownhouseWeb('&limit=3');
    } else if (getPath() === 'Penthouse') {
      props.getLuxuryPenthouseWeb('&limit=3');
    }
  }, [getPath()]);

  const renderstory1 = () =>
    props.villa.data.map((item, i) => <Property key={i} {...item} />);
  const renderstory2 = () =>
    props.apartment.data.map((item, i) => <Property key={i} {...item} />);
  const renderstory3 = () =>
    props.townhouse.data.map((item, i) => <Property key={i} {...item} />);
  const renderstory4 = () =>
    props.penthouse.data.map((item, i) => <Property key={i} {...item} />);

  const getData = () => {
    if (getPath() === 'luxury-property') {
      return (
        <>
          {props.villa.data.length ? (
            <div className="lux-main">
              <div className="viewall">
                <div className="luxuary-text-width">
                  <h2 className="l-heading">Luxry Villas</h2>
                </div>
                <div className="card-row">{renderstory1()}</div>
                <div className="vw-btn">
                  <ViewAllBtn
                    onClick={props.getLuxuryVillaWeb}
                    setCount={setVilla}
                    count={villa}
                  />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {props.apartment.data.length ? (
            <div className="lux-main">
              <div className="viewall">
                <div className="luxuary-text-width">
                  <h2 className="l-heading">Luxury Apartments</h2>
                </div>
                <div className="card-row">{renderstory2()}</div>
                <div className="vw-btn">
                  <ViewAllBtn
                    onClick={props.getLuxuryAppartmentWeb}
                    setCount={setApartment}
                    count={apartment}
                  />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {props.townhouse.data.length ? (
            <div className="lux-main">
              <div className="viewall">
                <div className="luxuary-text-width">
                  <h2 className="l-heading">Luxry Townhouse</h2>
                </div>
                <div className="card-row">{renderstory3()}</div>
                <div className="vw-btn">
                  <ViewAllBtn
                    onClick={props.getLuxuryTownhouseWeb}
                    setCount={setTownhouse}
                    count={townhouse}
                  />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {props.penthouse.data.length ? (
            <div className="lux-main">
              <div className="viewall">
                <div className="luxuary-text-width">
                  <h2 className="l-heading">Luxry Penthouse</h2>
                </div>
                <div className="card-row">{renderstory4()}</div>
                <div className="vw-btn">
                  <ViewAllBtn
                    onClick={props.getLuxuryPenthouseWeb}
                    setCount={setPenthouse}
                    count={penthouse}
                  />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      );
    } else if (getPath() === 'Villa') {
      return (
        <div className="lux-main">
          <div className="viewall">
            <div className="luxuary-text-width">
              <h2 className="l-heading">Luxury Villas</h2>
            </div>
            <div className="card-row">{renderstory1()}</div>
            <div className="vw-btn">
              <ViewAllBtn
                onClick={props.getLuxuryVillaWeb}
                setCount={setVilla}
                count={villa}
              />
            </div>
          </div>
        </div>
      );
    } else if (getPath() === 'Apartment') {
      return (
        <div className="lux-main">
          <div className="viewall">
            <div className="luxuary-text-width">
              <h2 className="l-heading">Luxury Apartments</h2>
            </div>
            <div className="card-row">{renderstory2()}</div>
            <div className="vw-btn">
              <ViewAllBtn
                onClick={props.getLuxuryAppartmentWeb}
                setCount={setApartment}
                count={apartment}
              />
            </div>
          </div>
        </div>
      );
    } else if (getPath() === 'Townhouse') {
      return (
        <div className="lux-main">
          <div className="viewall">
            <div className="luxuary-text-width">
              <h2 className="l-heading">Luxury Townhouse</h2>
            </div>
            <div className="card-row">{renderstory3()}</div>
            <div className="vw-btn">
              <ViewAllBtn
                onClick={props.getLuxuryTownhouseWeb}
                setCount={setTownhouse}
                count={townhouse}
              />
            </div>
          </div>
        </div>
      );
    } else if (getPath() === 'Penthouse') {
      return (
        <div className="lux-main">
          <div className="viewall">
            <div className="luxuary-text-width">
              <h2 className="l-heading">Luxury Penthouse</h2>
            </div>
            <div className="card-row">{renderstory4()}</div>
            <div className="vw-btn">
              <ViewAllBtn
                onClick={props.getLuxuryPenthouseWeb}
                setCount={setPenthouse}
                count={penthouse}
              />
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="luxuary-container">
      <Header customClass="luxury-header-class" />
      {getData()}
      {/* {props.villa.data.length ? (
        <div className="lux-main">
          <div className="viewall">
            <div className="luxuary-text-width">
              <h2 className="l-heading">Luxry Villas</h2>
            </div>
            <div className="card-row">{renderstory1()}</div>
            <div className="vw-btn">
              <ViewAll />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {props.apartment.data.length ? (
        <div className="lux-main">
          <div className="viewall">
            <div className="luxuary-text-width">
              <h2 className="l-heading">Luxury Apartments</h2>
            </div>
            <div className="card-row">{renderstory2()}</div>
            <div className="vw-btn">
              <ViewAll />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {props.townhouse.data.length ? (
        <div className="lux-main">
          <div className="viewall">
            <div className="luxuary-text-width">
              <h2 className="l-heading">Luxry Townhouse</h2>
            </div>
            <div className="card-row">{renderstory3()}</div>
            <div className="vw-btn">
              <ViewAll />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {props.penthouse.data.length ? (
        <div className="lux-main">
          <div className="viewall">
            <div className="luxuary-text-width">
              <h2 className="l-heading">Luxry Penthouse</h2>
            </div>
            <div className="card-row">{renderstory4()}</div>
            <div className="vw-btn">
              <ViewAll />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )} */}
      <MoveToTop />
      <FooterNew />
    </div>
  );
};

export default Luxuary;

const ViewAllBtn = ({ onClick, setCount, count }) => {
  const onBtnClick = () => {
    setCount(count + 3);
    onClick(`&limit=${count + 3}`);
  };
  return (
    <Button variant="outlined" onClick={onBtnClick}>
      View All
    </Button>
  );
};
