import PropTypes from "prop-types";
import { useState } from "react";

export default function InputField(props) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  function handleInputChange(e) {
    const value = e.target.value;

    setInputValue(value);

    props.requiredField && !value.trim()
      ? setError("This field is required")
      : setError("");

    if (props.isSubmitted) {
      props.setIsSubmitted(false);
    }
  }

  return (
    <>
      <label htmlFor={props.labelFor}>
        {props.requiredField ? "* " + props.labelName : props.labelName}

        <input
          type={props.type}
          value={props.isSubmitted ? "" : inputValue}
          id={props.labelFor}
          name={props.labelFor}
          maxLength={props.type === "tel" ? 10 : 50}
          onChange={(e) => {
            handleInputChange(e);
            props.onChange(e);
          }}
          autoComplete={props.autoComplete}
        />
        {error && <p>{error}</p>}
      </label>
    </>
  );
}

InputField.defaultProps = {
  type: "text",
  autoComplete: "on",
};

InputField.propTypes = {
  labelName: PropTypes.string,
  labelFor: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  requiredField: PropTypes.bool,
  autoComplete: PropTypes.string,
  isSubmitted: PropTypes.bool,
  setIsSubmitted: PropTypes.func,
};
