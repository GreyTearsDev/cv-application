import PropTypes from "prop-types";
import Card from "./card";

export default function DynamicDisplaySection({ user, setUser }) {
  function handleRemoval(key) {
    setUser(prevUser => ({ ...prevUser, schools: prevUser.schools.filter(s => s.id !== key) }));
  }
  return (
    <>
      {user.schools.map(schoolInfo => (
        <Card
          name={schoolInfo.name}
          roleOrField={schoolInfo.field}
          key={schoolInfo.id}
          dateStart={schoolInfo.start}
          dateEnd={schoolInfo.end}
          onClick={handleRemoval}
        />
      ))}
    </>
  );
}

DynamicDisplaySection.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};
