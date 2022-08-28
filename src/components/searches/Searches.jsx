import './searches.scss';
import { useNavigate } from 'react-router-dom';

const Searches = props => {
  let navigate = useNavigate();

  return (
    <div className="searches-link">
      <div className="searches-link-container">
        {renderTag(props.taghead, props.tagline, navigate)}
      </div>
    </div>
  );
};

export default Searches;

const renderTag = (taghead, tagline, navigate) => {
  return (
    taghead.rows &&
    taghead.rows.map((item, i) => (
      <div key={i}>
        <p className="column-heading">
          {item.title && item.title.toUpperCase()}
        </p>
        {tagline.rows &&
          tagline.rows.map((link, j) => {
            if (link.tagheadId === item.id) {
              return (
                <p
                  key={j + j}
                  className="column-link"
                  onClick={() =>
                    navigate(`/listproperty/tag?tagline=${link.id}`)
                  }
                >
                  {link.title}
                </p>
              );
            }
          })}
      </div>
    ))
  );
};
