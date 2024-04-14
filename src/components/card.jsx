import PropTypes from "prop-types";
import DateHandler from "../util/date-management";

export default function Card({ name, roleOrField, id, dateStart, dateEnd, onClick, text, hideIcons }) {
  const { getMonth, getYear } = DateHandler();
  const startMonth = getMonth(dateStart);
  const startYear = getYear(dateStart);
  const endMonth = getMonth(dateEnd);
  const endYear = getYear(dateEnd);

  return (
    <div className="card">
      {!hideIcons
        ? <button className="btn btn__delete" onClick={() => onClick(id)}>x</button>
        : ""}
      <h3>{name}</h3>
      <h4>{roleOrField}</h4>
      <div className="card__date">
        <p>
          From: {`${startMonth} ${startYear}`}
        </p>
        <p>
          To: {`${endMonth} ${endYear}`}
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
  hideIcons: PropTypes.bool,
};
