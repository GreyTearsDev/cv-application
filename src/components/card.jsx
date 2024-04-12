import PropTypes from "prop-types";
import DateHandler from "../util/date-management";

export default function Card({ name, roleOrField, id, dateStart, dateEnd, onClick, text }) {
  const { getMonth, getYear } = DateHandler();
  const startMonth = getMonth(dateStart);
  const startYear = getYear(dateStart);
  const endMonth = getMonth(dateEnd);
  const endYear = getYear(dateEnd);

  return (
    <div className="card">
      <svg
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          onClick(id);
        }}
        viewBox="0 0 24 24"
      >
        <title>trash-can-outline</title>
        <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
      </svg>
      <h3>{name}</h3>
      <h4>{roleOrField}</h4>
      <div className="card__date">
        <p>
          From: <span>{`${startMonth} ${startYear}`}</span>
        </p>
        <p>
          To: <span>{`${endMonth} ${endYear}`}</span>
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
