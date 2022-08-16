import './agencyheadtag.scss';

const AgencyHeadTag = ({ main = 'Main Heading', sub }) => {
  return (
    <>
      <p className="main-heading-agency-tag">{main}</p>
      <p className="sub-heading-agency-tag">{sub}</p>
    </>
  );
};

export default AgencyHeadTag;
