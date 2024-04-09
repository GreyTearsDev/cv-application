export default function SchoolFactory(schoolName, fieldOfStudy, dateStart, dateEnd) {
  return {
    name: schoolName,
    field: fieldOfStudy,
    start: dateStart,
    end: dateEnd,
  }
}
