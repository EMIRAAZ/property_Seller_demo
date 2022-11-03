import './similarproperty.scss';
import { useEffect } from 'react';
import Property from '../property';

const SimilarProperty = props => {
  useEffect(() => {
    props.getSimilarProperty(props.city);
  }, []);

  return (
    <div className="similar-property">
      <h1>Similar Properties</h1>
      <div className="scroll-similar">
        {props.similarProperty.map(item => (
          <Property key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProperty;
