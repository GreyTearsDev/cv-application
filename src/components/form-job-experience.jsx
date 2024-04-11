import PropTypes from "prop-types";
import { useState } from "react";
import ExperienceFactory from "../data/experienceFactory";
import Button from "./button";
import InputField from "./input-field";

export default function FormJobExperience({ setUser }) {
  const [experienceInfo, setExperienceInfo] = useState(ExperienceFactory());
  let characterCount = experienceInfo.responsabilities.length || 0;

  function handleAddClick() {
    setUser(prevUser => ({ ...prevUser, experience: [...prevUser.experience, experienceInfo] }));
    setExperienceInfo(ExperienceFactory());
  }

  function handleChange(e, fieldName) {
    setExperienceInfo(prevExperienceInfo => ({ ...prevExperienceInfo, [fieldName]: e.target.value }));
    characterCount = experienceInfo.responsabilities.length;
  }

  return (
    <>
      <div>
        <InputField
          requiredField={true}
          labelName="Company Name"
          labelFor="company-name"
          onChange={(e) => {
            handleChange(e, "company");
          }}
        />
        <InputField
          requiredField={true}
          labelName="Role Title"
          labelFor="role-title"
          onChange={(e) => {
            handleChange(e, "role");
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
          onChange={(e) => handleChange(e, "end")}
        />
        <label htmlFor="responsabilities">
          Responsabilities
          <textarea
            id="responsabilities"
            name="responsabilities"
            cols={25}
            rows={5}
            maxLength={300}
            placeholder="Describe your main responsabilities"
            onChange={(e) => handleChange(e, "responsabilities")}
          >
          </textarea>
          <div>{characterCount}/300</div>
        </label>
      </div>
      <Button type="button" text="Add" onClick={handleAddClick} />
    </>
  );
}

FormJobExperience.propTypes = {
  setUser: PropTypes.func,
};
