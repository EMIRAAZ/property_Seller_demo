import './searches.scss';

const Searches = props => {
  return (
    <div className="searches-link">
      <div className="searches-link-container">
        {renderTag(props.taghead, props.tagline)}
      </div>
    </div>
  );
};

export default Searches;

const renderTag = (taghead, tagline) => {
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
                <p key={j + j} className="column-link">
                  {link.title}
                </p>
              );
            }
          })}
      </div>
    ))
  );
};
