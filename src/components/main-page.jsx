import PropTypes from "prop-types";
import DynamicDisplaySection from "./dynamic-display-section";

export default function MainPage({ user, setUser }) {
  return (
    <>
      <DynamicDisplaySection arrayName={"schools"} user={user} setUser={setUser} />
      <DynamicDisplaySection arrayName={"experience"} user={user} setUser={setUser} />
    </>
  );
}

MainPage.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};
