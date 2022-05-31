import './propertyview.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PropertyView = props => {
  let location = useLocation();

  useEffect(() => {
    props.getPropertyByID(getID());
  }, []);

  const getID = () => location.pathname.split('/').pop();
  return <div className="single-property-view"></div>;
};

export default PropertyView;
