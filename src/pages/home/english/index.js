import { connect } from 'react-redux';
import Home from './Home';
import {
  getHomeProperty,
  onHomeSearchInputChange,
  getHomeLocationSearch,
  clearHomeProperty,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    homeProperty: state.homeReducer.homeProperty,
    homeSearch: state.homeReducer.homeSearch,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHomeProperty: (params, search) =>
      dispatch(getHomeProperty(params, search)),
    onHomeSearchInputChange: payload =>
      dispatch(onHomeSearchInputChange(payload)),
    getHomeLocationSearch: payload => dispatch(getHomeLocationSearch(payload)),
    clearHomeProperty: () => dispatch(clearHomeProperty()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
