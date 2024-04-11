import PropTypes from "prop-types";
import FormGeneralInformation from "./form-general-info";
import FormEducationalBackground from "./form-general-info";
import FormJobExperience from "./form-job-experience";
import Section from "./section";

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
