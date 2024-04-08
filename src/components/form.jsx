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
