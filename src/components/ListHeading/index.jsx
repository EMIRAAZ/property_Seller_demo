import './listheading.scss';

const ListHeading = ({
  count = 0,
  main = 'Properties',
  sub = 'properties found',
  isCount = true,
  className = '',
}) => {
  return (
    <div className={`property-list-heading ${className}`}>
      <div className="container">
        <p className="heading">{main}</p>
        {isCount ? <p className="sub">{`${count} ${sub}`}</p> : null}
      </div>
    </div>
  );
};

export default ListHeading;
