/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
const Fancytext = ({ title, text }) => {
  return title ? (
    <h1 className="fancy title">{text}</h1>
  ) : (
    <h3 className="fancy cursive">{text}</h3>
  );
};

Fancytext.proptypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Fancytext;
