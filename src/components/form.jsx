import PropTypes from "prop-types";
import { useState } from "react";
import ExperienceFactory from "../data/experienceFactory";
import SchoolFactory from "../data/schoolFactory";

function Button({ type, onClick, text }) {
  return <button type={type} onClick={onClick}>{text}</button>;
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

function InputField({ labelName, labelFor, type, onChange, requiredField }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  function handleInputChange(e) {
    const value = e.target.value;
    setInputValue(value);

    if (requiredField && !value.trim()) {
      setError("This field is required");
    } else {
      setError("");
    }
  }
  return (
    <>
      <label htmlFor={labelFor}>
        {requiredField ? "*" + labelName : labelName}
        {": "}
        <input
          type={type}
          value={inputValue}
          id={labelFor}
          name={labelFor}
          maxLength={type === "tel" ? 10 : 50}
          onChange={(e) => {
            handleInputChange(e);
            onChange(e);
          }}
        />
        {error && <p>{error}</p>}
      </label>
    </>
  );
}

InputField.defaultProps = {
  type: "text",
};

InputField.propTypes = {
  labelName: PropTypes.string,
  labelFor: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  requiredField: PropTypes.bool,
};

function FormGeneralInformation({ user }) {
  function handleChange(e, fieldName) {
    user[fieldName] = e.target.value;
  }

  return (
    <>
      <InputField
        requiredField={true}
        labelName={"First Name"}
        labelFor={"first-name"}
        onChange={(e) => handleChange(e, "firstName")}
      />
      <InputField
        requiredField={true}
        labelName={"Last Name"}
        labelFor={"last-name"}
        onChange={(e) => handleChange(e, "lastName")}
      />
      <InputField
        requiredField={true}
        labelName={"Email"}
        type={"email"}
        labelFor={"email"}
        onChange={(e) => handleChange(e, "email")}
      />
      <InputField
        requiredField={true}
        labelName={"Phone"}
        labelFor={"phone"}
        type={"tel"}
        onChange={(e) => handleChange(e, "phone")}
      />
    </>
  );
}

FormGeneralInformation.propTypes = {
  user: PropTypes.object,
};

function FormEducationalBackground({ schools }) {
  const [schoolInfo, setSchoolInfo] = useState(SchoolFactory());

  function handleAddClick() {
    schools.push(schoolInfo);
    setSchoolInfo(SchoolFactory());
  }

  function handleChange(e, fieldName) {
    setSchoolInfo({ ...schoolInfo, [fieldName]: e.target.value });
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
  schools: PropTypes.array,
};

function FormJobExperience({ experience }) {
  const [experienceInfo, setExperienceInfo] = useState(ExperienceFactory());
  let characterCount = experienceInfo.responsabilities.length || 0;

  function handleAddClick() {
    experience.push(experienceInfo);
    setExperienceInfo(ExperienceFactory());
  }

  function handleChange(e, fieldName) {
    setExperienceInfo({ ...experienceInfo, [fieldName]: e.target.value });
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
  experience: PropTypes.array,
};

function Section({ name, children }) {
  return (
    <fieldset>
      <legend>{name}</legend>
      {children}
    </fieldset>
  );
}

Section.propTypes = {
  name: PropTypes.string,
  children: PropTypes.object,
};

export function Form({ user }) {
  return (
    <form>
      <p>Required fields are marked with an asterisk (*)</p>
      <Section name={"General Information"}>
        <FormGeneralInformation user={user} />
      </Section>
      <Section name={"Educational Background"}>
        <FormEducationalBackground schools={user.schools} />
      </Section>
      <Section name={"Job Experience"}>
        <FormJobExperience experience={user.experience} />
      </Section>
    </form>
  );
}

Form.propTypes = {
  user: PropTypes.object,
};
