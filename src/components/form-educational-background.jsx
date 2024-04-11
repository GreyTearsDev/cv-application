import PropTypes from "prop-types";
import { useState } from "react";
import SchoolFactory from "../data/schoolFactory";
import Button from "./button";
import InputField from "./input-field";

export default function FormEducationalBackground({ setUser }) {
  const [schoolInfo, setSchoolInfo] = useState(SchoolFactory());

  function handleAddClick() {
    setUser(prevState => ({ ...prevState, schools: [...prevState.schools, schoolInfo] }));
    setSchoolInfo(SchoolFactory());
  }

  function handleChange(e, fieldName) {
    setSchoolInfo(prevSchoolInfo => ({ ...prevSchoolInfo, [fieldName]: e.target.value }));
  }

  return (
    <>
      <div>
        <InputField
          requiredField={true}
          labelName="School Name"
          labelFor="school-name"
          onChange={(e) => {
            handleChange(e, "name");
          }}
        />
        <InputField
          requiredField={true}
          labelName="Field of Study"
          labelFor="field-of-study"
          onChange={(e) => {
            handleChange(e, "field");
          }}
        />
        <InputField
          labelName="From"
          labelFor="from"
          type="date"
          onChange={(e) => {
            handleChange(e, "start");
          }}
        />
        <InputField
          labelName="To"
          labelFor="to"
          type="date"
          onChange={(e) => {
            handleChange(e, "end");
          }}
        />
      </div>
      <Button type="button" text="Add" onClick={handleAddClick} />
    </>
  );
}

FormEducationalBackground.propTypes = {
  setUser: PropTypes.func,
};
