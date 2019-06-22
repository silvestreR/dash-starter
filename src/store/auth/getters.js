import { isEmpty } from 'lodash'

export const isLogged = ({ user }) => !isEmpty(user)
export const currentUser = ({ user }) => user
export const currentToken = ({ token }) => token
