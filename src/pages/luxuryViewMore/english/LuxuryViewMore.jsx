import './luxuryViewMore.scss';
import Footer from '../../../components/footer';
import Header from '../../../components/header';
import Pagination from '../../../components/pagination';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LuxuryViewMore = props => {
  let location = useLocation();
  const getID = () => location.pathname.split('/').pop();

  useEffect(() => {
    props.getLuxuryWithTypeWeb(getID());
  }, [getID()]);

  const renderstory1 = () =>
    props.luxury.data.map((item, i) => <LuxuaryCard key={i} {...item} />);

  const onChangeCurrentPage = current => {
    const offset = 10 * current - 10 > 0 ? 10 * current - 10 : 0;
    props.getLuxuryWithTypeWeb(getID(), offset);
  };
  return (
    <div className="luxuaryv-container">
      <Header />

      <div className="lux-main">
        <div className="viewall">
          <div className="luxuary-text-width">
            <h2 className="l-heading">Luxury Property</h2>
            <p className="l-description">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
            </p>
          </div>
          <div className="card-row">{renderstory1()}</div>
          <Pagination
            count={props.luxury.count}
            onChange={current => onChangeCurrentPage(current)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const LuxuaryCard = luxury => {
  return (
    <>
      <div className="luxv1-card-container">
        <div className="lux1-desciption">
          <div className="lux1-content">
            <img className="lux1-image" src={luxury.images[0]} alt="blog" />
            <div className="dateandtime">
              <p className="place">{luxury.address.city}</p>
              <p className="time">{luxury.updatedAt}</p>
            </div>
            <h1 className="lux1-heading">{luxury.title}</h1>
            <p className="lux2-description">{luxury.description}</p>
            <p className="more">
              view more
              <svg
                width="19"
                height="12"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_2066)">
                  <path
                    d="M4.23926 9.33301H14.6096"
                    stroke="#313131"
                    strokeWidth="1.11111"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6484 12.296L14.6114 9.33301"
                    stroke="#313131"
                    strokeWidth="1.11111"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6484 6.37012L14.6114 9.33308"
                    stroke="#313131"
                    strokeWidth="1.11111"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_2066">
                    <rect
                      width="17.7778"
                      height="17.7778"
                      fill="white"
                      transform="translate(0.537109 0.444336)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuxuryViewMore;
