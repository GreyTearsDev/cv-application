import { useState } from "react";
import ExperienceFactory from "../data/experienceFactory";
import SchoolFactory from "../data/schoolFactory";

function Button({ type, onClick, text }) {
  return <button type={type} onClick={onClick}>{text}</button>;
}

function InputField({ labelName, labelFor, type, onChange }) {
  return (
    <>
      <label htmlFor={labelFor}>
        {labelName + ": "}
        <input type={type} id={labelFor} name={labelFor} maxLength={type === "tel" ? 10 : 50} onChange={onChange} />
      </label>
    </>
  );
}

InputField.defaultProps = {
  type: "text",
};

function FormGeneralInformation({ user }) {
  function handleChange(e, fieldName) {
    user[fieldName] = e.target.value;
  }

  return (
    <>
      <InputField labelName={"First Name"} labelFor={"first-name"} onChange={(e) => handleChange(e, "firstName")} />
      <InputField labelName={"Last Name"} labelFor={"last-name"} onChange={(e) => handleChange(e, "lastName")} />
      <InputField labelName={"Email"} type={"email"} labelFor={"email"} onChange={(e) => handleChange(e, "email")} />
      <InputField labelName={"Phone"} labelFor={"email"} type={"tel"} onChange={(e) => handleChange(e, "phone")} />
    </>
  );
}

function FormEducationalBackground({ schools }) {
  const [schoolInfo, setSchoolInfo] = useState(SchoolFactory());

  function handleAddClick() {
    user.schools.push(schoolInfo);
    setSchoolInfo(SchoolFactory());
  }

  function handleChange(e, fieldName) {
    setSchoolInfo({ ...schoolInfo, [fieldName]: e.target.value });
  }

  return (
    <>
      <div>
        <InputField
          labelName="School Name"
          LabelFor="school-name"
          onChange={(e) => {
            handleChange(e, "name");
          }}
        />
        <InputField
          labelName="Field of Study"
          LabelFor="field-of-study"
          onChange={(e) => {
            handleChange(e, "field");
          }}
        />
        <InputField
          labelName="From"
          LabelFor="from"
          type="date"
          onChange={(e) => {
            handleChange(e, "start");
          }}
        />
        <InputField
          labelName="To"
          LabelFor="to"
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
function FormJobExperience({ experience }) {
  const [experienceInfo, setExperienceInfo] = useState(ExperienceFactory());
  console.log(experienceInfo);
  let characterCount = experienceInfo.responsabilities.length || 0;

  function handleAddClick() {
    user.experience.push(experienceInfo);
    setExperienceInfo(ExperienceFactory());
  }

  function handleChange(e, fieldName) {
    setExperienceInfo({ ...experienceInfo, [fieldName]: e.target.value });
  }

  return (
    <>
      <div>
        <InputField
          labelName="Company Name"
          LabelFor="company-name"
          onChange={(e) => {
            handleChange(e, "company");
          }}
        />
        <InputField
          labelName="Role Title"
          LabelFor="role-title"
          onChange={(e) => {
            handleChange(e, "role");
          }}
        />
        <InputField
          labelName="From"
          LabelFor="from"
          type="date"
          onChange={(e) => {
            handleChange(e, "start");
          }}
        />
        <InputField
          labelName="To"
          LabelFor="to"
          type="date"
          onChange={(e) => handleChange(e, "end")}
        />
        <label htmlFor="responsabilities">
          Responsabilities
          <textarea
            name="responsabilities"
            cols={25}
            rows={5}
            maxLength={300}
            placeholder="describe your responsabilities"
            onChange={(e) => handleChance(e, "responsabilities")}
          >
          </textarea>
          <div>Characters: {characterCount}/300</div>
        </label>
      </div>
      <Button type="button" text="Add" onClick={handleAddClick} />
    </>
  );
}

function Section({ name, children }) {
  return (
    <fieldset>
      <legend>{name}</legend>
      {children}
    </fieldset>
  );
}

export function Form({ user }) {
  return (
    <form>
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
