import PropTypes from "prop-types";
import { useState } from "react";

export default function Section({ name, children, onClick }) {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <fieldset>
      <legend onClick={() => onClick(showChildren, setShowChildren)}>
        {name}
        {showChildren
          ? (
            <svg className="icon icon--arrow icon--arrow-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>chevron-up</title>
              <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
            </svg>
          )
          : (
            <svg className="icon icon--arrow icon--arrow--down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>chevron-down</title>
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          )}
      </legend>
      {showChildren ? children : ""}
    </fieldset>
  );
}

Section.propTypes = {
  name: PropTypes.string,
  children: PropTypes.object,
  onClick: PropTypes.func,
};
