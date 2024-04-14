import PropTypes from "prop-types";
import FormEducationalBackground from "./form-educational-background";
import FormGeneralInformation from "./form-general-info";
import FormJobExperience from "./form-job-experience";
import Section from "./section";

export default function Form({ user, setUser }) {
  return (
    <aside>
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
    </aside>
  );
}

Form.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};
