import PropTypes from "prop-types";

export default function Section({ name, children }) {
  return (
    <fieldset>
      <legend>{name}</legend>
      {children}
    </fieldset>
  );
}

Section.propTypes = {
  name: PropTypes.string,
  children: PropTypes.object,
};
