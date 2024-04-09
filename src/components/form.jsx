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

function FormGeneralInformation({ userData, setUserData }) {
  function handleChange(e, fieldName) {
    setUserData({ ...userData, [fieldName]: e.target.value });
    console.log(userData);
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

function Section({ name, children }) {
  return (
    <fieldset>
      <legend>{name}</legend>
      {children}
    </fieldset>
  );
}

export function Form({ userData, setUserData }) {
  return (
    <Section name={"General Information"}>
      <FormGeneralInformation userData={userData} setUserData={setUserData} onChange={() => {}} />
    </Section>
  );
}
