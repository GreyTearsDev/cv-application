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

function InputField(props) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  function handleInputChange(e) {
    const value = e.target.value;
    setInputValue(prevValue => {
      prevValue = value;
      return prevValue;
    });

    props.requiredField && !value.trim()
      ? setError(prevError => {
        prevError = "This field is required";
        return prevError;
      })
      : setError(prevError => {
        prevError = "";
        return prevError;
      });
  }

  return (
    <>
      <label htmlFor={props.labelFor}>
        {props.requiredField ? "*" + props.labelName : props.labelName}
        {": "}
        <input
          type={props.type}
          value={inputValue}
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
};

function FormGeneralInformation({ user, setUser }) {
  function handleChange(e, fieldName) {
    user[fieldName] = e.target.value;
    setUser(prevUser => ({ ...prevUser, fieldName: e.target.value }));
  }

  return (
    <>
      <InputField
        requiredField={true}
        labelName={"First Name"}
        labelFor={"first-name"}
        autoComplete="given-name"
        onChange={(e) => handleChange(e, "firstName")}
      />
      <InputField
        requiredField={true}
        labelName={"Last Name"}
        labelFor={"last-name"}
        autoComplete="family-name"
        onChange={(e) => handleChange(e, "lastName")}
      />
      <InputField
        requiredField={true}
        labelName={"Email"}
        type={"email"}
        labelFor={"email"}
        autoComplete="off"
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
  setUser: PropTypes.func,
};

function FormEducationalBackground({ setUser }) {
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

function FormJobExperience({ setUser }) {
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

export function Form({ user, setUser }) {
  return (
    <form>
      <p>Required fields are marked with an asterisk (*)</p>
      <Section name={"General Information"}>
        <FormGeneralInformation user={user} setUser={setUser} />
      </Section>
      <Section name={"Educational Background"}>
        <FormEducationalBackground setUser={setUser} />
      </Section>
      <Section name={"Job Experience"}>
        <FormJobExperience setUser={setUser} />
      </Section>
    </form>
  );
}

Form.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};
