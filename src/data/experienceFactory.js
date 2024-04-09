import {v4 as uuid} from 'uuid';

export default function ExperienceFactory() {
  return {
    id: uuid(),
    company: '',
    role: '',
    responsabilities: '',
    start: '',
    end: '',
  }
}
