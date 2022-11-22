import { connect } from 'react-redux';
import PropertyView from './PropertyView';
import { getPropertyByID, getSimilarProperty } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    property: state.propertyReducer.property.length
      ? state.propertyReducer.property[0]
      : {},
    loading: state.propertyReducer.loading,
    error: state.propertyReducer.error,
    similarProperty: state.propertyReducer.similarProperty,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPropertyByID: id => dispatch(getPropertyByID(id)),
    getSimilarProperty: (city, id) => dispatch(getSimilarProperty(city, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyView);
