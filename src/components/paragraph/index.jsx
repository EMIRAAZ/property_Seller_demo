import './paragraph.scss';

const Paragraph = ({ children, customClass }) => {
  return <p className={`paragraph-class ${customClass}`}>{children}</p>;
};

export default Paragraph;
