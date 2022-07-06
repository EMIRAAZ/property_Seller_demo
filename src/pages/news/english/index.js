import { connect } from 'react-redux';
import News from './News';
import { getSingleNews } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    news: state.singlenewsReducer.news,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleNews: id => dispatch(getSingleNews(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
