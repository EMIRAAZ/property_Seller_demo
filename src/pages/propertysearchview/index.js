import { connect } from 'react-redux';
import PropertySearchView from './PropertySearchView';
import {
  getHomeProperty,
  onHomeSearchInputChange,
  getHomeLocationSearch,
} from '../../redux/actions';

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertySearchView);
