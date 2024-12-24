import { getImageUrl } from "./util.js";
import PropTypes from "prop-types";

const Avatar = ({ person }) => {
  return <img src={getImageUrl()} alt={person.name} />;
};
Avatar.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageId: PropTypes.string.isRequired,
  }).isRequired,
};

export default Avatar;
