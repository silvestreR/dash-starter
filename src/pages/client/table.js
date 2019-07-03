import { date } from 'quasar'
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
    type: 'number',
    align: 'left'
  },
  {
    name: 'status',
    label: 'status',
    field: 'status',
    width: '100px',
    style: { color: 'dark' },
    classes: 'bg-white',
    filter: true,
    sortable: false,
    type: 'string',
    align: 'left'
  },
  {
    name: 'updatedAt',
    label: 'Ùltima Alteração',
    field: 'updatedAt',
    width: '100px',
    style: { color: 'dark' },
    classes: 'bg-white',
    filter: true,
    sortable: false,
    type: 'string',
    align: 'left',
    format (value) {
      return date.formatDate(value, 'DD/MM/YYYY')
    }
  },
  {
    name: 'createdAt',
    label: 'Data Criação',
    field: 'createdAt',
    width: '100px',
    style: { color: 'dark' },
    classes: 'bg-white',
    filter: true,
    sortable: false,
    type: 'string',
    align: 'left',
    format (value) {
      return date.formatDate(value, 'DD/MM/YYYY')
    }
  }
]
export const visibleColumns = ['company', 'fantasyname', 'cpf', 'status']
