import PropTypes from "prop-types";
import Card from "./card";

export default function DynamicDisplaySection({ user, setUser, arrayName, hideIcons }) {
  const IS_SCHOOL = arrayName === "schools";

  function handleRemoval(id) {
    setUser(prevUser => ({ ...prevUser, [arrayName]: prevUser[arrayName].filter(s => s.id !== id) }));
  }
  return (
    <section className={`section section--${IS_SCHOOL ? "education" : "experience"}`}>
      <h2 className="title title--large">{IS_SCHOOL ? "Educational Background" : "Professional Experience"}</h2>
      {user[arrayName].map(info => (
        <Card
          name={IS_SCHOOL ? info.name : info.company}
          roleOrField={IS_SCHOOL ? info.field : `Role: ${info.role}`}
          key={info.id}
          id={info.id}
          dateStart={info.start}
          dateEnd={info.end}
          onClick={handleRemoval}
          text={!IS_SCHOOL ? info.responsabilities : ""}
          hideIcons={hideIcons}
          isSchool={IS_SCHOOL}
        />
      ))}
    </section>
  );
}

DynamicDisplaySection.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
  arrayName: PropTypes.string,
  hideIcons: PropTypes.bool,
};
