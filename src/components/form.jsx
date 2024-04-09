function InputField({ labelName, labelFor, type, onChange }) {
  return (
    <>
      <label for={labelFor}>
        {labelName + " :"}
        <input type={type} id={labelFor} onChange={onChange} />
      </label>
    </>
  );
}

InputField.defaultProps = {
  type: "text",
};

function FormGeneralInformation({ onChange }) {
  return (
    <>
      <InputField labelName={"First Name"} labelFor={"first-name"} onChange={onChange} />
      <InputField labelName={"Last Name"} labelFor={"last-name"} onChange={onChange} />
      <InputField labelName={"Email"} type={"email"} labelFor={"email"} onChange={onChange} />
      <InputField labelName={"Phone"} labelFor={"email"} type={"tel"} onChange={onChange} />
    </>
  );
}

function Section({ name, children }) {
  return (
    <fieldSet>
      <legend>{name}</legend>
      {children}
    </fieldSet>
  );
}

export function Form() {
  return (
    <Section name={"General Information"}>
      <FormGeneralInformation onChange={() => {}} />
    </Section>
  );
}
