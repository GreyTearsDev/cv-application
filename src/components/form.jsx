import PropTypes from "prop-types";
import FormEducationalBackground from "./form-educational-background";
import FormGeneralInformation from "./form-general-info";
import FormJobExperience from "./form-job-experience";
import Section from "./section";

export default function Form({ user, setUser }) {
  const toggleVisibility = (visibilityValue, setVisibility) => {
    setVisibility(!visibilityValue);
  };

  return (
    <form>
      <p>Required fields are marked with an asterisk (*)</p>
      <Section onClick={toggleVisibility} name={"General Information"}>
        <FormGeneralInformation user={user} setUser={setUser} />
      </Section>
      <Section onClick={toggleVisibility} name={"Educational Background"}>
        <FormEducationalBackground setUser={setUser} />
      </Section>
      <Section onClick={toggleVisibility} name={"Job Experience"}>
        <FormJobExperience setUser={setUser} />
      </Section>
    </form>
  );
}

Form.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};
