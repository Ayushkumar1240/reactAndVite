import DoneIcon from "@mui/icons-material/Done";
import PropTypes from "prop-types";
const Item = ({ isPacked, name }) => {
  return (
    <>
      <li>
        {name}
        {isPacked && <DoneIcon/>}
      </li>
    </>
  );
};

Item.propTypes = {
  isPacked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Item;
