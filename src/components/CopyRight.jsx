import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const CopyRight = ({ year }) => {
  return (
    <div>
      <p className="small">©️ {year}</p>
    </div>
  );
};

CopyRight.defaultProps = {
  year: PropTypes.number.isRequired,
};

export default CopyRight;
