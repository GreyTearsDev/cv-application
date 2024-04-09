import {v4 as uuid} from 'uuid';

export default function ExperienceFactory(companyName, role, responsabilities, dateStart, dateEnd) {
  return {
    id: uuid(),
    company: companyName,
    roleTitle: role,
    mainResponsabilities: responsabilities,
    start: dateStart,
    end: dateEnd,
  }
}
