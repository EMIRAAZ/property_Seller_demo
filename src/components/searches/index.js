import { connect } from 'react-redux';
import { getTagLineWeb, getTagHeadWeb } from '../../redux/actions';
import Searches from './Searches';

const mapStateToProps = state => {
  return {
    taghead: state.tagwebReducer.taghead,
    tagline: state.tagwebReducer.tagline,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTagHeadWeb: params => dispatch(getTagHeadWeb(params)),
    getTagLineWeb: id => dispatch(getTagLineWeb(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searches);
