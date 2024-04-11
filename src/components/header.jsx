import PropTypes from "prop-types";

export default function Header({ user }) {
  return (
    <div className={"section header"}>
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <div>
        <h2>{user.email}</h2>
        <h2>{user.phone}</h2>
      </div>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.object,
};
