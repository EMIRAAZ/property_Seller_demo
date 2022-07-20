import './listheading.scss';

const ListHeading = ({
  count = 0,
  main = 'Properties',
  sub = 'properties found',
}) => {
  return (
    <div className="property-list-heading">
      <div className="container">
        <p className="heading">{main}</p>
        <p className="sub">{`${count} ${sub}`}</p>
      </div>
    </div>
  );
};

export default ListHeading;
