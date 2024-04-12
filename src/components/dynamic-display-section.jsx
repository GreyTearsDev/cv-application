import PropTypes from "prop-types";
import Card from "./card";

export default function DynamicDisplaySection({ user, setUser, arrayName }) {
  const IS_SCHOOL = arrayName === "schools";

  function handleRemoval(id) {
    setUser(prevUser => ({ ...prevUser, [arrayName]: prevUser[arrayName].filter(s => s.id !== id) }));
  }
  return (
    <>
      <h2>{IS_SCHOOL ? "Educational Background" : "Professional Experience"}</h2>
      {user[arrayName].map(info => (
        <Card
          name={IS_SCHOOL ? info.name : info.company}
          roleOrField={IS_SCHOOL ? info.field : info.role}
          key={info.id}
          id={info.id}
          dateStart={info.start}
          dateEnd={info.end}
          onClick={handleRemoval}
          text={!IS_SCHOOL ? info.responsabilities : ""}
        />
      ))}
    </>
  );
}

DynamicDisplaySection.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
  arrayName: PropTypes.string,
};
