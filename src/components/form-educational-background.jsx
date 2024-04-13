import PropTypes from "prop-types";
import { useState } from "react";
import SchoolFactory from "../data/schoolFactory";
import InputField from "./input-field";

export default function FormEducationalBackground({ setUser }) {
  const [schoolInfo, setSchoolInfo] = useState(SchoolFactory());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [fieldIsValid, setFieldIsValid] = useState(false);
  const [attemptedToSubmit, setAttemptedToSubmit] = useState(false);

  function handleAddClick() {
    if (!nameIsValid || !fieldIsValid) return setAttemptedToSubmit(true);

    setUser(prevState => ({ ...prevState, schools: [...prevState.schools, schoolInfo] }));
    setIsSubmitted(true);
    setNameIsValid(false);
    setFieldIsValid(false);
    setAttemptedToSubmit(false);
    setSchoolInfo(SchoolFactory());
    setResetKey(prevKey => prevKey + 1);
  }

  const validateInfo = (inputValue, valueSetter) => valueSetter(inputValue.trim() !== "");

  const handleChange = (e, fieldName) =>
    setSchoolInfo(prevSchoolInfo => ({ ...prevSchoolInfo, [fieldName]: e.target.value }));

  return (
    <>
      <div>
        <InputField
          key={`school-name${resetKey}`}
          requiredField={true}
          labelName="School Name"
          labelFor="school-name"
          onChange={(e) => {
            handleChange(e, "name");
          }}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          infoIsValid={nameIsValid}
          valueSetter={setNameIsValid}
          validateInfo={validateInfo}
          attemptedToSubmit={attemptedToSubmit}
        />
        <InputField
          key={`field-of-study${resetKey}`}
          requiredField={true}
          labelName="Field of Study"
          labelFor="field-of-study"
          onChange={(e) => {
            handleChange(e, "field");
          }}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          infoIsValid={fieldIsValid}
          valueSetter={setFieldIsValid}
          validateInfo={validateInfo}
          attemptedToSubmit={attemptedToSubmit}
        />
        <InputField
          key={`from${resetKey}`}
          labelName="From"
          labelFor="from"
          type="date"
          onChange={(e) => {
            handleChange(e, "start");
          }}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
        <InputField
          key={`to${resetKey}`}
          labelName="To"
          labelFor="to"
          type="date"
          onChange={(e) => {
            handleChange(e, "end");
          }}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
      </div>
      <svg
        className="icon icon--button"
        onClick={handleAddClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>plus-box</title>
        <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
      </svg>
    </>
  );
}

FormEducationalBackground.propTypes = {
  setUser: PropTypes.func,
};
