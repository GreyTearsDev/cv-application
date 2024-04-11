import PropTypes from "prop-types";
import DynamicDisplaySection from "./dynamic-display-section";
import Header from "./header";

export default function MainPage({ user, setUser }) {
  return (
    <>
      <Header user={user} />
      <DynamicDisplaySection arrayName={"schools"} user={user} setUser={setUser} />
      <DynamicDisplaySection arrayName={"experience"} user={user} setUser={setUser} />
    </>
  );
}

MainPage.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};
