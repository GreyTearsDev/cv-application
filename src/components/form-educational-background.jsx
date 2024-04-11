import PropTypes from "prop-types";
import { useState } from "react";
import SchoolFactory from "../data/schoolFactory";
import Button from "./button";
import InputField from "./input-field";

export default function FormEducationalBackground({ setUser }) {
  const [schoolInfo, setSchoolInfo] = useState(SchoolFactory());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  function handleAddClick() {
    setUser(prevState => ({ ...prevState, schools: [...prevState.schools, schoolInfo] }));
    setIsSubmitted(true);
    setSchoolInfo(SchoolFactory());
    setResetKey(prevKey => prevKey + 1);
  }

  function handleChange(e, fieldName) {
    setSchoolInfo(prevSchoolInfo => ({ ...prevSchoolInfo, [fieldName]: e.target.value }));
  }

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
      <Button type="button" text="Add" onClick={handleAddClick} />
    </>
  );
}

FormEducationalBackground.propTypes = {
  setUser: PropTypes.func,
};
