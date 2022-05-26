import { connect } from 'react-redux';
import Home from './Home';
import {
  getHomeProperty,
  onHomeSearchInputChange,
  getHomeLocationSearch,
  getHomeFeatured,
  getHomeLuxury,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    homeProperty: state.homeReducer.homeProperty,
    homeSearch: state.homeReducer.homeSearch,
    homeFeatured: state.homeReducer.homeFeatured,
    homeLuxury: state.homeReducer.homeLuxury,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHomeProperty: params => dispatch(getHomeProperty(params)),
    onHomeSearchInputChange: payload =>
      dispatch(onHomeSearchInputChange(payload)),
    getHomeLocationSearch: payload => dispatch(getHomeLocationSearch(payload)),
    getHomeFeatured: payload => dispatch(getHomeFeatured(payload)),
    getHomeLuxury: payload => dispatch(getHomeLuxury(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
