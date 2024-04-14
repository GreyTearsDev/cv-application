import PropTypes from "prop-types";
import DateHandler from "../util/date-management";

export default function Card({ name, roleOrField, id, dateStart, dateEnd, onClick, text, hideIcons, isSchool }) {
  const { getMonth, getYear } = DateHandler();
  const startMonth = getMonth(dateStart);
  const startYear = getYear(dateStart);
  const endMonth = getMonth(dateEnd);
  const endYear = getYear(dateEnd);

  return (
    <article className="card">
      <h3 aria-label={isSchool ? "school" : "company"} className="title title--mid">{name}</h3>
      <h4 aria-label={isSchool ? "field" : "role"} className="title title--small">{roleOrField}</h4>
      <div className="card__date">
        <p>
          {`From: ${startMonth} ${startYear}`}
        </p>
        <p>
          {`To: ${endMonth} ${endYear}`}
        </p>
      </div>
      <p>{text}</p>
      {!hideIcons
        ? <button aria-label="Delete" className="btn btn__delete" onClick={() => onClick(id)}>x</button>
        : ""}
    </article>
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
  isSchool: PropTypes.bool,
};
