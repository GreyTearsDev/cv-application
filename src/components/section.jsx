import PropTypes from "prop-types";
import { useState } from "react";

export default function Section({ name, children, onClick }) {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <fieldset onClick={() => onClick(showChildren, setShowChildren)}>
      <legend>{name}</legend>
      {showChildren ? children : ""}
    </fieldset>
  );
}

Section.propTypes = {
  name: PropTypes.string,
  children: PropTypes.object,
  onClick: PropTypes.func,
};
