import PropTypes from "prop-types";
import DynamicDisplaySection from "./dynamic-display-section";
import Header from "./header";

export default function MainPage({ user, setUser }) {
  return (
    <div className="main-section">
      <Header user={user} />
      <DynamicDisplaySection arrayName={"schools"} user={user} setUser={setUser} />
      <DynamicDisplaySection arrayName={"experience"} user={user} setUser={setUser} />
    </div>
  );
}

MainPage.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};
