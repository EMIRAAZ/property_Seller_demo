import './homefeatured.scss';
import { useEffect } from 'react';
import LeftNavigate from '../../../components/svg/leftnavigate';
import RightNavigate from '../../../components/svg/rightnavigate';
import ProgressLine from './progressline';
import FeaturedList from './featuredlist';

const HomeFeatured = props => {
  console.log(props.featured.currentPage);
  const { featured } = props;
  useEffect(() => {
    props.getFeatured();
  }, []);
  const onLeftClick = () => {
    const offset =
      2 * featured.currentPage - 2 > 0 ? 2 * featured.currentPage - 2 : 0;

    if (offset >= 0 && featured.currentPage > 0)
      props.onChangePage(featured.currentPage - 1, () =>
        props.getFeatured(`&offset=${offset}`)
      );
  };
  const onRightClick = () => {
    const offset =
      2 * featured.currentPage - 2 > 0 ? 2 * featured.currentPage - 2 : 0;
    if (offset < featured.count)
      props.onChangePage(featured.currentPage + 1, () =>
        props.getFeatured(`&offset=${offset}`)
      );
  };
  return (
    <div className="home-featured">
      <div className="header">
        <p>Featured</p>
        <div className="navigate">
          <LeftNavigate onClick={onLeftClick} />
          <RightNavigate onClick={onRightClick} />
        </div>
      </div>
      <ProgressLine />
      <FeaturedList featured={props.featured.featured} />
    </div>
  );
};

export default HomeFeatured;
