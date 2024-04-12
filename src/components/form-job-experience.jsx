import PropTypes from "prop-types";
import { useState } from "react";
import ExperienceFactory from "../data/experienceFactory";
import InputField from "./input-field";

export default function FormJobExperience({ setUser }) {
  const [experienceInfo, setExperienceInfo] = useState(ExperienceFactory());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  let characterCount = experienceInfo.responsabilities.length || 0;

  function handleAddClick() {
    setUser(prevUser => ({ ...prevUser, experience: [...prevUser.experience, experienceInfo] }));
    setIsSubmitted(true);
    setExperienceInfo(ExperienceFactory());
    setResetKey(prevKey => prevKey + 1);
  }

  function handleChange(e, fieldName) {
    setExperienceInfo(prevExperienceInfo => ({ ...prevExperienceInfo, [fieldName]: e.target.value }));
    characterCount = experienceInfo.responsabilities.length;
  }

  return (
    <>
      <div>
        <InputField
          key={`company-name${resetKey}`}
          requiredField={true}
          labelName="Company Name"
          labelFor="company-name"
          onChange={(e) => {
            handleChange(e, "company");
          }}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
        <InputField
          key={`role-title${resetKey}`}
          requiredField={true}
          labelName="Role Title"
          labelFor="role-title"
          onChange={(e) => {
            handleChange(e, "role");
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
          onChange={(e) => handleChange(e, "end")}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
        <label htmlFor="responsabilities">
          Responsabilities
          <textarea
            value={isSubmitted ? "" : experienceInfo.responsabilities}
            key={`responsabilidades${resetKey}`}
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
      <svg className="icon" onClick={handleAddClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus-box</title>
        <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
      </svg>
    </>
  );
}

FormJobExperience.propTypes = {
  setUser: PropTypes.func,
};
