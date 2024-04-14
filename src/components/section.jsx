import PropTypes from "prop-types";
import { useState } from "react";

export default function Section({ name, children }) {
  const [showChildren, setShowChildren] = useState(false);

  const toggleVisibility = () => {
    setShowChildren(!showChildren);
  };

  return (
    <fieldset>
      <button
        className="btn btn__form__info"
        type="button"
        onClick={() => toggleVisibility(showChildren, setShowChildren)}
      >
        {showChildren
          ? (
            <svg className="icon icon--arrow icon--arrow-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
            </svg>
          )
          : (
            <svg className="icon icon--arrow icon--arrow--down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          )}
        {name}
      </button>
      {showChildren ? children : ""}
    </fieldset>
  );
}

Section.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element,
};
