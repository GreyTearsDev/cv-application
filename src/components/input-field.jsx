import PropTypes from "prop-types";
import { useState } from "react";

export default function InputField(props) {
  const ERROR_MESSAGE = "This field is required";
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  function handleInputChange(e) {
    const value = e.target.value;
    setInputValue(value);

    if (props.requiredField && !value.trim()) {
      setError(ERROR_MESSAGE);
    } else {
      setError("");
    }

    if (props.validateInfo) {
      props.validateInfo(value, props.valueSetter);
    }

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
          maxLength={props.type === "tel" ? 20 : 50}
          onChange={(e) => {
            handleInputChange(e);
            props.onChange(e);
          }}
          autoComplete={props.autoComplete}
        />
        {error && <p className="error-message">{error}</p>}
        {(!error && !props.infoIsValid && props.requiredField && props.attemptedToSubmit) && (
          <p className="error-message">{ERROR_MESSAGE}</p>
        )}
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
  infoIsValid: PropTypes.bool,
  validateInfo: PropTypes.func,
  attemptedToSubmit: PropTypes.bool,
  valueSetter: PropTypes.func,
};
