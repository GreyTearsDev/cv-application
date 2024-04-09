import {v4 as uuid} from 'uuid';

export default function SchoolFactory() {
  return {
    id: uuid(),
    name: '',
    field: '',
    start: '',
    end: '',
  }
}
