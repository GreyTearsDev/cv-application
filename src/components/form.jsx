import { useState } from "react";
import SchoolFactory from "../data/schoolFactory";

function Button({ type, onClick, text }) {
  return <button type={type} onClick={onClick}>{text}</button>;
}

function InputField({ labelName, labelFor, type, onChange }) {
  return (
    <>
      <label htmlFor={labelFor}>
        {labelName + ": "}
        <input type={type} id={labelFor} onChange={onChange} />
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

function FormEducationalBackground({ user }) {
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
      <InputField
        labelName={"School Name"}
        LabelFor={"school-name"}
        onChange={(e) => {
          handleChange(e, "name");
        }}
      />
      <InputField
        labelName={"Field of Study"}
        LabelFor={"field-of-study"}
        onChange={(e) => {
          handleChange(e, "field");
        }}
      />
      <InputField
        labelName={"From"}
        LabelFor={"from"}
        type={"date"}
        onChange={(e) => {
          handleChange(e, "start");
        }}
      />
      <InputField
        labelName={"To"}
        LabelFor={"to"}
        type={"date"}
        onChange={(e) => {
          handleChange(e, "end");
        }}
      />
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
        <FormEducationalBackground user={user} />
      </Section>
      <Section name={"Job Experience"} />
    </form>
  );
}
