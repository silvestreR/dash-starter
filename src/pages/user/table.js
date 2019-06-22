import { date } from 'quasar'
import { calculateAge } from '@in-house-functions/calculateAge'
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
    name: 'fullname',
    label: 'Nome',
    field: 'fullname',
    width: '200px',
    style: { color: 'dark' },
    classes: 'bg-white',
    filter: true,
    sortable: false,
    type: 'string',
    align: 'left'
  },
  {
    name: 'username',
    label: 'Usuário',
    field: 'username',
    width: '100px',
    style: { color: 'dark' },
    classes: 'bg-white',
    filter: true,
    sortable: false,
    type: 'string',
    align: 'left'
  },
  {
    name: 'email',
    label: 'E-mail',
    field: 'email',
    width: '100px',
    style: { color: 'dark' },
    classes: 'bg-white',
    filter: true,
    sortable: false,
    type: 'string',
    align: 'left'
  },
  {
    name: 'gender',
    label: 'Sexo',
    field: 'gender',
    width: '30px',
    style: { color: 'dark' },
    classes: 'bg-white',
    filter: true,
    sortable: false,
    type: 'string',
    align: 'left'
  },
  {
    name: '',
    label: 'Nascimento',
    field: 'birthday',
    width: '70px',
    style: { color: 'dark' },
    classes: 'bg-white',
    filter: true,
    sortable: false,
    type: 'date',
    align: 'left',
    format (value) {
      return date.formatDate(value, 'DD-MM-YYYY')
    }
  },
  {
    name: 'age',
    label: 'Idade',
    field: 'birthday',
    width: '70px',
    style: { color: 'dark' },
    classes: 'bg-white',
    filter: true,
    sortable: false,
    type: 'number',
    align: 'left',
    format (value) {
      return calculateAge(value)
    }
  },
  {
    name: 'role',
    label: 'Perfil',
    field: 'role',
    width: '100px',
    style: { color: 'dark' },
    classes: 'bg-white',
    filter: true,
    sortable: false,
    type: 'string',
    align: 'left',
    format: value => value === 'agronomist' ? 'Agrônomo' : value === 'analyst' ? 'Analista' : value === 'secretary' ? 'Secretária' : value === 'financial' ? 'Financeiro' : 'administrador'
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
    name: 'status',
    label: 'Status',
    field: 'status',
    width: '100px',
    style: { color: 'dark' },
    classes: 'bg-white',
    filter: true,
    sortable: false,
    type: 'string',
    align: 'left',
    format: value => value === false ? 'Bloqueado' : 'Ativo'
  }
]
export const visibleColumns = ['fullname', 'username', 'email', 'role', 'status']
