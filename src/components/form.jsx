function InputField({ labelInfo, type, onChange }) {
  return (
    <>
      <label>
        {labelInfo + " :"}
        <input type={type} onChange={onChange} />
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
      <InputField labelInfo={"Name"} onChange={onChange} />
      <InputField labelInfo={"Email"} type={"email"} onChange={onChange} />
      <InputField labelInfo={"Phone Number"} type={"tel"} onChange={onChange} />
    </fieldSet>
  );
}

export function Form() {
  return <FormGeneralInformation onChange={() => {}} />;
}
