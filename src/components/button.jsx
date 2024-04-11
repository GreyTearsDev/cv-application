import PropTypes from "prop-types";

export default function Button({ type, onClick, text }) {
  return <button type={type} onClick={onClick}>{text}</button>;
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};
