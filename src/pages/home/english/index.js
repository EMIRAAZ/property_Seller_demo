import { connect } from 'react-redux';
import Home from './Home';
import {
  getHomeProperty,
  onHomeSearchInputChange,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    homeProperty: state.homeReducer.homeProperty,
    homeSearch: state.homeReducer.homeSearch,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHomeProperty: params => dispatch(getHomeProperty(params)),
    onHomeSearchInputChange: payload =>
      dispatch(onHomeSearchInputChange(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
