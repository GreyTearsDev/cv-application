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
    <fieldSet>
      <legend>General Information</legend>
      <InputField labelName={"First Name"} labelFor={"first-name"} onChange={onChange} />
      <InputField labelName={"Last Name"} labelFor={"last-name"} onChange={onChange} />
      <InputField labelName={"Email"} type={"email"} labelFor={"email"} onChange={onChange} />
      <InputField labelName={"Phone"} labelFor={"email"} type={"tel"} onChange={onChange} />
    </fieldSet>
  );
}

export function Form() {
  return <FormGeneralInformation onChange={() => {}} />;
}
