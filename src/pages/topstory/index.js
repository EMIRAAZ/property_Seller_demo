import { connect } from 'react-redux';
import Topstory from './english/Topstory';
import { getTopStory, getTopStoryTopics } from '../../redux/actions';

const mapStateToProps = state => {
  return {
    news: state.topReducer.news,
    newsTopics: state.topReducer.newsTopics,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTopStory: params => dispatch(getTopStory(params)),
    getTopStoryTopics: params => dispatch(getTopStoryTopics(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topstory);
