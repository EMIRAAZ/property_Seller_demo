import './homefeatured.scss';
import { useEffect } from 'react';
import LeftNavigate from '../../../components/svg/leftnavigate';
import RightNavigate from '../../../components/svg/rightnavigate';
import ProgressLine from './progressline';
import FeaturedList from './featuredlist';

const HomeFeatured = props => {
  useEffect(() => {
    props.getFeatured();
  }, []);
  return (
    <div className="home-featured">
      <div className="header">
        <p>Featured</p>
        <div className="navigate">
          <LeftNavigate />
          <RightNavigate />
        </div>
      </div>
      <ProgressLine />
      <FeaturedList featured={props.featured.featured} />
    </div>
  );
};

export default HomeFeatured;
