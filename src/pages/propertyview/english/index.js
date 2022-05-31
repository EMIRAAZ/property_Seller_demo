import { connect } from 'react-redux';
import PropertyView from './PropertyView';
import { getPropertyByID } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    property: state.propertyReducer.property.length
      ? state.propertyReducer.property[0]
      : {},
    loading: state.propertyReducer.loading,
    error: state.propertyReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPropertyByID: id => dispatch(getPropertyByID(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyView);
