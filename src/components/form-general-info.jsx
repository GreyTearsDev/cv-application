import PropTypes from "prop-types";
import InputField from "./input-field";

export default function FormGeneralInformation({ user, setUser }) {
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
