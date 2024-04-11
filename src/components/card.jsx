import PropTypes from "prop-types";
import Button from "./button";

export default function Card({ name, roleOrField, id, dateStart, dateEnd, onClick, text }) {
  return (
    <div className="card">
      <Button
        onClick={() => {
          onClick(id);
        }}
        text="x"
      />
      <h3>{name}</h3>
      <h4>{roleOrField}</h4>
      <div className="card__date">
        <p>
          From: <span>{dateStart}</span>
        </p>
        <p>
          To: <span>{dateEnd}</span>
        </p>
      </div>
      <p>{text}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  roleOrField: PropTypes.string,
  id: PropTypes.string,
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};
