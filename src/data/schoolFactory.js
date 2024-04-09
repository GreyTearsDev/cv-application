import {v4 as uuid} from 'uuid';

export default function SchoolFactory(schoolName, fieldOfStudy, dateStart, dateEnd) {
  return {
    id: uuid(),
    name: schoolName,
    field: fieldOfStudy,
    start: dateStart,
    end: dateEnd,
  }
}
