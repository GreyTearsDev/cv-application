export default function ExperienceFactory(companyName, role, responsabilities, dateStart, dateEnd) {
  return {
    company: companyName,
    roleTitle: role,
    mainResponsabilities: responsabilities,
    start: dateStart,
    end: dateEnd,
  }
}
