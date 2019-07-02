// import { date } from 'quasar'
// import { calculateAge } from '@in-house-functions/calculateAge'
export const columns = [
  {
    name: '_id',
    label: 'ID',
    field: '_id',
    width: '120px',
    style: { color: 'dark' },
    classes: 'bg-white',
    filter: true,
    sortable: false,
    type: 'number'
  },
  {
    name: 'company',
    label: 'Nome Cliente',
    field: 'company',
    width: '200px',
    style: { color: 'dark' },
    classes: 'bg-white',
    filter: true,
    sortable: false,
    type: 'string',
    align: 'left'
  },
  {
    name: 'fantasyname',
    label: 'Nome Fantasia',
    field: 'fantasyname',
    width: '100px',
    style: { color: 'dark' },
    classes: 'bg-white',
    filter: true,
    sortable: false,
    type: 'string',
    align: 'left'
  },
  {
    name: 'cpf',
    label: 'cpf',
    field: 'cpf',
    width: '100px',
    style: { color: 'dark' },
    classes: 'bg-white',
    filter: true,
    sortable: false,
    type: 'string',
    align: 'left'
  }
]
export const visibleColumns = ['company', 'fantasyname', 'cpf']
