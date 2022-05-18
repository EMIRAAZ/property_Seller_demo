import './homefeatured.scss';
import LeftNavigate from '../../../components/svg/leftnavigate';
import RightNavigate from '../../../components/svg/rightnavigate';
import ProgressLine from './progressline';
import FeaturedList from './featuredlist';

const HomeFeatured = () => {
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
      <FeaturedList />
    </div>
  );
};

export default HomeFeatured;
